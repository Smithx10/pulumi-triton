# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime

class Fabric(pulumi.CustomResource):
    def __init__(__self__, __name__, __opts__=None, description=None, gateway=None, internet_nat=None, name=None, provision_end_ip=None, provision_start_ip=None, resolvers=None, routes=None, subnet=None, vlan_id=None):
        """Create a Fabric resource with the given unique name, props, and options."""
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
        Description of network
        """
        __props__['description'] = description

        if gateway and not isinstance(gateway, basestring):
            raise TypeError('Expected property gateway to be a basestring')
        __self__.gateway = gateway
        """
        Gateway IP
        """
        __props__['gateway'] = gateway

        if internet_nat and not isinstance(internet_nat, bool):
            raise TypeError('Expected property internet_nat to be a bool')
        __self__.internet_nat = internet_nat
        """
        Whether or not a NAT zone is provisioned at the Gateway IP address
        """
        __props__['internetNat'] = internet_nat

        if name and not isinstance(name, basestring):
            raise TypeError('Expected property name to be a basestring')
        __self__.name = name
        """
        Network name
        """
        __props__['name'] = name

        if not provision_end_ip:
            raise TypeError('Missing required property provision_end_ip')
        elif not isinstance(provision_end_ip, basestring):
            raise TypeError('Expected property provision_end_ip to be a basestring')
        __self__.provision_end_ip = provision_end_ip
        """
        Last assignable IP on the network
        """
        __props__['provisionEndIp'] = provision_end_ip

        if not provision_start_ip:
            raise TypeError('Missing required property provision_start_ip')
        elif not isinstance(provision_start_ip, basestring):
            raise TypeError('Expected property provision_start_ip to be a basestring')
        __self__.provision_start_ip = provision_start_ip
        """
        First IP on the network that can be assigned
        """
        __props__['provisionStartIp'] = provision_start_ip

        if resolvers and not isinstance(resolvers, list):
            raise TypeError('Expected property resolvers to be a list')
        __self__.resolvers = resolvers
        """
        List of IP addresses for DNS resolvers
        """
        __props__['resolvers'] = resolvers

        if routes and not isinstance(routes, dict):
            raise TypeError('Expected property routes to be a dict')
        __self__.routes = routes
        """
        Map of CIDR block to Gateway IP address
        """
        __props__['routes'] = routes

        if not subnet:
            raise TypeError('Missing required property subnet')
        elif not isinstance(subnet, basestring):
            raise TypeError('Expected property subnet to be a basestring')
        __self__.subnet = subnet
        """
        CIDR formatted string describing network address space
        """
        __props__['subnet'] = subnet

        if not vlan_id:
            raise TypeError('Missing required property vlan_id')
        elif not isinstance(vlan_id, int):
            raise TypeError('Expected property vlan_id to be a int')
        __self__.vlan_id = vlan_id
        """
        VLAN on which the network exists
        """
        __props__['vlanId'] = vlan_id

        __self__.fabric = pulumi.runtime.UNKNOWN
        """
        Whether or not this network is on a fabric
        """
        __self__.public = pulumi.runtime.UNKNOWN
        """
        Whether or not this is an RFC1918 network
        """

        super(Fabric, __self__).__init__(
            'triton:index/fabric:Fabric',
            __name__,
            __props__,
            __opts__)

    def set_outputs(self, outs):
        if 'description' in outs:
            self.description = outs['description']
        if 'fabric' in outs:
            self.fabric = outs['fabric']
        if 'gateway' in outs:
            self.gateway = outs['gateway']
        if 'internetNat' in outs:
            self.internet_nat = outs['internetNat']
        if 'name' in outs:
            self.name = outs['name']
        if 'provisionEndIp' in outs:
            self.provision_end_ip = outs['provisionEndIp']
        if 'provisionStartIp' in outs:
            self.provision_start_ip = outs['provisionStartIp']
        if 'public' in outs:
            self.public = outs['public']
        if 'resolvers' in outs:
            self.resolvers = outs['resolvers']
        if 'routes' in outs:
            self.routes = outs['routes']
        if 'subnet' in outs:
            self.subnet = outs['subnet']
        if 'vlanId' in outs:
            self.vlan_id = outs['vlanId']