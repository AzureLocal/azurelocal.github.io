# Task Page Standard Template

> Version: 1.0.0  
> Created: 2026-03-24  
> Purpose: Canonical format for all implementation task pages (.mdx)

This document defines the required structure, sections, and formatting for every task page in `docs/implementation/`. All task pages MUST follow this standard unless explicitly listed as an approved override.

---

## 1. Frontmatter (Required)

Every task page must include all of these frontmatter fields:

```yaml
---
title: "Task NN: Full Task Title"
sidebar_label: "Task NN: Short Label"
sidebar_position: N
description: "One-sentence description of what this task accomplishes."
category: "Runbook"
scope: "Brief scope description"
purpose: "What this task achieves"
author: "Azure Local Cloudnology Team"
created: YYYY-MM-DD
updated: YYYY-MM-DD
version: "X.Y.Z"
tags:
  - azure-local
  - phase-NN
  - relevant-tag
keywords:
  - relevant keyword
  - another keyword
status: "Active"
---
```

### Field Rules

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `title` | string | ✅ | Format: `"Task NN: Full Title"` |
| `sidebar_label` | string | ✅ | Shorter than title, still starts with `Task NN:` |
| `sidebar_position` | integer | ✅ | Matches task number |
| `description` | string | ✅ | One concise sentence |
| `category` | string | ✅ | Always `"Runbook"` for task pages |
| `scope` | string | ✅ | Brief scope |
| `purpose` | string | ✅ | What the task achieves |
| `author` | string | ✅ | Always `"Azure Local Cloudnology Team"` |
| `created` | date | ✅ | ISO 8601 date |
| `updated` | date | ✅ | ISO 8601 date — update on every change |
| `version` | string | ✅ | SemVer format |
| `tags` | list | ✅ | YAML list format preferred |
| `keywords` | list | ✅ | YAML list format preferred |
| `status` | string | ✅ | `"Active"`, `"Draft"`, or `"Deprecated"` |

---

## 2. Imports (Required)

Immediately after frontmatter:

```jsx
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

Include even if tabs are not yet implemented — ensures consistent structure.

---

## 3. Title + Badges (Required)

```markdown
# Task NN: Full Task Title

