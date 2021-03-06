// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package triton

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

type Machine struct {
	s *pulumi.ResourceState
}

// NewMachine registers a new resource with the given unique name, arguments, and options.
func NewMachine(ctx *pulumi.Context,
	name string, args *MachineArgs, opts ...pulumi.ResourceOpt) (*Machine, error) {
	if args == nil || args.Image == nil {
		return nil, errors.New("missing required argument 'Image'")
	}
	if args == nil || args.Package == nil {
		return nil, errors.New("missing required argument 'Package'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["administratorPw"] = nil
		inputs["affinities"] = nil
		inputs["cloudConfig"] = nil
		inputs["cns"] = nil
		inputs["deletionProtectionEnabled"] = nil
		inputs["firewallEnabled"] = nil
		inputs["image"] = nil
		inputs["locality"] = nil
		inputs["metadata"] = nil
		inputs["name"] = nil
		inputs["networks"] = nil
		inputs["nics"] = nil
		inputs["package"] = nil
		inputs["rootAuthorizedKeys"] = nil
		inputs["tags"] = nil
		inputs["userData"] = nil
		inputs["userScript"] = nil
	} else {
		inputs["administratorPw"] = args.AdministratorPw
		inputs["affinities"] = args.Affinities
		inputs["cloudConfig"] = args.CloudConfig
		inputs["cns"] = args.Cns
		inputs["deletionProtectionEnabled"] = args.DeletionProtectionEnabled
		inputs["firewallEnabled"] = args.FirewallEnabled
		inputs["image"] = args.Image
		inputs["locality"] = args.Locality
		inputs["metadata"] = args.Metadata
		inputs["name"] = args.Name
		inputs["networks"] = args.Networks
		inputs["nics"] = args.Nics
		inputs["package"] = args.Package
		inputs["rootAuthorizedKeys"] = args.RootAuthorizedKeys
		inputs["tags"] = args.Tags
		inputs["userData"] = args.UserData
		inputs["userScript"] = args.UserScript
	}
	inputs["computeNode"] = nil
	inputs["created"] = nil
	inputs["dataset"] = nil
	inputs["disk"] = nil
	inputs["domainNames"] = nil
	inputs["ips"] = nil
	inputs["memory"] = nil
	inputs["primaryip"] = nil
	inputs["type"] = nil
	inputs["updated"] = nil
	s, err := ctx.RegisterResource("triton:index/machine:Machine", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Machine{s: s}, nil
}

// GetMachine gets an existing Machine resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetMachine(ctx *pulumi.Context,
	name string, id pulumi.ID, state *MachineState, opts ...pulumi.ResourceOpt) (*Machine, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["administratorPw"] = state.AdministratorPw
		inputs["affinities"] = state.Affinities
		inputs["cloudConfig"] = state.CloudConfig
		inputs["cns"] = state.Cns
		inputs["computeNode"] = state.ComputeNode
		inputs["created"] = state.Created
		inputs["dataset"] = state.Dataset
		inputs["deletionProtectionEnabled"] = state.DeletionProtectionEnabled
		inputs["disk"] = state.Disk
		inputs["domainNames"] = state.DomainNames
		inputs["firewallEnabled"] = state.FirewallEnabled
		inputs["image"] = state.Image
		inputs["ips"] = state.Ips
		inputs["locality"] = state.Locality
		inputs["memory"] = state.Memory
		inputs["metadata"] = state.Metadata
		inputs["name"] = state.Name
		inputs["networks"] = state.Networks
		inputs["nics"] = state.Nics
		inputs["package"] = state.Package
		inputs["primaryip"] = state.Primaryip
		inputs["rootAuthorizedKeys"] = state.RootAuthorizedKeys
		inputs["tags"] = state.Tags
		inputs["type"] = state.Type
		inputs["updated"] = state.Updated
		inputs["userData"] = state.UserData
		inputs["userScript"] = state.UserScript
	}
	s, err := ctx.ReadResource("triton:index/machine:Machine", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Machine{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *Machine) URN() *pulumi.URNOutput {
	return r.s.URN
}

// ID is this resource's unique identifier assigned by its provider.
func (r *Machine) ID() *pulumi.IDOutput {
	return r.s.ID
}

// Administrator's initial password (Windows only)
func (r *Machine) AdministratorPw() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["administratorPw"])
}

// Label based affinity rules for assisting instance placement
func (r *Machine) Affinities() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["affinities"])
}

// copied to machine on boot
func (r *Machine) CloudConfig() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["cloudConfig"])
}

// Container Name Service
func (r *Machine) Cns() *pulumi.Output {
	return r.s.State["cns"]
}

// UUID of the server on which the instance is located
func (r *Machine) ComputeNode() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["computeNode"])
}

// When the machine was created
func (r *Machine) Created() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["created"])
}

// Dataset URN with which the machine was provisioned
func (r *Machine) Dataset() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["dataset"])
}

