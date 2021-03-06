# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime

class GetImageResult(object):
    """
    A collection of values returned by getImage.
    """
    def __init__(__self__, id=None):
        if id and not isinstance(id, basestring):
            raise TypeError('Expected argument id to be a basestring')
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

def get_image(most_recent=None, name=None, os=None, owner=None, public=None, state=None, type=None, version=None):
    __args__ = dict()

    __args__['mostRecent'] = most_recent
    __args__['name'] = name
    __args__['os'] = os
    __args__['owner'] = owner
    __args__['public'] = public
    __args__['state'] = state
    __args__['type'] = type
    __args__['version'] = version
    __ret__ = pulumi.runtime.invoke('triton:index/getImage:getImage', __args__)

    return GetImageResult(
        id=__ret__.get('id'))
