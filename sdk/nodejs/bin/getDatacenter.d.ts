import * as pulumi from "@pulumi/pulumi";
export declare function getDatacenter(opts?: pulumi.InvokeOptions): Promise<GetDatacenterResult>;
/**
 * A collection of values returned by getDatacenter.
 */
export interface GetDatacenterResult {
    readonly endpoint: string;
    readonly name: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
