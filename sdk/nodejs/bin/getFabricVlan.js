"use strict";
// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
function getFabricVlan(args, opts) {
    args = args || {};
    return pulumi.runtime.invoke("triton:index/getFabricVlan:getFabricVlan", {
        "description": args.description,
        "name": args.name,
        "vlanId": args.vlanId,
    }, opts);
}
exports.getFabricVlan = getFabricVlan;
//# sourceMappingURL=getFabricVlan.js.map