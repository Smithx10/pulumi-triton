import * as pulumi from "@pulumi/pulumi";
/**
 * The provider type for the triton package
 */
export declare class Provider extends pulumi.ProviderResource {
    /**
     * Create a Provider resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProviderArgs, opts?: pulumi.ResourceOptions);
}
/**
 * The set of arguments for constructing a Provider resource.
 */
export interface ProviderArgs {
    readonly account: pulumi.Input<string>;
    readonly insecureSkipTlsVerify?: pulumi.Input<boolean>;
    readonly keyId: pulumi.Input<string>;
    readonly keyMaterial?: pulumi.Input<string>;
    readonly url: pulumi.Input<string>;
    readonly user: pulumi.Input<string>;
}