[![Runbook](https://img.shields.io/badge/Type-Runbook-blue?style=flat-square)](./index.mdx)
[![Azure](https://img.shields.io/badge/Platform-Azure_Local-0078D4?style=flat-square&logo=microsoftazure)](https://learn.microsoft.com/en-us/azure/azure-local/)
```

### Badge Rules

| Badge | When to Include | Color |
|-------|----------------|-------|
| Type — Runbook | Always | blue |
| Platform — Azure Local | Always | 0078D4 |
| Hardware — Dell | When task involves physical hardware | 007DB8 |
| Task — Optional | When task is optional | yellow |
| Phase — NN | When extra context is helpful | orange |
| Status — Draft | When content is incomplete | red |

Badge links should point to the parent index page (`./index.mdx`) or relevant external docs.

---

## 4. Metadata Block (Required)

```markdown
> **DOCUMENT CATEGORY**: Runbook  
> **SCOPE**: [matches frontmatter scope]  
> **PURPOSE**: [matches frontmatter purpose]  
> **MASTER REFERENCE**: [Link to authoritative Microsoft/vendor docs]

**Status**: Active
```

### Rules

- The blockquote uses `>` prefix on every line
- Each field is **bolded** with a colon and two trailing spaces for line break
- MASTER REFERENCE should link to the most authoritative external source
- Status line is outside the blockquote, bolded

---

## 5. Overview (Required)

```markdown
---

## Overview

[2-4 sentence description of what this task does and why it matters.]

:::info Key Context
[Important contextual information the reader needs before starting.]
:::
```

### Rules

- Always preceded by a horizontal rule (`---`)
- One paragraph of context
- At least one admonition (Use `:::info` for context, `:::warning` for cautions, `:::tip` for helpful hints)

---

## 6. Prerequisites (Required)

```markdown
---

## Prerequisites

| Prerequisite | Description |
|-------------|-------------|
| Previous phase/task complete | [Link to prerequisite] completed |
| Access level | [Required permissions/roles] |
| Tools | [Required tools installed] |
| Configuration | `variables.yml` configured with [specific paths] |
```

### Rules

- Always a table — never a bullet list
- Minimum columns: Prerequisite | Description
- Include links to prerequisite tasks when referencing prior phases
- Mention variables.yml configuration requirements

---

## 7. Variables Used (Required when task uses variables.yml)

```markdown
---

## Variables from variables.yml

| Variable Path | Type | Description |
|--------------|------|-------------|
| `azure.subscriptions.lab.id` | string | Target Azure subscription ID |
| `nodes.<name>.idrac_ip` | string | iDRAC IP for each cluster node |
```

### Rules

- Table with three columns: Variable Path | Type | Description
- Use dot-notation for YAML paths
- Only list variables actually used by this task's scripts
- Omit this section only if the task uses zero variables (rare)

---

## 8. Execution Options — Tabs (Required)

This is the core content section. All executable tasks must provide tabbed execution options.

### Standard Azure Task Tabs

```jsx
<Tabs groupId="deployment-method">
  <TabItem value="portal" label="Azure Portal" default>
    {/* Portal/UI instructions */}
  </TabItem>
  <TabItem value="orchestrated" label="Orchestrated Script">
    {/* Orchestrated script using config-loader */}
  </TabItem>
  <TabItem value="standalone" label="Standalone Script">
    {/* Self-contained script with inline params */}
  </TabItem>
</Tabs>
```

### Standard On-Prem Task Tabs

```jsx
<Tabs groupId="deployment-method">
  <TabItem value="manual" label="Manual (RDP/Console)" default>
    {/* Manual steps via RDP, SCONFIG, or console */}
  </TabItem>
  <TabItem value="orchestrated" label="Orchestrated Script">
    {/* Orchestrated script using config-loader */}
  </TabItem>
  <TabItem value="standalone" label="Standalone Script">
    {/* Self-contained script with inline params */}
  </TabItem>
</Tabs>
```

### Tab Content Structure

Each tab MUST follow this internal structure:

```markdown
### [Tab Title]

> **When to use**: [One sentence describing when this approach is appropriate]

#### Procedure

[Numbered steps or code block]

#### Validation

[Validation command or checklist for this specific approach]
```

### Tab Rules

| Rule | Detail |
|------|--------|
| `groupId` | Always `"deployment-method"` unless approved override |
| `value` | Use `portal`, `manual`, `orchestrated`, `standalone` |
| `default` | First tab is always `default` |
| "When to use" | Required blockquote in every tab |
| Code blocks | Use `powershell` language, include `title="filename.ps1"` metadata |
| Script paths | Orchestrated: show relative path from toolkit root |
| Inline params | Standalone: use `$REPLACE_` prefix for user-configurable values |

### Approved Tab Overrides

| Context | GroupId | Tab Labels | Example |
|---------|---------|------------|---------|
| Hardware-specific DHCP | `device-type` | FortiGate / Windows DHCP / Customer | 04/phase-01/task-01 |
| CI/CD pipelines | `platform` | GitHub / GitLab / Azure DevOps | 01-cicd/* |

---

## 9. Validation Checklist (Required)

```markdown
---

## Validation Checklist

- [ ] [First validation item]
- [ ] [Second validation item]
- [ ] [Third validation item]
```

### Rules

- Always use checkbox format (`- [ ]`)
- Each item should be independently verifiable
- Include both positive checks (thing works) and negative checks (no errors in log)
- Minimum 3 items

---

## 10. Troubleshooting (Required)

```markdown
---

## Troubleshooting

| Issue | Cause | Resolution |
|-------|-------|------------|
| [Symptom description] | [Root cause] | [Step-by-step fix] |
```

### Rules

- Always a table — never prose
- Three columns: Issue | Cause | Resolution
- Minimum 2 common issues per task
- Resolution should be actionable steps, not "contact support"

---

## 11. Navigation (Required)

```markdown
---

## Navigation

| Previous | Up | Next |
|----------|-----|------|
| [← Task NN-1: Title](./prev-task.mdx) | [Phase NN: Title](./index.mdx) | [Task NN+1: Title →](./next-task.mdx) |
```

### Rules

- Always a 3-column table
- Use `←` and `→` arrows in display text
- Link to phase index for "Up"
- First task: Previous = phase index or prior phase's last task
- Last task: Next = next phase index or "Part Complete"

---

## 12. Version Control (Required)

```markdown
---

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | YYYY-MM-DD | Azure Local Cloudnology Team | Initial release |
| 1.1.0 | YYYY-MM-DD | Azure Local Cloudnology Team | [Brief change description] |
```

### Rules

- Table format (not bullet list)
- Columns: Version | Date | Author | Changes
- Most recent version first
- Author is always "Azure Local Cloudnology Team"

---

## Complete Section Order

For reference, every task page should have sections in this exact order:

```
1.  Frontmatter (YAML)
2.  Imports (Tabs, TabItem)
3.  H1 Title + Badges
4.  Metadata Blockquote (CATEGORY/SCOPE/PURPOSE/MASTER REFERENCE)
5.  Status Line
6.  --- (horizontal rule)
7.  ## Overview
8.  --- (horizontal rule)
9.  ## Prerequisites (table)
10. --- (horizontal rule)
11. ## Variables from variables.yml (table) [if applicable]
12. --- (horizontal rule)
13. ## Execution Options (Tabs)
14. --- (horizontal rule)
15. ## Validation Checklist (checkboxes)
16. --- (horizontal rule)
17. ## Troubleshooting (table)
18. --- (horizontal rule)
19. ## Navigation (table)
20. --- (horizontal rule)
21. Version Control (table)
```

---

## Admonition Reference

| Type | Usage | Example |
|------|-------|---------|
| `:::info` | Context, authentication notes, configuration references | "Azure authentication required before running scripts" |
| `:::tip` | Helpful optional information | "Use `-WhatIf` flag to preview changes" |
| `:::warning` | Critical cautions, data loss risks, ordering dependencies | "This step is irreversible" |
| `:::note` | Supplementary information | "This applies to 24H2 only" |
| `:::danger` | Use sparingly — only for destructive operations | "Running this will delete all cluster data" |

---

## Code Block Standards

### PowerShell Code Blocks

````markdown
```powershell title="scripts/deploy/02/phase-02/task-01/Register-Providers-Standalone.ps1"
# Description: Register required Azure resource providers
# Variables: subscription_id

$SubscriptionId = "REPLACE_SUBSCRIPTION_ID"
```
````

### Rules

- Language: `powershell` (not `ps1`, `pwsh`, or `shell`)
- `title=` metadata: relative path from toolkit root for orchestrated scripts, filename only for standalone
- Comment header: `# Description:` and `# Variables:` on first lines
- Standalone scripts: Use `$REPLACE_` prefix for configurable values
- Orchestrated scripts: Show config-loader usage pattern

---

## Example Company Values

When providing example values in code or configuration:

| Value | Standard |
|-------|----------|
| Company name | Infinite Azure Local Corp (IIC) |
| Region | eastus |
| Resource group pattern | `rg-azurelocal-<purpose>-001` |
| Subscription name | `iic-lz-azurelocal-001` |
| Domain | `iic.local` |
| Key Vault | `kv-azurelocal-001` |
