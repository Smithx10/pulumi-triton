// Copyright 2016-2018, Pulumi Corporation.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package engine

import (
	"reflect"
	"time"

	"github.com/pulumi/pulumi/pkg/diag"
	"github.com/pulumi/pulumi/pkg/diag/colors"
	"github.com/pulumi/pulumi/pkg/resource"
	"github.com/pulumi/pulumi/pkg/resource/config"
	"github.com/pulumi/pulumi/pkg/resource/deploy"
	"github.com/pulumi/pulumi/pkg/tokens"
	"github.com/pulumi/pulumi/pkg/util/contract"
	"github.com/pulumi/pulumi/pkg/util/logging"
)

// Event represents an event generated by the engine during an operation. The underlying
// type for the `Payload` field will differ depending on the value of the `Type` field
type Event struct {
	Type    EventType
	Payload interface{}
}

// EventType is the kind of event being emitted.
type EventType string

const (
	CancelEvent             EventType = "cancel"
	StdoutColorEvent        EventType = "stdoutcolor"
	DiagEvent               EventType = "diag"
	PreludeEvent            EventType = "prelude"
	SummaryEvent            EventType = "summary"
	ResourcePreEvent        EventType = "resource-pre"
	ResourceOutputsEvent    EventType = "resource-outputs"
	ResourceOperationFailed EventType = "resource-operationfailed"
)

func cancelEvent() Event {
	return Event{Type: CancelEvent}
}

// DiagEventPayload is the payload for an event with type `diag`
type DiagEventPayload struct {
	URN      resource.URN
	Prefix   string
	Message  string
	Color    colors.Colorization
	Severity diag.Severity
	StreamID int32
}

type StdoutEventPayload struct {
	Message string
	Color   colors.Colorization
}

type PreludeEventPayload struct {
	IsPreview bool              // true if this prelude is for a plan operation
	Config    map[string]string // the keys and values for config. For encrypted config, the values may be blinded
}

type SummaryEventPayload struct {
	IsPreview       bool            // true if this summary is for a plan operation
	MaybeCorrupt    bool            // true if one or more resources may be corrupt
	Duration        time.Duration   // the duration of the entire update operation (zero values for previews)
	ResourceChanges ResourceChanges // count of changed resources, useful for reporting
}

type ResourceOperationFailedPayload struct {
	Metadata StepEventMetadata
	Status   resource.Status
	Steps    int
}

type ResourceOutputsEventPayload struct {
	Metadata StepEventMetadata
	Planning bool
	Debug    bool
}

type ResourcePreEventPayload struct {
	Metadata StepEventMetadata
	Planning bool
	Debug    bool
}

type StepEventMetadata struct {
	Op       deploy.StepOp           // the operation performed by this step.
	URN      resource.URN            // the resource URN (for before and after).
	Type     tokens.Type             // the type affected by this step.
	Old      *StepEventStateMetadata // the state of the resource before performing this step.
	New      *StepEventStateMetadata // the state of the resource after performing this step.
	Res      *StepEventStateMetadata // the latest state for the resource that is known (worst case, old).
	Keys     []resource.PropertyKey  // the keys causing replacement (only for CreateStep and ReplaceStep).
	Logical  bool                    // true if this step represents a logical operation in the program.
	Provider string                  // the provider that performed this step.
}

type StepEventStateMetadata struct {
	// the resource's type.
	Type tokens.Type
	// the resource's object urn, a human-friendly, unique name for the resource.
	URN resource.URN
	// true if the resource is custom, managed by a plugin.
	Custom bool
	// true if this resource is pending deletion due to a replacement.
	Delete bool
	// the resource's unique ID, assigned by the resource provider (or blank if none/uncreated).
	ID resource.ID
	// an optional parent URN that this resource belongs to.
	Parent resource.URN
	// true to "protect" this resource (protected resources cannot be deleted).
	Protect bool
	// the resource's input properties (as specified by the program). Note: because this will cross
	// over rpc boundaries it will be slightly different than the Inputs found in resource_state.
	// Specifically, secrets will have been filtered out, and large values (like assets) will be
	// have a simple hash-based representation.  This allows clients to display this information
	// properly, without worrying about leaking sensitive data, and without having to transmit huge
	// amounts of data.
	Inputs resource.PropertyMap
	// the resource's complete output state (as returned by the resource provider).  See "Inputs"
	// for additional details about how data will be transformed before going into this map.
	Outputs resource.PropertyMap
	// the resource's provider reference
	Provider string
}

