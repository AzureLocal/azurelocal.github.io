# Variables and Master Registry Execution Plan

## Purpose
Establish one authoritative variable system across all AzureLocal repositories by using the master registry in the toolkit as the single source of truth.

## Authoritative Sources
- Variable source root: `E:/git/azurelocal-toolkit/config/variables`
- Master registry: `E:/git/azurelocal-toolkit/config/variables/schema/master-registry.yaml`
- Variable schema: `E:/git/azurelocal-toolkit/config/variables/schema/variables.schema.json`
- Example variables baseline: `E:/git/azurelocal-toolkit/config/variables/variables.example.yml`
- Standards source for documentation: `E:/git/azurelocal.github.io/docs/standards`

## Scope
In scope:
- Canonical variable naming and metadata contract
- Full inventory of known variables across all repos
- Master registry normalization and population
- Schema and CI enforcement
- Migration of consumer repos to canonical names
- Temporary alias compatibility and planned retirement

Out of scope:
- Non-variable standards replication mechanics
- Unrelated CI or pipeline refactors
- Non-registry configuration systems

## Repositories in Migration Scope
- `azurelocal-toolkit`
- `azurelocal-avd`
- `azurelocal-sofs-fslogix`
- `azurelocal-loadtools`
- `azurelocal-vm-conversion-toolkit`
- `azurelocal.github.io` (standards and reference docs only)

## Governance Rules
1. No new variable is allowed in any repo unless first added to `master-registry.yaml`.
2. Canonical names are mandatory for all new work.
3. Aliases are migration-only and must include retirement dates.
4. CI must fail on schema violations, unknown keys, and required field gaps.
5. `docs/standards` in `azurelocal.github.io` is the documentation source of truth.

## Canonical Variable Contract
Each variable definition in the registry must include:
- `canonical_name`
- `type`
- `required`
- `default` (if applicable)
- `allowed_values` or `pattern` (if applicable)
- `scope` (`global`, `solution`, or `environment`)
- `repos` (consumer list)
- `description`
- `aliases` (optional, migration only)
- `deprecation` metadata for aliases (if applicable)

## Folder and Script Conventions
Helper scripts for variable operations must be created under:
- `E:/git/azurelocal-toolkit/config/variables/scripts`

Planned script set:
- `validate-registry.ps1` (registry integrity checks)
- `validate-variables.ps1` (variables file schema checks)
- `inventory-repo-variables.ps1` (extract keys per repo)
- `build-mapping-report.ps1` (old-to-canonical mapping)
- `check-alias-expiry.ps1` (alias retirement enforcement)

## Implementation Phases

### Phase 0: Scope Lock and Tracking
Tasks:
- Confirm one execution path for variable work
- Record source-of-truth decisions in project docs
- Freeze ad hoc variable additions until governance checks exist

Deliverables:
- Approved scope statement
- Approved governance rules

Exit criteria:
- Team agreement on source paths and rules

### Phase 1: Inventory and Gap Analysis
Tasks:
- Scan all in-scope repos for variable keys and structures
- Build consolidated inventory of all known keys
- Mark duplicates and semantic collisions
- Classify keys into canonical, alias candidate, deprecated, orphaned

Deliverables:
- Cross-repo variable inventory table
- Collision report
- Initial canonical mapping matrix

Exit criteria:
- 100 percent of discovered keys mapped to a disposition

### Phase 2: Registry Normalization
Tasks:
- Normalize `master-registry.yaml` structure to contract
- Add missing metadata on all canonical variables
- Add alias metadata for migration paths
- Version registry and capture change log entries

Deliverables:
- Registry v1 normalized and complete
- Mapping table from legacy keys to canonical keys

Exit criteria:
- Registry passes structural integrity checks
- No duplicate canonical names

### Phase 3: Schema and Validation Gates
Tasks:
- Ensure `variables.schema.json` enforces canonical contract
- Add CI checks for:
  - Unknown variables
  - Type mismatch
  - Missing required metadata
  - Alias collisions
- Add local validation scripts under `config/variables/scripts`

Deliverables:
- Working CI validation gate
- Local pre-flight validator scripts

Exit criteria:
- Pull requests fail on invalid variable changes

