"use strict";
// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
class Snapshot extends pulumi.CustomResource {
    /**
     * Get an existing Snapshot resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name, id, state) {
        return new Snapshot(name, state, { id });
    }
    constructor(name, argsOrState, opts) {
        let inputs = {};
        if (opts && opts.id) {
            const state = argsOrState;
            inputs["machineId"] = state ? state.machineId : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["state"] = state ? state.state : undefined;
        }
        else {
            const args = argsOrState;
            if (!args || args.machineId === undefined) {
                throw new Error("Missing required property 'machineId'");
            }
            inputs["machineId"] = args ? args.machineId : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["state"] = undefined /*out*/;
        }
        super("triton:index/snapshot:Snapshot", name, inputs, opts);
    }
}
exports.Snapshot = Snapshot;
//# sourceMappingURL=snapshot.js.map