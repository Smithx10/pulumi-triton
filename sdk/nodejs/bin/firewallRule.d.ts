import * as pulumi from "@pulumi/pulumi";
export declare class FirewallRule extends pulumi.CustomResource {
    /**
     * Get an existing FirewallRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FirewallRuleState): FirewallRule;
    /**
     * Human-readable description of the rule
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * Indicates if the rule is enabled
     */
    readonly enabled: pulumi.Output<boolean | undefined>;
    /**
     * Indicates whether or not the rule is global
     */
    readonly global: pulumi.Output<boolean>;
    /**
     * firewall rule text
     */
    readonly rule: pulumi.Output<string>;
    /**
     * Create a FirewallRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FirewallRuleArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering FirewallRule resources.
 */
export interface FirewallRuleState {
    /**
     * Human-readable description of the rule
     */
    readonly description?: pulumi.Input<string>;
    /**
     * Indicates if the rule is enabled
     */
    readonly enabled?: pulumi.Input<boolean>;
    /**
     * Indicates whether or not the rule is global
     */
    readonly global?: pulumi.Input<boolean>;
    /**
     * firewall rule text
     */
    readonly rule?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a FirewallRule resource.
 */
export interface FirewallRuleArgs {
    /**
     * Human-readable description of the rule
     */
    readonly description?: pulumi.Input<string>;
    /**
     * Indicates if the rule is enabled
     */
    readonly enabled?: pulumi.Input<boolean>;
    /**
     * firewall rule text
     */
    readonly rule: pulumi.Input<string>;
}
