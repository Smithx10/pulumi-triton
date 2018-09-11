import * as pulumi from "@pulumi/pulumi";
export declare class Fabric extends pulumi.CustomResource {
    /**
     * Get an existing Fabric resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FabricState): Fabric;
    /**
     * Description of network
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * Whether or not this network is on a fabric
     */
    readonly fabric: pulumi.Output<boolean>;
    /**
     * Gateway IP
     */
    readonly gateway: pulumi.Output<string | undefined>;
    /**
     * Whether or not a NAT zone is provisioned at the Gateway IP address
     */
    readonly internetNat: pulumi.Output<boolean | undefined>;
    /**
     * Network name
     */
    readonly name: pulumi.Output<string>;
    /**
     * Last assignable IP on the network
     */
    readonly provisionEndIp: pulumi.Output<string>;
    /**
     * First IP on the network that can be assigned
     */
    readonly provisionStartIp: pulumi.Output<string>;
    /**
     * Whether or not this is an RFC1918 network
     */
    readonly public: pulumi.Output<boolean>;
    /**
     * List of IP addresses for DNS resolvers
     */
    readonly resolvers: pulumi.Output<string[]>;
    /**
     * Map of CIDR block to Gateway IP address
     */
    readonly routes: pulumi.Output<{
        [key: string]: any;
    }>;
    /**
     * CIDR formatted string describing network address space
     */
    readonly subnet: pulumi.Output<string>;
    /**
     * VLAN on which the network exists
     */
    readonly vlanId: pulumi.Output<number>;
    /**
     * Create a Fabric resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FabricArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Fabric resources.
 */
export interface FabricState {
    /**
     * Description of network
     */
    readonly description?: pulumi.Input<string>;
    /**
     * Whether or not this network is on a fabric
     */
    readonly fabric?: pulumi.Input<boolean>;
    /**
     * Gateway IP
     */
    readonly gateway?: pulumi.Input<string>;
    /**
     * Whether or not a NAT zone is provisioned at the Gateway IP address
     */
    readonly internetNat?: pulumi.Input<boolean>;
    /**
     * Network name
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Last assignable IP on the network
     */
    readonly provisionEndIp?: pulumi.Input<string>;
    /**
     * First IP on the network that can be assigned
     */
    readonly provisionStartIp?: pulumi.Input<string>;
    /**
     * Whether or not this is an RFC1918 network
     */
    readonly public?: pulumi.Input<boolean>;
    /**
     * List of IP addresses for DNS resolvers
     */
    readonly resolvers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Map of CIDR block to Gateway IP address
     */
    readonly routes?: pulumi.Input<{
        [key: string]: any;
    }>;
    /**
     * CIDR formatted string describing network address space
     */
    readonly subnet?: pulumi.Input<string>;
    /**
     * VLAN on which the network exists
     */
    readonly vlanId?: pulumi.Input<number>;
}
/**
 * The set of arguments for constructing a Fabric resource.
 */
export interface FabricArgs {
    /**
     * Description of network
     */
    readonly description?: pulumi.Input<string>;
    /**
     * Gateway IP
     */
    readonly gateway?: pulumi.Input<string>;
    /**
     * Whether or not a NAT zone is provisioned at the Gateway IP address
     */
    readonly internetNat?: pulumi.Input<boolean>;
    /**
     * Network name
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Last assignable IP on the network
     */
    readonly provisionEndIp: pulumi.Input<string>;
    /**
     * First IP on the network that can be assigned
     */
    readonly provisionStartIp: pulumi.Input<string>;
    /**
     * List of IP addresses for DNS resolvers
     */
    readonly resolvers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Map of CIDR block to Gateway IP address
     */
    readonly routes?: pulumi.Input<{
        [key: string]: any;
    }>;
    /**
     * CIDR formatted string describing network address space
     */
    readonly subnet: pulumi.Input<string>;
    /**
     * VLAN on which the network exists
     */
    readonly vlanId: pulumi.Input<number>;
}