func makeEventEmitter(events chan<- Event, update UpdateInfo) (eventEmitter, error) {
	target := update.GetTarget()
	var secrets []string
	if target.Config.HasSecureValue() {
		for k, v := range target.Config {
			if !v.Secure() {
				continue
			}

			secret, err := v.Value(target.Decrypter)
			if err != nil {
				return eventEmitter{}, DecryptError{
					Key: k,
					Err: err,
				}
			}
			secrets = append(secrets, secret)
		}
	}

	logging.AddGlobalFilter(logging.CreateFilter(secrets, "[secret]"))

	return eventEmitter{
		Chan: events,
	}, nil
}

type eventEmitter struct {
	Chan chan<- Event
}

func makeStepEventMetadata(op deploy.StepOp, step deploy.Step, debug bool) StepEventMetadata {
	contract.Assert(op == step.Op() || step.Op() == deploy.OpRefresh)

	var keys []resource.PropertyKey
	if step.Op() == deploy.OpCreateReplacement {
		keys = step.(*deploy.CreateStep).Keys()
	} else if step.Op() == deploy.OpReplace {
		keys = step.(*deploy.ReplaceStep).Keys()
	}

	return StepEventMetadata{
		Op:       op,
		URN:      step.URN(),
		Type:     step.Type(),
		Keys:     keys,
		Old:      makeStepEventStateMetadata(step.Old(), debug),
		New:      makeStepEventStateMetadata(step.New(), debug),
		Res:      makeStepEventStateMetadata(step.Res(), debug),
		Logical:  step.Logical(),
		Provider: step.Provider(),
	}
}

func makeStepEventStateMetadata(state *resource.State, debug bool) *StepEventStateMetadata {
	if state == nil {
		return nil
	}

	return &StepEventStateMetadata{
		Type:     state.Type,
		URN:      state.URN,
		Custom:   state.Custom,
		Delete:   state.Delete,
		ID:       state.ID,
		Parent:   state.Parent,
		Protect:  state.Protect,
		Inputs:   filterPropertyMap(state.Inputs, debug),
		Outputs:  filterPropertyMap(state.Outputs, debug),
		Provider: state.Provider,
	}
}

func filterPropertyMap(propertyMap resource.PropertyMap, debug bool) resource.PropertyMap {
	mappable := propertyMap.Mappable()

	var filterValue func(v interface{}) interface{}

	filterPropertyValue := func(pv resource.PropertyValue) resource.PropertyValue {
		return resource.NewPropertyValue(filterValue(pv.Mappable()))
	}

	// filter values walks unwrapped (i.e. non-PropertyValue) values and applies the filter function
	// to them recursively.  The only thing the filter actually applies to is strings.
	//
	// The return value of this function should have the same type as the input value.
	filterValue = func(v interface{}) interface{} {
		if v == nil {
			return nil
		}

		// Else, check for some known primitive types.
		switch t := v.(type) {
		case bool, int, uint, int32, uint32,
			int64, uint64, float32, float64:
			// simple types.  map over as is.
			return v
		case string:
			// have to ensure we filter out secrets.
			return logging.FilterString(t)
		case *resource.Asset:
			text := t.Text
			if text != "" {
				// we don't want to include the full text of an asset as we serialize it over as
				// events.  They represent user files and are thus are unbounded in size.  Instead,
				// we only include the text if it represents a user's serialized program code, as
				// that is something we want the receiver to see to display as part of
				// progress/diffs/etc.
				if t.IsUserProgramCode() {
					// also make sure we filter this in case there are any secrets in the code.
					text = logging.FilterString(resource.MassageIfUserProgramCodeAsset(t, debug).Text)
				} else {
					// We need to have some string here so that we preserve that this is a
					// text-asset
					text = "<stripped>"
				}
			}

			return &resource.Asset{
				Sig:  t.Sig,
				Hash: t.Hash,
				Text: text,
				Path: t.Path,
				URI:  t.URI,
			}
		case *resource.Archive:
			return &resource.Archive{
				Sig:    t.Sig,
				Hash:   t.Hash,
				Path:   t.Path,
				URI:    t.URI,
				Assets: filterValue(t.Assets).(map[string]interface{}),
			}
		case resource.Computed:
			return resource.Computed{
				Element: filterPropertyValue(t.Element),
			}
		case resource.Output:
			return resource.Output{
				Element: filterPropertyValue(t.Element),
			}
		}

		// Next, see if it's an array, slice, pointer or struct, and handle each accordingly.
		rv := reflect.ValueOf(v)
		switch rk := rv.Type().Kind(); rk {
		case reflect.Array, reflect.Slice:
			// If an array or slice, just create an array out of it.
			var arr []interface{}
			for i := 0; i < rv.Len(); i++ {
				arr = append(arr, filterValue(rv.Index(i).Interface()))
			}
			return arr
		case reflect.Ptr:
			if rv.IsNil() {
				return nil
			}

			v1 := filterValue(rv.Elem().Interface())
			return &v1
		case reflect.Map:
			obj := make(map[string]interface{})
			for _, key := range rv.MapKeys() {
				k := key.Interface().(string)
				v := rv.MapIndex(key).Interface()
				obj[k] = filterValue(v)
			}
			return obj
		default:
			contract.Failf("Unrecognized value type: type=%v kind=%v", rv.Type(), rk)
		}

		return nil
	}

	return resource.NewPropertyMapFromMapRepl(
		mappable, nil, /*replk*/
		func(v interface{}) (resource.PropertyValue, bool) {
			return resource.NewPropertyValue(filterValue(v)), true
		})
}