### Phase 4: Consumer Integration
Tasks:
- Implement and standardize consumer interfaces:
  - PowerShell reader contract
  - Python reader contract
- Require lookup by canonical key path
- Require explicit failure on missing required values
- Support temporary alias fallback during migration window

Deliverables:
- Shared reader modules and usage guidance
- Reference integration examples

Exit criteria:
- At least two repos consuming canonical registry successfully

### Phase 5: Migration Waves
Wave 1:
- `azurelocal-avd`
- `azurelocal-sofs-fslogix`

Wave 2:
- `azurelocal-loadtools`
- `azurelocal-vm-conversion-toolkit`

Wave 3:
- Remaining consumers and cleanup in toolkit

Tasks per wave:
- Replace legacy names with canonical names
- Keep explicit alias map for backward compatibility
- Run validation gate and fix violations
- Confirm no behavior regressions

Deliverables:
- Per-repo migration checklist completion
- Validation reports for each repo

Exit criteria:
- All targeted repos pass canonical validation

### Phase 6: Alias Retirement and Lockdown
Tasks:
- Enforce alias expiry policy
- Remove aliases once all consumers have cut over
- Raise registry major version for breaking removals if required
- Block any reintroduction of deprecated keys

Deliverables:
- Canonical-only registry
- Retirement log

Exit criteria:
- Zero active aliases
- Zero non-canonical key usage in in-scope repos

## Documentation Plan
Source location:
- `E:/git/azurelocal.github.io/docs/standards`

Documentation updates:
- Update variable standards in `variables.mdx`
- Add migration policy and alias lifecycle section
- Add contributor rules: "registry first, repo second"
- Add troubleshooting section for validation failures

Replication expectation:
- Other repos replicate from this standards source and do not redefine variable standards independently

## CI and Quality Gates
Required gates:
- Registry file shape and required metadata
- Variables schema compliance
- Unknown key rejection
- Required key presence checks
- Alias collision and expiry checks

Recommended gate order:
1. YAML syntax
2. Registry integrity
3. Schema validation
4. Cross-file consistency checks
5. Alias policy checks

## Risks and Mitigations
Risk: Registry drift from consumer repos
- Mitigation: Registry-first rule and CI blocking

Risk: Breaking migrations across active repos
- Mitigation: Alias window, wave-based cutover, rollback map

Risk: Incomplete inventory misses hidden variables
- Mitigation: Automated scans + manual review pass per repo

Risk: Standards/doc drift
- Mitigation: Single doc source in `docs/standards`

## Rollback Strategy
- Keep previous registry version tags
- Keep old-to-new mapping table versioned
- Roll back by restoring prior registry and schema pair
- Preserve migration scripts for re-apply

## Success Criteria
1. One authoritative registry file controls variable definitions across repos.
2. All known variables from all in-scope repos are represented and classified.
3. CI blocks non-canonical and invalid variable changes.
4. All in-scope repos consume canonical names.
5. Aliases are fully retired after migration window.

## Immediate Next Actions
1. Continue Phase 2 normalization burn-down to reduce canonical drift allowlist to zero.
2. Consolidate runtime `variables.yml` bootstrap behavior into a shared helper contract across repos.
3. Complete Wave 1 canonical name migration (`azurelocal-avd`, `azurelocal-sofs-fslogix`).
4. Extend Wave 2 migration (`azurelocal-loadtools`, `azurelocal-vm-conversion-toolkit`).
5. Finalize standards updates in `docs/standards/variables.mdx` and migration guidance.

## Completed Milestones (2026-04-01)
- Inventory and mapping automation implemented under toolkit variable scripts.
- Strict config validation and canonical unknown-path reporting enabled.
- CI strict gate active with controlled canonical-drift allowlist.
- Runtime config bootstrap implemented in key entry points:
  - `azurelocal-avd/src/arm/Deploy-AVDSessionHosts-ARM.ps1`
  - `azurelocal-avd/src/bicep/Deploy-AVDSessionHosts.ps1`
  - `azurelocal-sofs-fslogix/src/powershell/deploy/Deploy-SOFS-Azure.ps1`
  - `azurelocal-sofs-fslogix/src/powershell/deploy/Configure-SOFS-Cluster.ps1`
  - `azurelocal-loadtools/common/helpers/Initialize-Environment.ps1`
