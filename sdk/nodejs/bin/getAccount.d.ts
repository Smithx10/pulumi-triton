import * as pulumi from "@pulumi/pulumi";
export declare function getAccount(opts?: pulumi.InvokeOptions): Promise<GetAccountResult>;
/**
 * A collection of values returned by getAccount.
 */
export interface GetAccountResult {
    readonly cnsEnabled: boolean;
    readonly email: string;
    readonly login: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
