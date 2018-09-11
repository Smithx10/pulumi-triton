// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package triton

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

func LookupFabricVlan(ctx *pulumi.Context, args *GetFabricVlanArgs) (*GetFabricVlanResult, error) {
	inputs := make(map[string]interface{})
	if args != nil {
		inputs["description"] = args.Description
		inputs["name"] = args.Name
		inputs["vlanId"] = args.VlanId
	}
	outputs, err := ctx.Invoke("triton:index/getFabricVlan:getFabricVlan", inputs)
	if err != nil {
		return nil, err
	}
	return &GetFabricVlanResult{
		Id: outputs["id"],
	}, nil
}

// A collection of arguments for invoking getFabricVlan.
type GetFabricVlanArgs struct {
	Description interface{}
	Name interface{}
	VlanId interface{}
}

// A collection of values returned by getFabricVlan.
type GetFabricVlanResult struct {
	// id is the provider-assigned unique ID for this managed resource.
	Id interface{}
}