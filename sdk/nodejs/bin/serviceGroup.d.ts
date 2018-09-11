import * as pulumi from "@pulumi/pulumi";
export declare class ServiceGroup extends pulumi.CustomResource {
    /**
     * Get an existing ServiceGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ServiceGroupState): ServiceGroup;
    /**
     * Number of instances to launch and monitor
     */
    readonly capacity: pulumi.Output<number>;
    /**
     * Friendly name for the service group
     */
    readonly groupName: pulumi.Output<string>;
    /**
     * Identifier of an instance template
     */
    readonly template: pulumi.Output<string>;
    /**
     * Create a ServiceGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServiceGroupArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ServiceGroup resources.
 */
export interface ServiceGroupState {
    /**
     * Number of instances to launch and monitor
     */
    readonly capacity?: pulumi.Input<number>;
    /**
     * Friendly name for the service group
     */
    readonly groupName?: pulumi.Input<string>;
    /**
     * Identifier of an instance template
     */
    readonly template?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ServiceGroup resource.
 */
export interface ServiceGroupArgs {
    /**
     * Number of instances to launch and monitor
     */
    readonly capacity?: pulumi.Input<number>;
    /**
     * Friendly name for the service group
     */
    readonly groupName: pulumi.Input<string>;
    /**
     * Identifier of an instance template
     */
    readonly template: pulumi.Input<string>;
}
