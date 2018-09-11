import * as pulumi from "@pulumi/pulumi";
export declare function getNetwork(args: GetNetworkArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkResult>;
/**
 * A collection of arguments for invoking getNetwork.
 */
export interface GetNetworkArgs {
    readonly name: string;
}
/**
 * A collection of values returned by getNetwork.
 */
export interface GetNetworkResult {
    readonly fabric: boolean;
    readonly public: boolean;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
