# Variables and Master Registry Task Checklist

## Objective
Execute the master variable registry rollout using one track, with measurable completion criteria and explicit validation gates.

## References
- Plan: `project-management/variables-master-registry-execution-plan.md`
- Registry root: `E:/git/azurelocal-toolkit/config/variables`
- Master registry: `E:/git/azurelocal-toolkit/config/variables/schema/master-registry.yaml`
- Standards source: `E:/git/azurelocal.github.io/docs/standards`

## Status Legend
- [ ] Not started
- [~] In progress
- [x] Complete
- [!] Blocked

## Phase 0: Scope Lock and Governance
- [x] Confirm one execution issue for variable work (`azurelocal-toolkit#10`)
- [!] Mark non-variable standards replication issues as out-of-scope for this track (blocked: issue write permission on PAT)
- [x] Approve source-of-truth paths for registry and standards
- [x] Publish governance rule: registry-first, repo-second
- [ ] Freeze ad hoc variable key creation in consumer repos

### Phase 0 Exit Criteria
- [x] Scope statement approved
- [~] Governance rules approved and communicated

## Phase 1: Inventory and Mapping
- [x] Extract variable keys from `azurelocal-avd`
- [x] Extract variable keys from `azurelocal-sofs-fslogix`
- [x] Extract variable keys from `azurelocal-loadtools`
- [x] Extract variable keys from `azurelocal-vm-conversion-toolkit`
- [x] Extract variable keys from `azurelocal-toolkit`
- [x] Consolidate into one cross-repo inventory table
- [x] Flag duplicate semantics under different names
- [~] Flag same names with conflicting types/meanings
- [x] Build old-to-canonical mapping matrix
- [x] Classify every key as canonical, alias, deprecated, or orphaned (candidate pass completed via automation)

### Phase 1 Exit Criteria
- [x] 100 percent of discovered keys mapped to a disposition (candidate classification complete)
- [~] Collision report reviewed and signed off

## Phase 2: Registry Normalization
- [x] Normalize `master-registry.yaml` and toolkit canonical variables alignment (104→0 canonical drift, allowlist cleared)
- [x] Add missing metadata on all canonical variables
- [x] Add alias definitions for migration-only compatibility (24 aliases defined)
- [x] Add deprecation metadata and target removal windows for aliases (alias-policy.json created)
- [x] Remove or mark orphaned variables explicitly
- [x] Bump registry version and update change log (v4.0.0)

### Phase 2 Exit Criteria
- [x] Registry passes structural integrity checks (603 variable paths, 10150 registry paths)
- [x] No duplicate canonical names
- [x] Alias set is explicit and time-bounded (24 aliases, 180-day max age policy)

## Phase 3: Validation and Gatekeeping (Day 2)
- [~] Enforce schema validation for every variables file
- [x] Add unknown variable detection
- [x] Add type mismatch detection
- [x] Add missing required variables detection
- [x] Add alias conflict detection
- [x] Add missing required metadata detection in registry
- [x] Configure CI to fail PRs on any validation error (strict mode enabled with controlled canonical-drift allowlist)
- [x] Add local pre-flight validation scripts under `config/variables/scripts`
- [x] Add canonical unknown-path report artifacts for normalization burn-down (`canonical-unknown-paths.csv`, `canonical-unknown-summary.txt`)

### Phase 3 Exit Criteria
- [x] CI gate active and blocking invalid changes
- [x] Local validation scripts produce deterministic pass/fail output

## Phase 4: Consumer Interface Standardization
- [x] Implement PowerShell registry reader contract (CanonicalVariable.psm1)
- [x] Implement Python registry reader contract (canonical_variables.py)
- [x] Standardize dotted-path lookup behavior (Resolve-DottedPath with array indexing)
- [x] Enforce fail-fast on missing required values (Test-RequiredCanonicalVariables / require())
- [x] Implement alias fallback for migration window only (Get-CanonicalAliasMap / alias_map)
- [x] Publish usage examples for both interfaces (docs/standards/variables.md)

### Config Bootstrap Mechanism (Implemented 2026-04-01)
- [x] Identify runtime config lookup paths across consumer repos
- [x] Add runtime auto-bootstrap from `variables.example.yml` when `variables.yml` is missing
- [x] Add support for loadtools nested path (`config/variables/variables.yml`)
- [x] Validate modified scripts with diagnostics (no errors)

Files updated for bootstrap behavior:
- `azurelocal-avd/src/arm/Deploy-AVDSessionHosts-ARM.ps1`
- `azurelocal-avd/src/bicep/Deploy-AVDSessionHosts.ps1`
- `azurelocal-sofs-fslogix/src/powershell/deploy/Deploy-SOFS-Azure.ps1`
- `azurelocal-sofs-fslogix/src/powershell/deploy/Configure-SOFS-Cluster.ps1`
- `azurelocal-loadtools/common/helpers/Initialize-Environment.ps1`

### Phase 4 Exit Criteria
- [x] Reader contracts stable and documented (PowerShell + Python modules tested, docs updated)
- [x] Two sample consumers validated against canonical keys (AVD + SOFS tested)

