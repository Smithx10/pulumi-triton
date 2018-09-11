// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";

export class InstanceTemplate extends pulumi.CustomResource {
    /**
     * Get an existing InstanceTemplate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InstanceTemplateState): InstanceTemplate {
        return new InstanceTemplate(name, <any>state, { id });
    }

    /**
     * Whether to enable the firewall for group instances
     */
    public readonly firewallEnabled: pulumi.Output<boolean | undefined>;
    /**
     * UUID of the image
     */
    public readonly image: pulumi.Output<string>;
    /**
     * Metadata for group instances
     */
    public readonly metadata: pulumi.Output<{[key: string]: any}>;
    /**
     * Network IDs for group instances
     */
    public readonly networks: pulumi.Output<string[]>;
    /**
     * Package name used for provisioning
     */
    public readonly package: pulumi.Output<string>;
    /**
     * Tags for group instances
     */
    public readonly tags: pulumi.Output<{[key: string]: any}>;
    /**
     * Friendly name for the instance template
     */
    public readonly templateName: pulumi.Output<string>;
    /**
     * Data copied to instance on boot
     */
    public readonly userdata: pulumi.Output<string>;

    /**
     * Create a InstanceTemplate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: InstanceTemplateArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: InstanceTemplateArgs | InstanceTemplateState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: InstanceTemplateState = argsOrState as InstanceTemplateState | undefined;
            inputs["firewallEnabled"] = state ? state.firewallEnabled : undefined;
            inputs["image"] = state ? state.image : undefined;
            inputs["metadata"] = state ? state.metadata : undefined;
            inputs["networks"] = state ? state.networks : undefined;
            inputs["package"] = state ? state.package : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["templateName"] = state ? state.templateName : undefined;
            inputs["userdata"] = state ? state.userdata : undefined;
        } else {
            const args = argsOrState as InstanceTemplateArgs | undefined;
            if (!args || args.image === undefined) {
                throw new Error("Missing required property 'image'");
            }
            if (!args || args.package === undefined) {
                throw new Error("Missing required property 'package'");
            }
            if (!args || args.templateName === undefined) {
                throw new Error("Missing required property 'templateName'");
            }
            inputs["firewallEnabled"] = args ? args.firewallEnabled : undefined;
            inputs["image"] = args ? args.image : undefined;
            inputs["metadata"] = args ? args.metadata : undefined;
            inputs["networks"] = args ? args.networks : undefined;
            inputs["package"] = args ? args.package : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["templateName"] = args ? args.templateName : undefined;
            inputs["userdata"] = args ? args.userdata : undefined;
        }
        super("triton:index/instanceTemplate:InstanceTemplate", name, inputs, opts);
    }
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
    readonly metadata?: pulumi.Input<{[key: string]: any}>;
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
    readonly tags?: pulumi.Input<{[key: string]: any}>;
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
    readonly metadata?: pulumi.Input<{[key: string]: any}>;
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
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * Friendly name for the instance template
     */
    readonly templateName: pulumi.Input<string>;
    /**
     * Data copied to instance on boot
     */
    readonly userdata?: pulumi.Input<string>;
}
