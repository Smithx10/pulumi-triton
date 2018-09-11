import * as pulumi from "@pulumi/pulumi";
export declare class Key extends pulumi.CustomResource {
    /**
     * Get an existing Key resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: KeyState): Key;
    /**
     * Content of public key from disk in OpenSSH format
     */
    readonly key: pulumi.Output<string>;
    /**
     * Name of the key (generated from the key comment if not set)
     */
    readonly name: pulumi.Output<string>;
    /**
     * Create a Key resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: KeyArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Key resources.
 */
export interface KeyState {
    /**
     * Content of public key from disk in OpenSSH format
     */
    readonly key?: pulumi.Input<string>;
    /**
     * Name of the key (generated from the key comment if not set)
     */
    readonly name?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Key resource.
 */
export interface KeyArgs {
    /**
     * Content of public key from disk in OpenSSH format
     */
    readonly key: pulumi.Input<string>;
    /**
     * Name of the key (generated from the key comment if not set)
     */
    readonly name?: pulumi.Input<string>;
}
