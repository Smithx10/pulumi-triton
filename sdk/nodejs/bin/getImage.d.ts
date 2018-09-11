import * as pulumi from "@pulumi/pulumi";
export declare function getImage(args?: GetImageArgs, opts?: pulumi.InvokeOptions): Promise<GetImageResult>;
/**
 * A collection of arguments for invoking getImage.
 */
export interface GetImageArgs {
    readonly mostRecent?: boolean;
    readonly name?: string;
    readonly os?: string;
    readonly owner?: string;
    readonly public?: boolean;
    readonly state?: string;
    readonly type?: string;
    readonly version?: string;
}
/**
 * A collection of values returned by getImage.
 */
export interface GetImageResult {
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
