"use strict";
// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
function getFabricNetwork(args, opts) {
    return pulumi.runtime.invoke("triton:index/getFabricNetwork:getFabricNetwork", {
        "name": args.name,
        "vlanId": args.vlanId,
    }, opts);
}
exports.getFabricNetwork = getFabricNetwork;
//# sourceMappingURL=getFabricNetwork.js.map