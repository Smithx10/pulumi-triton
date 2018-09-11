import * as pulumi from "@pulumi/pulumi";
export declare class InstanceTemplate extends pulumi.CustomResource {
    /**
     * Get an existing InstanceTemplate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InstanceTemplateState): InstanceTemplate;
    /**
     * Whether to enable the firewall for group instances
     */
    readonly firewallEnabled: pulumi.Output<boolean | undefined>;
    /**
     * UUID of the image
     */
    readonly image: pulumi.Output<string>;
    /**
     * Metadata for group instances
     */
    readonly metadata: pulumi.Output<{
        [key: string]: any;
    }>;
    /**
     * Network IDs for group instances
     */
    readonly networks: pulumi.Output<string[]>;
    /**
     * Package name used for provisioning
     */
    readonly package: pulumi.Output<string>;
    /**
     * Tags for group instances
     */
    readonly tags: pulumi.Output<{
        [key: string]: any;
    }>;
    /**
     * Friendly name for the instance template
     */
    readonly templateName: pulumi.Output<string>;
    /**
     * Data copied to instance on boot
     */
    readonly userdata: pulumi.Output<string>;
    /**
     * Create a InstanceTemplate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: InstanceTemplateArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering InstanceTemplate resources.
 */
export interface InstanceTemplateState {
    /**
     * Whether to enable the firewall for group instances
     */
    readonly firewallEnabled?: pulumi.Input<boolean>;
    /**
     * UUID of the image
     */
    readonly image?: pulumi.Input<string>;
    /**
     * Metadata for group instances
     */
    readonly metadata?: pulumi.Input<{
        [key: string]: any;
    }>;
    /**
     * Network IDs for group instances
     */
    readonly networks?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Package name used for provisioning
     */
    readonly package?: pulumi.Input<string>;
    /**
     * Tags for group instances
     */
    readonly tags?: pulumi.Input<{
        [key: string]: any;
    }>;
    /**
     * Friendly name for the instance template
     */
    readonly templateName?: pulumi.Input<string>;
    /**
     * Data copied to instance on boot
     */
    readonly userdata?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a InstanceTemplate resource.
 */
export interface InstanceTemplateArgs {
    /**
     * Whether to enable the firewall for group instances
     */
    readonly firewallEnabled?: pulumi.Input<boolean>;
    /**
     * UUID of the image
     */
    readonly image: pulumi.Input<string>;
    /**
     * Metadata for group instances
     */
    readonly metadata?: pulumi.Input<{
        [key: string]: any;
    }>;
    /**
     * Network IDs for group instances
     */
    readonly networks?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Package name used for provisioning
     */
    readonly package: pulumi.Input<string>;
    /**
     * Tags for group instances
     */
    readonly tags?: pulumi.Input<{
        [key: string]: any;
    }>;
    /**
     * Friendly name for the instance template
     */
    readonly templateName: pulumi.Input<string>;
    /**
     * Data copied to instance on boot
     */
    readonly userdata?: pulumi.Input<string>;
}
