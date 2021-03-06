// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";

export function getDatacenter(opts?: pulumi.InvokeOptions): Promise<GetDatacenterResult> {
    return pulumi.runtime.invoke("triton:index/getDatacenter:getDatacenter", {
    }, opts);
}

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
