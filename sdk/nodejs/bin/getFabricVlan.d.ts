import * as pulumi from "@pulumi/pulumi";
export declare function getFabricVlan(args?: GetFabricVlanArgs, opts?: pulumi.InvokeOptions): Promise<GetFabricVlanResult>;
/**
 * A collection of arguments for invoking getFabricVlan.
 */
export interface GetFabricVlanArgs {
    readonly description?: string;
    readonly name?: string;
    readonly vlanId?: number;
}
/**
 * A collection of values returned by getFabricVlan.
 */
export interface GetFabricVlanResult {
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
