---
title: "Testing Standards"
sidebar_label: "Testing"
sidebar_position: 90
description: "MAPROOM fixtures, TRAILHEAD scenarios, and IIC canon — how AzureLocal repos test."
---

# Testing Standards

> **Canonical reference:** this document.
> **Applies to:** All AzureLocal repositories that ship executable code or infrastructure.
> **Last Updated:** 2026-04-12

Testing in AzureLocal is centralized. The frameworks, schemas, and canonical test data live in [`AzureLocal/platform/testing/`](https://github.com/AzureLocal/platform/tree/main/testing) and are consumed by every product repo. This standard defines **what each repo must test** and **which framework primitives it must use** — it does not re-describe the frameworks themselves (those have their own docs under [`docs/maproom/`](https://github.com/AzureLocal/platform/tree/main/docs/maproom) and [`docs/trailhead/`](https://github.com/AzureLocal/platform/tree/main/docs/trailhead) once Phase 2 ships).

!!! info "Phase status"
    Phase 1 (this document) establishes the **standard**. Phase 2 ships the **framework** (`AzureLocal.Maproom` PowerShell module, fixture + IIC schemas, TRAILHEAD harness). Until Phase 2 lands, repos continue to reference [`azurelocal-S2DCartographer/tests/maproom/`](https://github.com/AzureLocal/azurelocal-S2DCartographer/tree/main/tests/maproom) as the interim canonical implementation.

---

## Test classification

Every test in an AzureLocal repo falls into exactly one of these classes. The class determines where the test lives, what harness runs it, and what a failure means.

| Class | Purpose | Location | Harness |
|-------|---------|----------|---------|
| **unit** | Exercise a single function/cmdlet in isolation. No external state. | `tests/unit/` | Pester 5 (PowerShell) or pytest (Python) |
| **contract** | Assert the shape of a cluster / tenant / fleet against a **MAPROOM fixture**. Fixture is authoritative; code conforms to it. | `tests/maproom/fixtures/` | `AzureLocal.Maproom` |
| **integration** | Exercise module + live dependency (real cluster, real Azure tenant, real AD). Requires a provisioned lab. | `tests/integration/` | Pester 5 with lab config |
| **scenario** (TRAILHEAD) | Scripted end-to-end walkthrough with pass/fail gates. User-journey shaped: "user does X, expects Y". | `tests/trailhead/` | TRAILHEAD harness (Phase 2) |
| **drift-audit** | Assert a live environment still matches its MAPROOM fixture after time passes. Runs scheduled, not per-commit. | `tests/drift/` | `AzureLocal.Maproom` + scheduled workflow |

!!! warning "Classification under review"
    The five-class taxonomy above is the **current** rule. An open platform issue ([#3](https://github.com/AzureLocal/platform/issues/3)) is reviewing whether additional classes (compliance assertion, synthetic load, migration-inventory differ, repo conformance) should become first-class. Until that issue closes, treat anything outside the five classes as repo-local tooling — do not lift it into `platform/testing/` without ADR approval.

---

## MAPROOM — contract testing

MAPROOM fixtures are JSON documents describing the **expected shape** of a target (cluster, host pool, profile-container fleet, migration source inventory). Code-under-test reads the fixture, introspects the real target, and asserts conformance.

**Required for every repo that provisions or manages infrastructure.**

### Required files per repo

- `tests/maproom/fixtures/<target>.json` — one fixture per logical target. Filename = target identifier.
- `tests/maproom/<target>.Tests.ps1` — Pester test that loads the fixture and runs conformance assertions.

### Fixture schema

Fixtures MUST validate against [`platform/testing/maproom/schema/fixture.schema.json`](https://github.com/AzureLocal/platform/tree/main/testing/maproom/schema) (ships in Phase 2). Until then, use the schema derived from `azurelocal-S2DCartographer/tests/maproom/schema/` and expect to migrate on Phase 2 cutover.

### IIC canon as fixture source

Cluster-shape fixtures that represent the canonical **Infinite Improbability Corp** environment (see [Examples & IIC Policy](examples)) live in [`platform/testing/iic-canon/`](https://github.com/AzureLocal/platform/tree/main/testing/iic-canon). Repos reference these by path; they do not copy them locally.

Canonical IIC fixtures today:

- `iic-org.json` — org-level identity, tenancy, domain structure
- `iic-cluster-01.json` — primary HCI cluster shape
- `iic-networks.json` — network topology (VLANs, subnets, NSGs)

Additional IIC canons (AVD host pools, FSLogix profile maps, Nutanix source fleets) are pending classification in issue [#3](https://github.com/AzureLocal/platform/issues/3).

---

## TRAILHEAD — scenario testing

TRAILHEAD scenarios are executable walkthroughs of a user journey end-to-end: **"a user does X in sequence, each step has an expected outcome, the scenario passes if every step's gate passes."**

**Required for every repo that ships a user-facing workflow** (AVD logon, VM conversion run, migration rehearsal, demo deployment, training lab).

### Required files per repo

- `tests/trailhead/<scenario>.trailhead.ps1` — one file per scenario. Parameterized, idempotent where possible.
- `tests/trailhead/expected/<scenario>.expected.json` — the pass/fail gates the scenario asserts at each step.

### Naming

Scenario filenames describe the journey, not the implementation: `new-avd-host-pool-deploy.trailhead.ps1`, not `test-avd-deploy.ps1`. The filename is user-documentation-quality.

---

## What every repo MUST have

A conforming AzureLocal repo has, at minimum:

- [ ] `tests/` directory at repo root
- [ ] `tests/unit/` with at least one Pester/pytest test per shipped module
- [ ] `tests/maproom/fixtures/` with at least one fixture if the repo provisions or manages infrastructure
- [ ] `tests/trailhead/` with at least one scenario if the repo ships a user-facing workflow
- [ ] CI workflow invoking `platform/.github/workflows/run-tests.yml` (Phase 3) — executes unit + contract tests on every PR
- [ ] Scheduled workflow invoking `platform/.github/workflows/drift-audit.yml` weekly for repos with live environments

Repos that are purely documentation (`azurelocal-training`, `azurelocal.github.io`, `demo-repository` when it stays demo-only) are exempt from the MAPROOM/TRAILHEAD requirements but still need unit tests for any embedded scripts.

---

## What does NOT belong in a product repo's `tests/`

- **Copies of MAPROOM framework code.** Reference the platform module; don't vendor it.
- **Copies of IIC canon fixtures.** Reference [`platform/testing/iic-canon/`](https://github.com/AzureLocal/platform/tree/main/testing/iic-canon) by path.
- **Shared assertion helpers.** If two repos need the same helper, it belongs in `AzureLocal.Maproom`. Open a platform PR.
- **Secrets or live-environment credentials.** Integration test config lives in the CI environment, not in-repo.

---

## Enforcement

- **PR gate** — `Validate Repo Structure` (Phase 0, shipped) asserts `tests/` exists and is non-empty.
- **PR gate** — `Run Tests` (Phase 3, pending) executes unit + contract tests on every PR.
- **Weekly gate** — `Drift Audit` (Phase 4, pending) re-runs contract tests against live environments and opens an issue on divergence.
- **Onboarding gate** — `New-AzureLocalRepo.ps1` (Phase 5, pending) scaffolds the required directories so no new repo ships without them.

---

## Changes to this standard

Non-trivial edits require an ADR in [`decisions/`](https://github.com/AzureLocal/platform/tree/main/decisions). Current relevant ADRs:

- [`0003-maproom-iic-canon.md`](https://github.com/AzureLocal/platform/blob/main/decisions/0003-maproom-iic-canon.md) — MAPROOM & IIC canon design (Proposed)
- Classification rubric ADR — tracked in issue [#3](https://github.com/AzureLocal/platform/issues/3), number reserved for `0004-testing-toolset-classification.md`
