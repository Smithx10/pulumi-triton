import * as pulumi from "@pulumi/pulumi";
export declare class Machine extends pulumi.CustomResource {
    /**
     * Get an existing Machine resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MachineState): Machine;
    /**
     * Administrator's initial password (Windows only)
     */
    readonly administratorPw: pulumi.Output<string | undefined>;
    /**
     * Label based affinity rules for assisting instance placement
     */
    readonly affinities: pulumi.Output<string[] | undefined>;
    /**
     * copied to machine on boot
     */
    readonly cloudConfig: pulumi.Output<string | undefined>;
    /**
     * Container Name Service
     */
    readonly cns: pulumi.Output<{
        disable?: boolean;
        services?: string[];
    } | undefined>;
    /**
     * UUID of the server on which the instance is located
     */
    readonly computeNode: pulumi.Output<string>;
    /**
     * When the machine was created
     */
    readonly created: pulumi.Output<string>;
    /**
     * Dataset URN with which the machine was provisioned
     */
    readonly dataset: pulumi.Output<string>;
    /**
     * Whether to enable deletion protection for this machine
     */
    readonly deletionProtectionEnabled: pulumi.Output<boolean | undefined>;
    /**
     * Amount of disk allocated to the machine (in Gb)
     */
    readonly disk: pulumi.Output<number>;
    /**
     * List of domain names from Triton CNS
     */
    readonly domainNames: pulumi.Output<string[]>;
    /**
     * Whether to enable the firewall for this machine
     */
    readonly firewallEnabled: pulumi.Output<boolean | undefined>;
    /**
     * UUID of the image
     */
    readonly image: pulumi.Output<string>;
    /**
     * IP addresses assigned to the machine
     */
    readonly ips: pulumi.Output<string[]>;
    /**
     * UUID based locality hints for assisting placement behavior
     */
    readonly locality: pulumi.Output<{
        closeTos?: string[];
        farFroms?: string[];
    } | undefined>;
    /**
     * Amount of memory allocated to the machine (in Mb)
     */
    readonly memory: pulumi.Output<number>;
    /**
     * Machine metadata
     */
    readonly metadata: pulumi.Output<{
        [key: string]: any;
    } | undefined>;
    /**
     * Friendly name for machine
     */
    readonly name: pulumi.Output<string>;
    /**
     * Desired network IDs
     */
    readonly networks: pulumi.Output<string[] | undefined>;
    /**
     * Network interface
     */
    readonly nics: pulumi.Output<{
        gateway: string;
        ip: string;
        mac: string;
        netmask: string;
        network: string;
        primary: boolean;
        state: string;
    }[]>;
    /**
     * The package for use for provisioning
     */
    readonly package: pulumi.Output<string>;
    /**
     * Primary (public) IP address for the machine
     */
    readonly primaryip: pulumi.Output<string>;
    /**
     * Authorized keys for the root user on this machine
     */
    readonly rootAuthorizedKeys: pulumi.Output<string>;
    /**
     * Machine tags
     */
    readonly tags: pulumi.Output<{
        [key: string]: any;
    } | undefined>;
    /**
     * Machine type (smartmachine or virtualmachine)
     */
    readonly type: pulumi.Output<string>;
    /**
     * When the machine was updated
     */
    readonly updated: pulumi.Output<string>;
    /**
     * Data copied to machine on boot
     */
    readonly userData: pulumi.Output<string | undefined>;
    /**
     * User script to run on boot (every boot on SmartMachines)
     */
    readonly userScript: pulumi.Output<string | undefined>;
    /**
     * Create a Machine resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MachineArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Machine resources.
 */
export interface MachineState {
    /**
     * Administrator's initial password (Windows only)
     */
    readonly administratorPw?: pulumi.Input<string>;
    /**
     * Label based affinity rules for assisting instance placement
     */
    readonly affinities?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * copied to machine on boot
     */
    readonly cloudConfig?: pulumi.Input<string>;
    /**
     * Container Name Service
     */
    readonly cns?: pulumi.Input<{
        disable?: pulumi.Input<boolean>;
        services?: pulumi.Input<pulumi.Input<string>[]>;
    }>;
    /**
     * UUID of the server on which the instance is located
     */
    readonly computeNode?: pulumi.Input<string>;
    /**
     * When the machine was created
     */
    readonly created?: pulumi.Input<string>;
    /**
     * Dataset URN with which the machine was provisioned
     */
    readonly dataset?: pulumi.Input<string>;
    /**
     * Whether to enable deletion protection for this machine
     */
    readonly deletionProtectionEnabled?: pulumi.Input<boolean>;
    /**
     * Amount of disk allocated to the machine (in Gb)
     */
    readonly disk?: pulumi.Input<number>;
    /**
     * List of domain names from Triton CNS
     */
    readonly domainNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Whether to enable the firewall for this machine
     */
    readonly firewallEnabled?: pulumi.Input<boolean>;
    /**
     * UUID of the image
     */
    readonly image?: pulumi.Input<string>;
    /**
     * IP addresses assigned to the machine
     */
    readonly ips?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * UUID based locality hints for assisting placement behavior
     */
    readonly locality?: pulumi.Input<{
        closeTos?: pulumi.Input<pulumi.Input<string>[]>;
        farFroms?: pulumi.Input<pulumi.Input<string>[]>;
    }>;
    /**
     * Amount of memory allocated to the machine (in Mb)
     */
    readonly memory?: pulumi.Input<number>;
    /**
     * Machine metadata
     */
    readonly metadata?: pulumi.Input<{
        [key: string]: any;
    }>;
    /**
     * Friendly name for machine
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Desired network IDs
     */
    readonly networks?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Network interface
     */
    readonly nics?: pulumi.Input<pulumi.Input<{
        gateway?: pulumi.Input<string>;
        ip?: pulumi.Input<string>;
        mac?: pulumi.Input<string>;
        netmask?: pulumi.Input<string>;
        network: pulumi.Input<string>;
        primary?: pulumi.Input<boolean>;
        state?: pulumi.Input<string>;
    }>[]>;
    /**
     * The package for use for provisioning
     */
    readonly package?: pulumi.Input<string>;
    /**
     * Primary (public) IP address for the machine
     */
    readonly primaryip?: pulumi.Input<string>;
    /**
     * Authorized keys for the root user on this machine
     */
    readonly rootAuthorizedKeys?: pulumi.Input<string>;
    /**
     * Machine tags
     */
    readonly tags?: pulumi.Input<{
        [key: string]: any;
    }>;
    /**
     * Machine type (smartmachine or virtualmachine)
     */
    readonly type?: pulumi.Input<string>;
    /**
     * When the machine was updated
     */
    readonly updated?: pulumi.Input<string>;
    /**
     * Data copied to machine on boot
     */
    readonly userData?: pulumi.Input<string>;
    /**
     * User script to run on boot (every boot on SmartMachines)
     */
    readonly userScript?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Machine resource.
 */
export interface MachineArgs {
    /**
     * Administrator's initial password (Windows only)
     */
    readonly administratorPw?: pulumi.Input<string>;
    /**
     * Label based affinity rules for assisting instance placement
     */
    readonly affinities?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * copied to machine on boot
     */
    readonly cloudConfig?: pulumi.Input<string>;
    /**
     * Container Name Service
     */
    readonly cns?: pulumi.Input<{
        disable?: pulumi.Input<boolean>;
        services?: pulumi.Input<pulumi.Input<string>[]>;
    }>;
    /**
     * Whether to enable deletion protection for this machine
     */
    readonly deletionProtectionEnabled?: pulumi.Input<boolean>;
    /**
     * Whether to enable the firewall for this machine
     */
    readonly firewallEnabled?: pulumi.Input<boolean>;
    /**
     * UUID of the image
     */
    readonly image: pulumi.Input<string>;
    /**
     * UUID based locality hints for assisting placement behavior
     */
    readonly locality?: pulumi.Input<{
        closeTos?: pulumi.Input<pulumi.Input<string>[]>;
        farFroms?: pulumi.Input<pulumi.Input<string>[]>;
    }>;
    /**
     * Machine metadata
     */
    readonly metadata?: pulumi.Input<{
        [key: string]: any;
    }>;
    /**
     * Friendly name for machine
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Desired network IDs
     */
    readonly networks?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Network interface
     */
    readonly nics?: pulumi.Input<pulumi.Input<{
        gateway?: pulumi.Input<string>;
        ip?: pulumi.Input<string>;
        mac?: pulumi.Input<string>;
        netmask?: pulumi.Input<string>;
        network: pulumi.Input<string>;
        primary?: pulumi.Input<boolean>;
        state?: pulumi.Input<string>;
    }>[]>;
    /**
     * The package for use for provisioning
     */
    readonly package: pulumi.Input<string>;
    /**
     * Authorized keys for the root user on this machine
     */
    readonly rootAuthorizedKeys?: pulumi.Input<string>;
    /**
     * Machine tags
     */
    readonly tags?: pulumi.Input<{
        [key: string]: any;
    }>;
    /**
     * Data copied to machine on boot
     */
    readonly userData?: pulumi.Input<string>;
    /**
     * User script to run on boot (every boot on SmartMachines)
     */
    readonly userScript?: pulumi.Input<string>;
}
