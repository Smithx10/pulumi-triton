# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime

class Snapshot(pulumi.CustomResource):
    def __init__(__self__, __name__, __opts__=None, machine_id=None, name=None):
        """Create a Snapshot resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, basestring):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if not machine_id:
            raise TypeError('Missing required property machine_id')
        elif not isinstance(machine_id, basestring):
            raise TypeError('Expected property machine_id to be a basestring')
        __self__.machine_id = machine_id
        __props__['machineId'] = machine_id

        if name and not isinstance(name, basestring):
            raise TypeError('Expected property name to be a basestring')
        __self__.name = name
        __props__['name'] = name

        __self__.state = pulumi.runtime.UNKNOWN

        super(Snapshot, __self__).__init__(
            'triton:index/snapshot:Snapshot',
            __name__,
            __props__,
            __opts__)

    def set_outputs(self, outs):
        if 'machineId' in outs:
            self.machine_id = outs['machineId']
        if 'name' in outs:
            self.name = outs['name']
        if 'state' in outs:
            self.state = outs['state']
