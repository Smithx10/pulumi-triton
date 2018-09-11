import * as pulumi from "@pulumi/pulumi";
export declare function getFabricNetwork(args: GetFabricNetworkArgs, opts?: pulumi.InvokeOptions): Promise<GetFabricNetworkResult>;
/**
 * A collection of arguments for invoking getFabricNetwork.
 */
export interface GetFabricNetworkArgs {
    readonly name: string;
    readonly vlanId: number;
}
/**
 * A collection of values returned by getFabricNetwork.
 */
export interface GetFabricNetworkResult {
    readonly description: string;
    readonly fabric: boolean;
    readonly gateway: string;
    readonly internetNat: boolean;
    readonly provisionEndIp: string;
    readonly provisionStartIp: string;
    readonly public: boolean;
    readonly resolvers: string[];
    readonly routes: {
        [key: string]: string;
    };
    readonly subnet: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
