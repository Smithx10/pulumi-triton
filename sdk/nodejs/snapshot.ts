// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";

export class Snapshot extends pulumi.CustomResource {
    /**
     * Get an existing Snapshot resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SnapshotState): Snapshot {
        return new Snapshot(name, <any>state, { id });
    }

    public readonly machineId: pulumi.Output<string>;
    public readonly name: pulumi.Output<string>;
    public /*out*/ readonly state: pulumi.Output<string>;

    /**
     * Create a Snapshot resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SnapshotArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SnapshotArgs | SnapshotState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: SnapshotState = argsOrState as SnapshotState | undefined;
            inputs["machineId"] = state ? state.machineId : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["state"] = state ? state.state : undefined;
        } else {
            const args = argsOrState as SnapshotArgs | undefined;
            if (!args || args.machineId === undefined) {
                throw new Error("Missing required property 'machineId'");
            }
            inputs["machineId"] = args ? args.machineId : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["state"] = undefined /*out*/;
        }
        super("triton:index/snapshot:Snapshot", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Snapshot resources.
 */
export interface SnapshotState {
    readonly machineId?: pulumi.Input<string>;
    readonly name?: pulumi.Input<string>;
    readonly state?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Snapshot resource.
 */
export interface SnapshotArgs {
    readonly machineId: pulumi.Input<string>;
    readonly name?: pulumi.Input<string>;
}