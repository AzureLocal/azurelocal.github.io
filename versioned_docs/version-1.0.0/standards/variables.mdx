# Variable Management

> **Last Updated:** 2026-04-02  
> **Applies to:** All AzureLocal repositories  
> **Master Registry:** [`azurelocal-toolkit/config/variables/schema/master-registry.yaml`](https://github.com/AzureLocal/azurelocal-toolkit/blob/main/config/variables/schema/master-registry.yaml)

---

## How The Variable System Works

Every AzureLocal repo uses a single YAML config file — `config/variables/variables.yml` — as input to all automation (Terraform, Bicep, PowerShell, Ansible). The file is not committed; you copy the template and fill it in.

```
                  ┌──────────────────────────────┐
                  │  Master Registry (970+ vars)  │
                  │  master-registry.yaml         │
                  └──────────┬───────────────────┘
                             │ defines
       ┌─────────────────────┼─────────────────────┐
       ▼                     ▼                      ▼
 variables.schema.json   alias-policy.json   legacy-compatible-roots.json
       │
       ▼
  variables/variables.example.yml ──copy──▶ variables/variables.yml ──consumed by──▶ Scripts
       │                              │
       ▼                              ▼
  CI validates (PR)         CanonicalVariable.psm1 / canonical_variables.py
                            config-loader.ps1
                            registry-variable.ps1
                            Generate-SolutionConfig.ps1
```

---

## Quick Start

### 1. Copy the template

```powershell
# In any AzureLocal repo
cp config/variables/variables.example.yml config/variables/variables.yml
```

### 2. Edit your values

Open `config/variables/variables.yml` and replace the IIC (Infinite Improbability Corp) example values with your environment's actual values. The file is organized by the same sections as the master registry.

### 3. Validate locally

```powershell
# From azurelocal-toolkit root
pwsh config/variables/scripts/validate-variables.ps1 -StrictUnknown
```

### 4. Run your automation

Scripts bootstrap automatically — if `config/variables/variables.yml` is missing, they copy from the template before continuing.

---

## Master Variable Registry

The registry is the single source of truth for **every variable** across all repos:

```
azurelocal-toolkit/config/variables/schema/master-registry.yaml
```

It defines each variable's type, description, constraints, defaults, examples, and which infrastructure type(s) it belongs to. Schema files, documentation, and validation tooling are all derived from it.

### Registry Structure (15 Sections)

| # | Section | What It Contains |
|---|---------|-----------------|
| 1 | `_metadata` | Registry version, infrastructure scenario definitions |
| 2 | `infrastructure_scenarios` | Infrastructure type definitions and variable group mappings |
| 3 | `site` | Site code, name, location, environment, owner |
| 4 | `environment` | Environment classification (dev/test/prod) |
| 5 | `tags` | Azure resource tags |
| 6 | `azure_platform` | Subscription, resource groups, platform config |
| 7 | `identity` | Entra ID, service principals, managed identities |
| 8 | `networking` | VNets, subnets, VLANs, DNS, logical networks |
| 9 | `compute` | VMs, clusters (Azure Local, WSFC/SOFS), cluster nodes |
| 10 | `storage_accounts` | Azure Storage accounts (witness, diagnostics) |
| 11 | `cluster_shared_volumes` | S2D CSV volume definitions |
| 12 | `marketplace_images` | Azure Marketplace VM image references |
| 13 | `security` | Key Vault, certificates, Defender, policies |
| 14 | `operations` | Monitoring, updates, backup/DR |
| 15 | `devops` | GitLab, CI/CD pipeline config |

### Infrastructure Types

Each variable is scoped to one or more infrastructure types:

| Type | Description | Repository |
|------|-------------|------------|
| `azure_local` | Azure Local hyper-converged clusters | `azurelocal-toolkit` |
| `avd_azure` | Azure Virtual Desktop in Azure cloud | `azurelocal-avd` |
| `avd_azure_local` | Azure Virtual Desktop on Azure Local | `azurelocal-avd` |
| `sofs_azure_local` | Scale-Out File Server on Azure Local | `azurelocal-sofs-fslogix` |
| `aks_azure_local` | AKS on Azure Local | `azurelocal-toolkit` |
| `loadtools` | Performance and load testing tools | `azurelocal-loadtools` |
| `vm_conversion` | VM generation conversion toolkit | `azurelocal-vm-conversion-toolkit` |
| `copilot` | AI-assisted operations | `azurelocal-copilot` |

### Supporting Schema Files

| File | Purpose |
|------|---------|
| `master-registry.yaml` | Authoritative variable definitions (970+ variables) |
| `variables.schema.json` | JSON Schema for CI validation of `variables.example.yml` |
| `legacy-compatible-roots.json` | Roots allowed during migration (alias fallback) |
| `canonical-drift-allowlist.json` | Paths temporarily allowed to drift from registry |
| `alias-policy.json` | Alias lifecycle and expiry rules |

All located in `azurelocal-toolkit/config/variables/schema/`.

---

## Config File Layout

### Per-Repository Structure

```
config/
└── variables/
    ├── variables.example.yml    # Template with IIC examples (committed)
    ├── variables.yml            # Your actual config (gitignored)
    └── schema/
        └── variables.schema.json  # JSON Schema for CI validation
```

### Path Reference

| Item | Canonical Path |
|------|---------------|
| Runtime config | `config/variables/variables.yml` |
| Template | `config/variables/variables.example.yml` |
| JSON Schema | `config/variables/schema/variables.schema.json` |
| Legacy flat path (deprecated) | `config/variables.yml` |
| Legacy template (deprecated) | `config/variables.example.yml` |

### Bootstrap Policy

All config-driven entry-point scripts must implement this sequence:

1. Check for runtime config at `config/variables/variables.yml`.
2. If missing, locate template at `config/variables/variables.example.yml`.
3. Copy template to runtime path (create parent dirs if needed).
4. Fail only if no template exists.

---

## Naming Rules

| Rule | Standard | Example |
|------|----------|--------|
| Top-level sections | `snake_case` | `azure_local`, `networking` |
| Keys within sections | `snake_case` | `subscription_id`, `resource_name` |
| Pattern | `^[a-z][a-z0-9_]*$` | — |
| Max length | 50 characters | — |
| Booleans | Descriptive names | `monitoring_enabled: true` |
| Secrets | `keyvault://` URI format | `keyvault://kv-iic-platform/admin-password` |

### Canonical Prefixes

The `wsfc_sofs_*` variable prefix is **canonical** and must not be renamed. These are consumed at runtime by `Deploy-SOFS-Azure.ps1`, `solution-sofs.yml`, and `variables.tf`.

---

## Secrets

Secrets are never stored in plaintext — use Key Vault URI references:

```yaml
security:
  admin_password: "keyvault://kv-iic-platform/admin-password"
  domain_join_password: "keyvault://kv-iic-platform/domain-join"
```

Scripts resolve these at runtime via the `keyvault-helper.ps1` module.

---

## Validation

### CI Pipeline (`validate-config.yml`)

Every PR that touches `config/` triggers the validation workflow. It runs these checks in order:

| Step | Script | What It Does |
|------|--------|-------------|
| 1. Registry structure | `validate-registry.ps1` | Verifies `_metadata` section exists, checks for duplicate key paths and alias conflicts |
| 2. Variables vs registry | `validate-variables.ps1 -StrictUnknown` | Validates `variables.example.yml` against JSON Schema, then checks every variable path exists in the registry |
| 3. Alias expiry | `check-alias-expiry.ps1` | Fails if any `expires_on` dates in alias entries have passed |
| 4. YAML syntax | Python `yaml.safe_load` | Ensures the example file is parseable |

### Running Validation Locally

```powershell
# From azurelocal-toolkit root — full validation suite
pwsh config/variables/scripts/validate-registry.ps1
pwsh config/variables/scripts/validate-variables.ps1 -StrictUnknown
pwsh config/variables/scripts/check-alias-expiry.ps1
```

`validate-variables.ps1` produces reports in `config/variables/reports/`:

| Report | Contents |
|--------|----------|
| `canonical-unknown-paths.csv` | Variable paths not found in the registry |
| `canonical-unknown-summary.txt` | Summary with top unknown roots and counts |

### What `-StrictUnknown` Does

Without it, unknown paths are warnings. With `-StrictUnknown`, they fail the validation — this is the CI default.

---

## Reading Variables in Scripts

### PowerShell: `CanonicalVariable.psm1`

The primary module for reading variables with alias resolution from the master registry.

**Location:** `azurelocal-toolkit/scripts/common/utilities/helpers/CanonicalVariable.psm1`

```powershell
Import-Module helpers/CanonicalVariable.psm1
Initialize-CanonicalVariables

# Read a value by dotted path
$clusterName = Get-CanonicalVariable -Path 'compute.clusters.azure_local.azl_name'

# Read with fallback default
$env = Get-CanonicalVariable -Path 'site.environment' -Default 'dev'

# Check if a path exists
$exists = Test-CanonicalVariable -Path 'identity.azure_tenant_id'

# Fail-fast: require multiple paths or throw
Test-RequiredCanonicalVariables -Paths @(
    'site.environment',
    'azure_platform.tenant.id',
    'security.keyvault_name'
) -ScriptName $MyInvocation.MyCommand.Name

# Get all alias mappings
$aliases = Get-CanonicalAliasMap
```

**Key behaviors:**
- Auto-bootstraps from `config/variables/variables.example.yml` if `config/variables/variables.yml` is missing
- Resolves aliases from the master registry (old path → canonical path)
- Supports array indexing: `compute.cluster_nodes[0].hostname`
- `Test-RequiredCanonicalVariables` throws with the full list of missing paths

### Python: `canonical_variables.py`

The Python equivalent for repos that use Python tooling.

**Location:** `azurelocal-toolkit/config/variables/scripts/canonical_variables.py`

```python
from canonical_variables import CanonicalVariables

cv = CanonicalVariables()

# Read a value
tenant_id = cv.get("identity.azure_tenant_id")

# Read with default
env = cv.get("site.environment", default="dev")

# Check existence
if cv.exists("security.keyvault_name"):
    ...

# Fail-fast on missing required values
cv.require(
    "identity.azure_tenant_id",
    "security.keyvault_name",
    caller="deploy-avd.py"
)

# Get alias map
aliases = cv.alias_map
```

### PowerShell: `config-loader.ps1`

Hierarchical config loader that merges environment + solution overrides.

**Location:** `azurelocal-toolkit/scripts/common/utilities/helpers/config-loader.ps1`

```powershell
. helpers/config-loader.ps1

# Load merged config (master → environment → solution overrides)
$config = Get-MergedConfiguration -Environment "prod" -Solution "azure-local"

# Access directly
$tenantId = $config.azure_platform.tenant.id
$kvName = $config.security.key_vaults.management.name
```

**Merge order (later wins):**
1. Master registry defaults
2. Environment config (`config/environments/{env}.yaml`)
3. Solution config (`solutions/{solution}/config/solution.yaml`)

### PowerShell: `registry-variable.ps1`

Search and lookup helper for finding variables by name across the configuration.

**Location:** `azurelocal-toolkit/scripts/common/utilities/helpers/registry-variable.ps1`

```powershell
. helpers/registry-variable.ps1

# Search for variables containing "tenant"
Find-RegistryVariable -VariableName "tenant"

# Exact match
Find-RegistryVariable -VariableName "tenant_id" -ExactMatch

# Check if a path exists
Test-RegistryVariablePath -Path "azure_platform.tenant.id"

# Get a value by path
$value = Get-RegistryVariableValue -Path "security.keyvault_name"
```

---

## Generation & Transformation Tools

### `Generate-SolutionConfig.ps1`

Creates a solution-specific YAML config by combining `solutions.yaml` + master registry + environment infrastructure file.

**Location:** `azurelocal-toolkit/tools/Generate-SolutionConfig.ps1`

```powershell
# Generate config for AVD on Azure Local in lab environment
.\Generate-SolutionConfig.ps1 -Solution avd-azure-local -Environment azl-lab

# Preview without writing
.\Generate-SolutionConfig.ps1 -Solution sofs-azure-local -Environment azl-lab -WhatIf

# Custom output path
.\Generate-SolutionConfig.ps1 -Solution avd-azure-local -Environment azl-lab -OutputPath ./out/avd.yml
```

**What it does:**
- Reads the solution definition from `solutions.yaml` to get required variable groups
- Pulls actual values from `infrastructure-{env}.yml`
- Validates required variables are present
- Outputs to `solutions/{name}/solution-{name}.yml`

### `Generate-ClusterConfigMD.ps1`

Generates a human-readable markdown document from the infrastructure config — useful for review before deployment.

**Location:** `azurelocal-toolkit/scripts/common/utilities/tools/Generate-ClusterConfigMD.ps1`

```powershell
# Generate from solution
.\Generate-ClusterConfigMD.ps1 -Solution "azure-local"

# Generate from specific file
.\Generate-ClusterConfigMD.ps1 -InfrastructurePath .\infrastructure.yml
```

### `New-ScriptFromTemplate.ps1`

Scaffolds new scripts following AzureLocal scripting standards, with proper config loading baked in.

**Location:** `azurelocal-toolkit/scripts/tools/New-ScriptFromTemplate.ps1`

```powershell
# Config-driven script
.\New-ScriptFromTemplate.ps1 -ScriptType AzurePowerShell -Name "New-AzKeyVault" -Description "Creates a Key Vault"

# Standalone script (inline variables, no config dependency)
.\New-ScriptFromTemplate.ps1 -ScriptType AzurePowerShell -Name "New-AzKeyVault" -Standalone
```

**Script types:** `PowerShell`, `AzurePowerShell`, `AzureCliPowerShell`, `AzureCliBash`, `InvokeScript`

### `Convert-ToStandaloneScript.ps1`

Takes a config-driven script and bakes in current config values to create a standalone version with no external dependencies.

**Location:** `azurelocal-toolkit/scripts/tools/Convert-ToStandaloneScript.ps1`

```powershell
.\Convert-ToStandaloneScript.ps1 -SourceScript .\New-AzureLocalSP.ps1 -ConfigPath .\infrastructure.yml
```

---

## Cross-Repo Analysis Tools

These tools live in `azurelocal-toolkit/config/variables/scripts/` and operate across all repos in the workspace.

### `inventory-repo-variables.ps1`

Scans all repos for variable usage and produces a cross-repo inventory.

```powershell
.\inventory-repo-variables.ps1 -WorkspaceRoot "E:\git" -OutputRoot ".\reports"
```

**Outputs:**
- `variable-inventory.csv` / `.json` — every variable path by repo and file
- `variable-inventory-summary.txt` — counts per repo, unique paths

### `build-mapping-report.ps1`

Finds shared variables across repos and detects naming collisions.

```powershell
.\build-mapping-report.ps1 -InventoryCsv ".\reports\variable-inventory.csv"
```

**Outputs:**
- `shared-key-paths.csv` — variable paths used in multiple repos
- `leaf-collisions.csv` — same leaf name, different paths across repos
- `canonical-mapping-template.csv` — template for mapping legacy → canonical

### `classify-mapping-template.ps1`

Classifies variables as canonical, legacy alias, or orphaned based on the mapping template.

```powershell
.\classify-mapping-template.ps1
```

**Outputs:**
- `canonical-mapping-template-classified.csv` — each path classified as `canonical_candidate`, `alias_candidate`, or `orphaned_candidate`
- `classification-summary.txt`

---

## Tool-Specific Parameter Derivation

All tool-specific parameter files are derived from `config/variables/variables.yml`:

| Tool | Parameter File | How |
|------|---------------|-----|
| Terraform | `src/terraform/terraform.tfvars` | Map YAML sections to HCL variables |
| Bicep | `src/bicep/main.bicepparam` | Map YAML sections to Bicep parameters |
| ARM | `src/arm/azuredeploy.parameters.json` | Map YAML sections to ARM parameter schema |
| PowerShell | *(reads config directly)* | `CanonicalVariable.psm1` or `ConvertFrom-Yaml` |
| Ansible | `src/ansible/inventory/hosts.yml` | Map YAML sections to `group_vars` |

The central config is the **single source of truth**. Tool-specific files are convenience copies that should be regenerable from it.

---

## Per-Repo Automation Summary

| Repo | Validation | Config Access | Schema |
|------|-----------|--------------|--------|
| `azurelocal-toolkit` | 7 PowerShell validators | CanonicalVariable, config-loader, registry-variable | master-registry.yaml |
| `azurelocal-avd` | Python validator | CanonicalVariable, config-loader | variables.schema.json |
| `azurelocal-sofs-fslogix` | Python validator | CanonicalVariable | variables.schema.json |
| `azurelocal-loadtools` | Python validator | ConfigManager, StateManager | variables.schema.json |
| `azurelocal-vm-conversion-toolkit` | Python validator | CanonicalVariable | variables.schema.json |
| `azurelocal-copilot` | — | — | variables.example.yml |
| `azurelocal-training` | — | — | — |

---

## Related Standards

- [Infrastructure Standards](infrastructure) — infrastructure types and deployment phases
- [Solution Development Standards](solutions) — solution-to-repo mapping and IaC tool parity
- [Scripting Standards](scripting) — script structure and config loading patterns
- [Automation Interoperability](automation) — cross-tool conventions