// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";

export class Vlan extends pulumi.CustomResource {
    /**
     * Get an existing Vlan resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VlanState): Vlan {
        return new Vlan(name, <any>state, { id });
    }

    /**
     * Description of the VLAN
     */
    public readonly description: pulumi.Output<string | undefined>;
    /**
     * Unique name to identify VLAN
     */
    public readonly name: pulumi.Output<string>;
    /**
     * Number between 0-4095 indicating VLAN ID
     */
    public readonly vlanId: pulumi.Output<number>;

    /**
     * Create a Vlan resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VlanArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VlanArgs | VlanState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: VlanState = argsOrState as VlanState | undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["vlanId"] = state ? state.vlanId : undefined;
        } else {
            const args = argsOrState as VlanArgs | undefined;
            if (!args || args.vlanId === undefined) {
                throw new Error("Missing required property 'vlanId'");
            }
            inputs["description"] = args ? args.description : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["vlanId"] = args ? args.vlanId : undefined;
        }
        super("triton:index/vlan:Vlan", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Vlan resources.
 */
export interface VlanState {
    /**
     * Description of the VLAN
     */
    readonly description?: pulumi.Input<string>;
    /**
     * Unique name to identify VLAN
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Number between 0-4095 indicating VLAN ID
     */
    readonly vlanId?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a Vlan resource.
 */
export interface VlanArgs {
    /**
     * Description of the VLAN
     */
    readonly description?: pulumi.Input<string>;
    /**
     * Unique name to identify VLAN
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Number between 0-4095 indicating VLAN ID
     */
    readonly vlanId: pulumi.Input<number>;
}
