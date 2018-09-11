// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package triton

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

type Snapshot struct {
	s *pulumi.ResourceState
}

// NewSnapshot registers a new resource with the given unique name, arguments, and options.
func NewSnapshot(ctx *pulumi.Context,
	name string, args *SnapshotArgs, opts ...pulumi.ResourceOpt) (*Snapshot, error) {
	if args == nil || args.MachineId == nil {
		return nil, errors.New("missing required argument 'MachineId'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["machineId"] = nil
		inputs["name"] = nil
	} else {
		inputs["machineId"] = args.MachineId
		inputs["name"] = args.Name
	}
	inputs["state"] = nil
	s, err := ctx.RegisterResource("triton:index/snapshot:Snapshot", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Snapshot{s: s}, nil
}

// GetSnapshot gets an existing Snapshot resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetSnapshot(ctx *pulumi.Context,
	name string, id pulumi.ID, state *SnapshotState, opts ...pulumi.ResourceOpt) (*Snapshot, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["machineId"] = state.MachineId
		inputs["name"] = state.Name
		inputs["state"] = state.State
	}
	s, err := ctx.ReadResource("triton:index/snapshot:Snapshot", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Snapshot{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *Snapshot) URN() *pulumi.URNOutput {
	return r.s.URN
}

// ID is this resource's unique identifier assigned by its provider.
func (r *Snapshot) ID() *pulumi.IDOutput {
	return r.s.ID
}

func (r *Snapshot) MachineId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["machineId"])
}

func (r *Snapshot) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

func (r *Snapshot) State() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["state"])
}

// Input properties used for looking up and filtering Snapshot resources.
type SnapshotState struct {
	MachineId interface{}
	Name interface{}
	State interface{}
}

// The set of arguments for constructing a Snapshot resource.
type SnapshotArgs struct {
	MachineId interface{}
	Name interface{}
}