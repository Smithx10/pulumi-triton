import * as pulumi from "@pulumi/pulumi";
export declare function getPackage(args: GetPackageArgs, opts?: pulumi.InvokeOptions): Promise<GetPackageResult>;
/**
 * A collection of arguments for invoking getPackage.
 */
export interface GetPackageArgs {
    readonly filters: {
        disk?: number;
        group?: string;
        lwps?: number;
        memory?: number;
        name?: string;
        swap?: number;
        vcpus?: number;
        version?: string;
    }[];
}
/**
 * A collection of values returned by getPackage.
 */
export interface GetPackageResult {
    readonly disk: number;
    readonly group: string;
    readonly lwps: number;
    readonly memory: number;
    readonly name: string;
    readonly swap: number;
    readonly vcpus: number;
    readonly version: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
