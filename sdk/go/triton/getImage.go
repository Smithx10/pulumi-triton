// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package triton

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

func LookupImage(ctx *pulumi.Context, args *GetImageArgs) (*GetImageResult, error) {
	inputs := make(map[string]interface{})
	if args != nil {
		inputs["mostRecent"] = args.MostRecent
		inputs["name"] = args.Name
		inputs["os"] = args.Os
		inputs["owner"] = args.Owner
		inputs["public"] = args.Public
		inputs["state"] = args.State
		inputs["type"] = args.Type
		inputs["version"] = args.Version
	}
	outputs, err := ctx.Invoke("triton:index/getImage:getImage", inputs)
	if err != nil {
		return nil, err
	}
	return &GetImageResult{
		Id: outputs["id"],
	}, nil
}

// A collection of arguments for invoking getImage.
type GetImageArgs struct {
	MostRecent interface{}
	Name interface{}
	Os interface{}
	Owner interface{}
	Public interface{}
	State interface{}
	Type interface{}
	Version interface{}
}

// A collection of values returned by getImage.
type GetImageResult struct {
	// id is the provider-assigned unique ID for this managed resource.
	Id interface{}
}
