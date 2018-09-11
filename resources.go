package triton

import (
	"unicode"

	"github.com/hashicorp/terraform/helper/schema"
	"github.com/pulumi/pulumi-terraform/pkg/tfbridge"
	"github.com/pulumi/pulumi/pkg/resource"
	"github.com/pulumi/pulumi/pkg/tokens"
	"github.com/terraform-providers/terraform-provider-triton/triton"
)

const (
	tritonPkg = "triton"
	tritonMod = "index"
)

// tritonMember manufactures a type token for the Triton package and the given module and type.
func tritonMember(mod string, mem string) tokens.ModuleMember {
	return tokens.ModuleMember(tritonPkg + ":" + mod + ":" + mem)
}

// tritonType manufactures a type token for the Triton package and the given module and type.
func tritonType(mod string, typ string) tokens.Type {
	return tokens.Type(tritonMember(mod, typ))
}

// tritonDataSource manufactures a standard resource token given a module and resource name.
// It automatically uses the Triton package and names the file by simply lower casing the data
// source's first character.
func tritonDataSource(mod string, res string) tokens.ModuleMember {
	fn := string(unicode.ToLower(rune(res[0]))) + res[1:]
	return tritonMember(mod+"/"+fn, res)
}

// tritonResource manufactures a standard resource token given a module and resource name.
// package and names the file by simply lower casing the resource's first character.
func tritonResource(mod string, res string) tokens.Type {
	fn := string(unicode.ToLower(rune(res[0]))) + res[1:]
	return tritonType(mod+"/"+fn, res)
}

// stringValue gets a string value from a property map if present, else ""
func stringValue(vars resource.PropertyMap, prop resource.PropertyKey) string {
	val, ok := vars[prop]
	if ok && val.IsString() {
		return val.StringValue()
	}
	return ""
}

func Provider() tfbridge.ProviderInfo {
	p := triton.Provider().(*schema.Provider)
	prov := tfbridge.ProviderInfo{
		P:           p,
		Name:        "triton",
		Description: "A Pulumi package for creating triton resources",
		Keywords:    []string{"pulumi", "triton"},
		License:     "MIT",
		Homepage:    "https://pulumi.io",
		Repository:  "https://github.com/Smithx10/pulumi-triton",
		//PreConfigureCallback: preConfigureCallback,
		Resources: map[string]*tfbridge.ResourceInfo{
			"triton_fabric":            {Tok: tritonResource(tritonMod, "Fabric")},
			"triton_firewall_rule":     {Tok: tritonResource(tritonMod, "FirewallRule")},
			"triton_instance_template": {Tok: tritonResource(tritonMod, "InstanceTemplate")},
			"triton_key":               {Tok: tritonResource(tritonMod, "Key")},
			"triton_machine":           {Tok: tritonResource(tritonMod, "Machine")},
			"triton_service_group":     {Tok: tritonResource(tritonMod, "ServiceGroup")},
			"triton_snapshot":          {Tok: tritonResource(tritonMod, "Snapshot")},
			"triton_vlan":              {Tok: tritonResource(tritonMod, "Vlan")},
		},
		DataSources: map[string]*tfbridge.DataSourceInfo{
			"triton_account":        {Tok: tritonDataSource(tritonMod, "getAccount")},
			"triton_datacenter":     {Tok: tritonDataSource(tritonMod, "getDatacenter")},
			"triton_image":          {Tok: tritonDataSource(tritonMod, "getImage")},
			"triton_network":        {Tok: tritonDataSource(tritonMod, "getNetwork")},
			"triton_package":        {Tok: tritonDataSource(tritonMod, "getPackage")},
			"triton_fabric_vlan":    {Tok: tritonDataSource(tritonMod, "getFabricVlan")},
			"triton_fabric_network": {Tok: tritonDataSource(tritonMod, "getFabricNetwork")},
		},
		JavaScript: &tfbridge.JavaScriptInfo{
			Dependencies: map[string]string{
				"@pulumi/pulumi":    "^0.15.0",
				"builtin-modules":   "3.0.0",
				"read-package-tree": "^5.2.1",
				"resolve":           "^1.8.1",
			},
			DevDependencies: map[string]string{
				"@types/node": "^10.9.2",
			},
			Overlay: &tfbridge.OverlayInfo{
				Files:   []string{},
				Modules: map[string]*tfbridge.OverlayInfo{},
			},
		},
	}
	// For all resources with name properties, we will add an auto-name property.  Make sure to skip those that
	// already have a name mapping entry, since those may have custom overrides set above (e.g., for length).
	const nameField = "name"
	for resname, res := range prov.Resources {
		if schema := p.ResourcesMap[resname]; schema != nil {
			// Only apply auto-name to input properties (Optional || Required) named `name`
			if tfs, has := schema.Schema[nameField]; has && (tfs.Optional || tfs.Required) {
				if _, hasfield := res.Fields[nameField]; !hasfield {
					if res.Fields == nil {
						res.Fields = make(map[string]*tfbridge.SchemaInfo)
					}
					res.Fields[nameField] = tfbridge.AutoName(nameField, 255)
				}
			}
		}
	}

	return prov
}
