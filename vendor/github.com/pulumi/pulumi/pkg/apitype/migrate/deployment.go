// Copyright 2016-2018, Pulumi Corporation.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package migrate

import "github.com/pulumi/pulumi/pkg/apitype"

// UpToDeploymentV2 migrates a deployment from DeploymentV1 to DeploymentV2.
func UpToDeploymentV2(v1 apitype.DeploymentV1) apitype.DeploymentV2 {
	var v2 apitype.DeploymentV2
	// The manifest format did not change between V1 and V2.
	v2.Manifest = v1.Manifest
	for _, res := range v1.Resources {
		v2.Resources = append(v2.Resources, UpToResourceV2(res))
	}

	return v2
}
