"use strict";
// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
class FirewallRule extends pulumi.CustomResource {
    /**
     * Get an existing FirewallRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name, id, state) {
        return new FirewallRule(name, state, { id });
    }
    constructor(name, argsOrState, opts) {
        let inputs = {};
        if (opts && opts.id) {
            const state = argsOrState;
            inputs["description"] = state ? state.description : undefined;
            inputs["enabled"] = state ? state.enabled : undefined;
            inputs["global"] = state ? state.global : undefined;
            inputs["rule"] = state ? state.rule : undefined;
        }
        else {
            const args = argsOrState;
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
exports.FirewallRule = FirewallRule;
//# sourceMappingURL=firewallRule.js.map