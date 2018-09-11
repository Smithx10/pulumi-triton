import * as pulumi from "@pulumi/pulumi";
export declare class Snapshot extends pulumi.CustomResource {
    /**
     * Get an existing Snapshot resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SnapshotState): Snapshot;
    readonly machineId: pulumi.Output<string>;
    readonly name: pulumi.Output<string>;
    readonly state: pulumi.Output<string>;
    /**
     * Create a Snapshot resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SnapshotArgs, opts?: pulumi.CustomResourceOptions);
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