func (e *eventEmitter) resourceOperationFailedEvent(
	step deploy.Step, status resource.Status, steps int, debug bool) {

	contract.Requiref(e != nil, "e", "!= nil")

	e.Chan <- Event{
		Type: ResourceOperationFailed,
		Payload: ResourceOperationFailedPayload{
			Metadata: makeStepEventMetadata(step.Op(), step, debug),
			Status:   status,
			Steps:    steps,
		},
	}
}

func (e *eventEmitter) resourceOutputsEvent(op deploy.StepOp, step deploy.Step, planning bool, debug bool) {
	contract.Requiref(e != nil, "e", "!= nil")

	e.Chan <- Event{
		Type: ResourceOutputsEvent,
		Payload: ResourceOutputsEventPayload{
			Metadata: makeStepEventMetadata(op, step, debug),
			Planning: planning,
			Debug:    debug,
		},
	}
}

func (e *eventEmitter) resourcePreEvent(
	step deploy.Step, planning bool, debug bool) {

	contract.Requiref(e != nil, "e", "!= nil")

	e.Chan <- Event{
		Type: ResourcePreEvent,
		Payload: ResourcePreEventPayload{
			Metadata: makeStepEventMetadata(step.Op(), step, debug),
			Planning: planning,
			Debug:    debug,
		},
	}
}

func (e *eventEmitter) preludeEvent(isPreview bool, cfg config.Map) {
	contract.Requiref(e != nil, "e", "!= nil")

	configStringMap := make(map[string]string, len(cfg))
	for k, v := range cfg {
		keyString := k.String()
		valueString, err := v.Value(config.NewBlindingDecrypter())
		contract.AssertNoError(err)
		configStringMap[keyString] = valueString
	}

	e.Chan <- Event{
		Type: PreludeEvent,
		Payload: PreludeEventPayload{
			IsPreview: isPreview,
			Config:    configStringMap,
		},
	}
}

func (e *eventEmitter) previewSummaryEvent(resourceChanges ResourceChanges) {
	contract.Requiref(e != nil, "e", "!= nil")

	e.Chan <- Event{
		Type: SummaryEvent,
		Payload: SummaryEventPayload{
			IsPreview:       true,
			MaybeCorrupt:    false,
			Duration:        0,
			ResourceChanges: resourceChanges,
		},
	}
}

func (e *eventEmitter) updateSummaryEvent(maybeCorrupt bool,
	duration time.Duration, resourceChanges ResourceChanges) {
	contract.Requiref(e != nil, "e", "!= nil")

	e.Chan <- Event{
		Type: SummaryEvent,
		Payload: SummaryEventPayload{
			IsPreview:       false,
			MaybeCorrupt:    maybeCorrupt,
			Duration:        duration,
			ResourceChanges: resourceChanges,
		},
	}
}

func diagEvent(e *eventEmitter, d *diag.Diag, prefix, msg string, sev diag.Severity) {
	contract.Requiref(e != nil, "e", "!= nil")

	e.Chan <- Event{
		Type: DiagEvent,
		Payload: DiagEventPayload{
			URN:      d.URN,
			Prefix:   logging.FilterString(prefix),
			Message:  logging.FilterString(msg),
			Color:    colors.Raw,
			Severity: sev,
			StreamID: d.StreamID,
		},
	}
}

func (e *eventEmitter) diagDebugEvent(d *diag.Diag, prefix, msg string) {
	diagEvent(e, d, prefix, msg, diag.Debug)
}

func (e *eventEmitter) diagInfoEvent(d *diag.Diag, prefix, msg string) {
	diagEvent(e, d, prefix, msg, diag.Info)
}

func (e *eventEmitter) diagInfoerrEvent(d *diag.Diag, prefix, msg string) {
	diagEvent(e, d, prefix, msg, diag.Infoerr)
}

func (e *eventEmitter) diagErrorEvent(d *diag.Diag, prefix, msg string) {
	diagEvent(e, d, prefix, msg, diag.Error)
}

func (e *eventEmitter) diagWarningEvent(d *diag.Diag, prefix, msg string) {
	diagEvent(e, d, prefix, msg, diag.Warning)
}