"use strict";
// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
class Machine extends pulumi.CustomResource {
    /**
     * Get an existing Machine resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name, id, state) {
        return new Machine(name, state, { id });
    }
    constructor(name, argsOrState, opts) {
        let inputs = {};
        if (opts && opts.id) {
            const state = argsOrState;
            inputs["administratorPw"] = state ? state.administratorPw : undefined;
            inputs["affinities"] = state ? state.affinities : undefined;
            inputs["cloudConfig"] = state ? state.cloudConfig : undefined;
            inputs["cns"] = state ? state.cns : undefined;
            inputs["computeNode"] = state ? state.computeNode : undefined;
            inputs["created"] = state ? state.created : undefined;
            inputs["dataset"] = state ? state.dataset : undefined;
            inputs["deletionProtectionEnabled"] = state ? state.deletionProtectionEnabled : undefined;
            inputs["disk"] = state ? state.disk : undefined;
            inputs["domainNames"] = state ? state.domainNames : undefined;
            inputs["firewallEnabled"] = state ? state.firewallEnabled : undefined;
            inputs["image"] = state ? state.image : undefined;
            inputs["ips"] = state ? state.ips : undefined;
            inputs["locality"] = state ? state.locality : undefined;
            inputs["memory"] = state ? state.memory : undefined;
            inputs["metadata"] = state ? state.metadata : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["networks"] = state ? state.networks : undefined;
            inputs["nics"] = state ? state.nics : undefined;
            inputs["package"] = state ? state.package : undefined;
            inputs["primaryip"] = state ? state.primaryip : undefined;
            inputs["rootAuthorizedKeys"] = state ? state.rootAuthorizedKeys : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["type"] = state ? state.type : undefined;
            inputs["updated"] = state ? state.updated : undefined;
            inputs["userData"] = state ? state.userData : undefined;
            inputs["userScript"] = state ? state.userScript : undefined;
        }
        else {
            const args = argsOrState;
            if (!args || args.image === undefined) {
                throw new Error("Missing required property 'image'");
            }
            if (!args || args.package === undefined) {
                throw new Error("Missing required property 'package'");
            }
            inputs["administratorPw"] = args ? args.administratorPw : undefined;
            inputs["affinities"] = args ? args.affinities : undefined;
            inputs["cloudConfig"] = args ? args.cloudConfig : undefined;
            inputs["cns"] = args ? args.cns : undefined;
            inputs["deletionProtectionEnabled"] = args ? args.deletionProtectionEnabled : undefined;
            inputs["firewallEnabled"] = args ? args.firewallEnabled : undefined;
            inputs["image"] = args ? args.image : undefined;
            inputs["locality"] = args ? args.locality : undefined;
            inputs["metadata"] = args ? args.metadata : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["networks"] = args ? args.networks : undefined;
            inputs["nics"] = args ? args.nics : undefined;
            inputs["package"] = args ? args.package : undefined;
            inputs["rootAuthorizedKeys"] = args ? args.rootAuthorizedKeys : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["userData"] = args ? args.userData : undefined;
            inputs["userScript"] = args ? args.userScript : undefined;
            inputs["computeNode"] = undefined /*out*/;
            inputs["created"] = undefined /*out*/;
            inputs["dataset"] = undefined /*out*/;
            inputs["disk"] = undefined /*out*/;
            inputs["domainNames"] = undefined /*out*/;
            inputs["ips"] = undefined /*out*/;
            inputs["memory"] = undefined /*out*/;
            inputs["primaryip"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
            inputs["updated"] = undefined /*out*/;
        }
        super("triton:index/machine:Machine", name, inputs, opts);
    }
}
exports.Machine = Machine;
//# sourceMappingURL=machine.js.map