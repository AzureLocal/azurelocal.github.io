---
title: Azure Local Toolkit (Platform Automation)
sidebar_position: 12
---

# Azure Local Toolkit — Platform Lifecycle Automation

The Azure Local Toolkit provides cross-cutting automation infrastructure for all Azure Local solution repos. It owns the master variable registry, IaC maturity tracking, standards replication mechanisms, and shared scaffolding — ensuring that every solution repo (AVD, SOFS, load testing, etc.) stays consistent, current, and well-governed.

## Service Details

### What It Enables

Rather than duplicating configuration, tooling, and pipeline logic across every workload repo, the toolkit centralizes all shared platform concerns. Solution repos pull from the toolkit's variable registry and inherit standardized CI/CD patterns, reducing drift and maintenance burden.

### Key Use Cases

- **Variable registry** — Single source of truth for shared infrastructure variables consumed by all solution repos
- **IaC maturity tracking** — Automated scoring and lifecycle tracking of Infrastructure as Code completeness per repo
- **Standards replication** — Mechanism to propagate naming conventions, tagging policies, and configuration standards across repos
- **Shared scaffolding** — Reusable templates and module stubs for bootstrapping new solution repos quickly
- **Pipeline governance** — Cross-repo CI/CD patterns for linting, testing, and release management

### Architecture

```
azurelocal-toolkit/
├── config/
│   ├── variables.example.yml   # Master variable definitions
│   ├── infrastructure.yml      # Shared infrastructure parameters
│   └── azure/                  # Azure-specific configuration
├── src/                        # Core toolkit modules
├── pipelines/                  # Shared CI/CD pipeline templates
└── tools/                      # Developer utilities
```

The toolkit is consumed as a dependency by each solution repo. Changes to the variable registry or standards propagate downstream via the standards replication mechanism.

## Supported Features

- Centralized variable registry (master config)
- IaC maturity lifecycle tracking with automated scoring
- Cross-repo standards replication
- Shared pipeline templates (lint, test, release)
- New repo bootstrap scaffolding
- Azure resource naming and tagging governance

## Deployment Notes

- No standalone deployment — the toolkit is a dependency layer consumed by other repos
- Requires access to all solution repos for standards propagation
- Refer to the [azurelocal-toolkit](https://github.com/AzureLocal/azurelocal-toolkit) repo for implementation details

## Resources

- **Repository**: [azurelocal-toolkit](https://github.com/AzureLocal/azurelocal-toolkit)
- **Docs Site**: [azurelocal.github.io/azurelocal-toolkit](https://azurelocal.github.io/azurelocal-toolkit/)
- **Variable Registry**: [Issue #4](https://github.com/AzureLocal/azurelocal-toolkit/issues/4)
- **IaC Maturity Tracking**: [Issue #5](https://github.com/AzureLocal/azurelocal-toolkit/issues/5)

:::note Work in Progress
This page is a placeholder. Full documentation is tracked in [azurelocal-toolkit](https://github.com/AzureLocal/azurelocal-toolkit).
:::
