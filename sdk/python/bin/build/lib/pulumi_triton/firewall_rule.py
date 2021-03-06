# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime

class FirewallRule(pulumi.CustomResource):
    def __init__(__self__, __name__, __opts__=None, description=None, enabled=None, rule=None):
        """Create a FirewallRule resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, basestring):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if description and not isinstance(description, basestring):
            raise TypeError('Expected property description to be a basestring')
        __self__.description = description
        """
        Human-readable description of the rule
        """
        __props__['description'] = description

        if enabled and not isinstance(enabled, bool):
            raise TypeError('Expected property enabled to be a bool')
        __self__.enabled = enabled
        """
        Indicates if the rule is enabled
        """
        __props__['enabled'] = enabled

        if not rule:
            raise TypeError('Missing required property rule')
        elif not isinstance(rule, basestring):
            raise TypeError('Expected property rule to be a basestring')
        __self__.rule = rule
        """
        firewall rule text
        """
        __props__['rule'] = rule

        __self__.global_ = pulumi.runtime.UNKNOWN
        """
        Indicates whether or not the rule is global
        """

        super(FirewallRule, __self__).__init__(
            'triton:index/firewallRule:FirewallRule',
            __name__,
            __props__,
            __opts__)

    def set_outputs(self, outs):
        if 'description' in outs:
            self.description = outs['description']
        if 'enabled' in outs:
            self.enabled = outs['enabled']
        if 'global' in outs:
            self.global_ = outs['global']
        if 'rule' in outs:
            self.rule = outs['rule']
