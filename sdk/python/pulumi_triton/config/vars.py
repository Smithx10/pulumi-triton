# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime

__config__ = pulumi.Config('triton')

account = __config__.require('account')

insecure_skip_tls_verify = __config__.get('insecureSkipTlsVerify')

key_id = __config__.require('keyId')

key_material = __config__.get('keyMaterial')

url = __config__.require('url')

user = __config__.require('user')

