# Repo intent — azurelocal.github.io

**Community docs site for Azure Local solutions — the org's public front door.**

## What this repo is

Community documentation for Azure Local (Microsoft's hybrid cloud infrastructure
platform enabled by Azure Arc). **Live site:** azurelocal.cloud. Covers the
Implementation Guide (end-to-end deployment runbook: CI/CD infrastructure, Azure
foundation, on-prem readiness, cluster deployment, operational foundations,
testing/validation), Planning (naming standards, discovery checklists, site
assessment, hardware requirements, landing zone strategy), Design (HLD/LLD),
Operations (day-2 procedures), Automation (IaC/pipeline guidance), Azure Services
on Azure Local (AVD, AKS, SQL MI, App Services, ML/AI), and a Lab Environment.

## Shape

- Docusaurus site (`docusaurus.config.js`, `versioned_docs/`, `sidebars.js`)
- Documentation versions align with Azure Local build releases
- `repo-management/`, `standards/` — org governance artifacts live here too

## How it relates to other repos

- The documentation hub for every tool in the AzureLocal org — most sibling repos
  (azurelocal-avd, azurelocal-ranger, azurelocal-toolkit, etc.) either link back
  here or publish their own docs that this site indexes

## Status

Active — the org's live public site.