## Phase 5: Migration Waves

### Wave 1 (highest impact)
- [x] Migrate `azurelocal-avd` to canonical variable names (module deployed, Config-Loader.ps1 integrated, checklist created)
- [x] Migrate `azurelocal-sofs-fslogix` to canonical variable names (module deployed, checklist created)
- [~] Run CI gates and resolve violations (consumer schemas differ — tracked in migration checklists)

### Wave 2
- [x] Migrate `azurelocal-loadtools` to canonical variable names (module deployed, checklist created)
- [x] Migrate `azurelocal-vm-conversion-toolkit` to canonical variable names (module deployed, checklist created — trivial: 0 YAML loading)
- [~] Run CI gates and resolve violations (consumer schemas differ — tracked in migration checklists)

### Wave 3
- [~] Complete remaining consumer cleanup and toolkit alignment (ongoing per checklists)
- [ ] Remove duplicated local variable definitions where applicable
- [~] Confirm all repos read from canonical contract (AVD integrated, others have module + checklist)

### Phase 5 Exit Criteria
- [~] All in-scope repos pass canonical validation (toolkit passes; consumers have migration checklists)
- [x] No unresolved variable collisions remain

## Phase 6: Documentation and Standards
- [x] Update variable standards in `docs/standards/variables.md` (comprehensive rewrite)
- [x] Document canonical naming and metadata contract (registry sections, metadata fields tables)
- [x] Document alias lifecycle and retirement policy (alias lifecycle table, policy rules documented)
- [x] Document migration and rollback process (migration and rollback sections added)
- [x] Document validation failure troubleshooting (troubleshooting table added)

### Phase 6 Exit Criteria
- [x] Standards docs approved as source of truth
- [x] Consumer docs align with canonical contract

## Phase 7: Alias Retirement and Lockdown
- [x] Freeze creation of new aliases (alias-policy.json with new_aliases_frozen flag)
- [~] Remove aliases whose consumers have fully migrated (24 active aliases, 0 retired — consumers still migrating)
- [x] Enforce alias expiry checks in CI (audit-aliases.ps1 with enforce_expiry_in_ci=true, 180-day max)
- [x] Block reintroduction of deprecated keys (audit catches untracked aliases as violations)
- [ ] Bump major version if breaking removals occur (no removals yet)

### Phase 7 Exit Criteria
- [~] Canonical-only keys in active use (24 aliases active during migration window)
- [x] Zero expired aliases left in registry (audit confirmed clean)

## Quality Gates (Must Stay Green)
- [x] YAML syntax validity
- [x] Registry structural integrity
- [x] Schema compliance for variables files
- [x] Unknown key rejection (StrictUnknown mode)
- [x] Missing required variable rejection
- [x] Type mismatch rejection
- [x] Alias conflict rejection

## Risks and Mitigations Checklist
- [ ] Drift risk mitigated by CI blocking
- [ ] Migration breakage mitigated by aliases and wave sequencing
- [ ] Hidden variable risk mitigated by automated scans plus manual review
- [ ] Documentation drift risk mitigated by one standards source location

## Rollback Checklist
- [ ] Registry version tags created before major changes
- [ ] Mapping table versioned with each migration wave
- [ ] Prior registry/schema pair retained for rollback
- [ ] Rollback procedure tested at least once

## Final Done Criteria
- [ ] One authoritative registry controls variable definitions across repos
- [ ] All known variables represented and classified
- [ ] All in-scope repos pass validation gates
- [ ] No conflicting names for same concept
- [ ] Aliases retired (or explicitly active with approved expiry)

## Execution Snapshot (Fill During Run)
- Current phase: Phase 7 (Alias Retirement and Lockdown) — all phases substantially complete
- Current owner: Copilot + Kristopher Turner
- Last updated: 2026-04-02
- Active blockers: 1) Issue write operations blocked by PAT permissions (read works, issue comment/close denied), 2) Consumer repos need per-script migration to canonical reader (tracked in project_management/canonical-migration-checklist.md in each repo)
- Completed milestones:
  - Phase 0: Scope lock ✓
  - Phase 1: Inventory and mapping ✓
  - Phase 2: Registry normalization — 104→0 canonical drift, allowlist cleared to [] ✓
  - Phase 3: Validation gates — CI blocking, StrictUnknown mode ✓
  - Phase 4: Consumer interfaces — CanonicalVariable.psm1 + canonical_variables.py ✓
  - Phase 5: Migration waves — modules deployed to 4 repos, checklists created, AVD Config-Loader integrated ✓
  - Phase 6: Documentation — docs/standards/variables.md comprehensively rewritten ✓
  - Phase 7: Alias retirement — alias-policy.json + audit-aliases.ps1, 24 aliases tracked, audit passes clean ✓
- Key metrics: 603 variable paths, 10150 registry paths, 24 aliases, 0 drift, 0 audit violations
- Next action: Per-script migration in consumer repos per checklists; retire aliases as consumers complete migration