// Whether to enable deletion protection for this machine
func (r *Machine) DeletionProtectionEnabled() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["deletionProtectionEnabled"])
}

// Amount of disk allocated to the machine (in Gb)
func (r *Machine) Disk() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["disk"])
}

// List of domain names from Triton CNS
func (r *Machine) DomainNames() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["domainNames"])
}

// Whether to enable the firewall for this machine
func (r *Machine) FirewallEnabled() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["firewallEnabled"])
}

// UUID of the image
func (r *Machine) Image() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["image"])
}

// IP addresses assigned to the machine
func (r *Machine) Ips() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["ips"])
}

// UUID based locality hints for assisting placement behavior
func (r *Machine) Locality() *pulumi.Output {
	return r.s.State["locality"]
}

// Amount of memory allocated to the machine (in Mb)
func (r *Machine) Memory() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["memory"])
}

// Machine metadata
func (r *Machine) Metadata() *pulumi.MapOutput {
	return (*pulumi.MapOutput)(r.s.State["metadata"])
}

// Friendly name for machine
func (r *Machine) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

// Desired network IDs
func (r *Machine) Networks() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["networks"])
}

// Network interface
func (r *Machine) Nics() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["nics"])
}

// The package for use for provisioning
func (r *Machine) Package() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["package"])
}

// Primary (public) IP address for the machine
func (r *Machine) Primaryip() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["primaryip"])
}

// Authorized keys for the root user on this machine
func (r *Machine) RootAuthorizedKeys() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["rootAuthorizedKeys"])
}

// Machine tags
func (r *Machine) Tags() *pulumi.MapOutput {
	return (*pulumi.MapOutput)(r.s.State["tags"])
}

// Machine type (smartmachine or virtualmachine)
func (r *Machine) Type() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["type"])
}

// When the machine was updated
func (r *Machine) Updated() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["updated"])
}

// Data copied to machine on boot
func (r *Machine) UserData() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["userData"])
}

// User script to run on boot (every boot on SmartMachines)
func (r *Machine) UserScript() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["userScript"])
}

// Input properties used for looking up and filtering Machine resources.
type MachineState struct {
	// Administrator's initial password (Windows only)
	AdministratorPw interface{}
	// Label based affinity rules for assisting instance placement
	Affinities interface{}
	// copied to machine on boot
	CloudConfig interface{}
	// Container Name Service
	Cns interface{}
	// UUID of the server on which the instance is located
	ComputeNode interface{}
	// When the machine was created
	Created interface{}
	// Dataset URN with which the machine was provisioned
	Dataset interface{}
	// Whether to enable deletion protection for this machine
	DeletionProtectionEnabled interface{}
	// Amount of disk allocated to the machine (in Gb)
	Disk interface{}
	// List of domain names from Triton CNS
	DomainNames interface{}
	// Whether to enable the firewall for this machine
	FirewallEnabled interface{}
	// UUID of the image
	Image interface{}
	// IP addresses assigned to the machine
	Ips interface{}
	// UUID based locality hints for assisting placement behavior
	Locality interface{}
	// Amount of memory allocated to the machine (in Mb)
	Memory interface{}
	// Machine metadata
	Metadata interface{}
	// Friendly name for machine
	Name interface{}
	// Desired network IDs
	Networks interface{}
	// Network interface
	Nics interface{}
	// The package for use for provisioning
	Package interface{}
	// Primary (public) IP address for the machine
	Primaryip interface{}
	// Authorized keys for the root user on this machine
	RootAuthorizedKeys interface{}
	// Machine tags
	Tags interface{}
	// Machine type (smartmachine or virtualmachine)
	Type interface{}
	// When the machine was updated
	Updated interface{}
	// Data copied to machine on boot
	UserData interface{}
	// User script to run on boot (every boot on SmartMachines)
	UserScript interface{}
}

// The set of arguments for constructing a Machine resource.
type MachineArgs struct {
	// Administrator's initial password (Windows only)
	AdministratorPw interface{}
	// Label based affinity rules for assisting instance placement
	Affinities interface{}
	// copied to machine on boot
	CloudConfig interface{}
	// Container Name Service
	Cns interface{}
	// Whether to enable deletion protection for this machine
	DeletionProtectionEnabled interface{}
	// Whether to enable the firewall for this machine
	FirewallEnabled interface{}
	// UUID of the image
	Image interface{}
	// UUID based locality hints for assisting placement behavior
	Locality interface{}
	// Machine metadata
	Metadata interface{}
	// Friendly name for machine
	Name interface{}
	// Desired network IDs
	Networks interface{}
	// Network interface
	Nics interface{}
	// The package for use for provisioning
	Package interface{}
	// Authorized keys for the root user on this machine
	RootAuthorizedKeys interface{}
	// Machine tags
	Tags interface{}
	// Data copied to machine on boot
	UserData interface{}
	// User script to run on boot (every boot on SmartMachines)
	UserScript interface{}
}
