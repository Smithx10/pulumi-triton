// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";

export class FirewallRule extends pulumi.CustomResource {
    /**
     * Get an existing FirewallRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FirewallRuleState): FirewallRule {
        return new FirewallRule(name, <any>state, { id });
    }

    /**
     * Human-readable description of the rule
     */
    public readonly description: pulumi.Output<string | undefined>;
    /**
     * Indicates if the rule is enabled
     */
    public readonly enabled: pulumi.Output<boolean | undefined>;
    /**
     * Indicates whether or not the rule is global
     */
    public /*out*/ readonly global: pulumi.Output<boolean>;
    /**
     * firewall rule text
     */
    public readonly rule: pulumi.Output<string>;

    /**
     * Create a FirewallRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FirewallRuleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FirewallRuleArgs | FirewallRuleState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: FirewallRuleState = argsOrState as FirewallRuleState | undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["enabled"] = state ? state.enabled : undefined;
            inputs["global"] = state ? state.global : undefined;
            inputs["rule"] = state ? state.rule : undefined;
        } else {
            const args = argsOrState as FirewallRuleArgs | undefined;
            if (!args || args.rule === undefined) {
                throw new Error("Missing required property 'rule'");
            }
            inputs["description"] = args ? args.description : undefined;
            inputs["enabled"] = args ? args.enabled : undefined;
            inputs["rule"] = args ? args.rule : undefined;
            inputs["global"] = undefined /*out*/;
        }
        super("triton:index/firewallRule:FirewallRule", name, inputs, opts);
    }
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
