# Project Notes — Implementation Docs & Toolkit Alignment

> Last updated: 2026-04-02

## Current Status

Nothing in these notes should imply the implementation docs are complete. Use the actual counts below as the current state.

| Item | Actual State |
|------|--------------|
| Navigation section present | 114/114 |
| Variables section present | 113/114 |
| Troubleshooting section present | 113/114 |
| Version Control section present | 113/114 |
| Document Info Block present | 93/114 |
| Frontmatter with 13+ fields | 23/114 |
| Orchestrated Script tab present | 65/114 |
| Standalone Script tab present | 62/114 |
| Toolkit path reference in tabs | 53/114 |
| Alternatives section present | 0/114 |
| Toolkit scripts verified on disk | 525/525 |

## What This Project Still Needs

For every one of the 114 task files in `docs/implementation/`, the following must be verified and fixed:

1. **Orchestrated Script tab** — label exactly `Orchestrated Script`, `value="orchestrated"`, contains `**Script**: [link]` to `Invoke-*-Orchestrated.ps1` in toolkit + embedded script content
2. **Standalone Script tab** — label exactly `Standalone Script`, `value="standalone"`, contains `**Script**: [link]` to standalone `.ps1` in toolkit + embedded script content
3. **Alternatives section** — `## Alternatives` block with table linking to `azurecli/` and `bash/` script variants
4. **Correct subfolder names** — `azurecli/` not `azure-cli/`, `bash/` not `bash-scripts/`
5. **Appendix D** — `docs/implementation/appendices/appendix-d-script-index.mdx` updated with complete per-task script entries

Script names for every task come from `project-management/deploy-script-coverage.md`.

## Key Decisions

| Decision | Value |
|----------|-------|
| Primary on-prem script | PowerShell 7 |
| Primary Azure script | Azure PowerShell (Az module) |
| Tab groupId — Azure/on-prem tasks | `deployment-method` |
| Tab groupId — CI/CD tasks | `scm-platform` |
| Script subfolders | `powershell/`, `azurecli/`, `bash/` — no hyphens |
| Orch script name pattern | `Invoke-<TaskName>-Orchestrated.ps1` |
| Standalone script name pattern | `<Verb>-<TaskName>.ps1` |
| AzCLI script name pattern | `az-<task-name>.ps1` |
| Bash script name pattern | `az-<task-name>.sh` |
| Toolkit GitHub URL base | `https://github.com/AzureLocal/azurelocal-toolkit/blob/main/` |
| Toolkit path prefix | `scripts/deploy/<part>/<phase>/<task-folder>/` |

## Files

| File | Purpose |
|------|---------|
| `project-management/deploy-script-coverage.md` | Source of truth for all script names per task |
| `project-management/claude/implementation-standardization-plan.md` | Full Phase 7 standards and work items |
| `project-management/claude/tracking-log.md` | Live status log using actual audited counts |
| `project-management/scripts/Update-TaskFiles.ps1` | Batch update script — DO NOT RUN without explicit approval |

---

## Original Project Brief

This next project/plan is going to be a very big one and very important.

E:\git\azurelocal.github.io\docs\implementation
E:\git\azurelocal-toolkit

These are the two repos we are focusing on.  For the docs, we are focusing on the implmentation section.

1. The azltoolkit, the scripts folders need to be in allignment with the tasks in teh docs folder.  we did some changes to part 1 and part 2 recently. The toolkit will be out of sync. This is the easy part.


The other part, a lot of these pages do not align, both with content, but the framewrok and page design.  
this part of the taskt I need you to be careful with is the content.

The over all rule that we followed in the past for the implmentation docs where this:
Title: Full CAF/WAF Deployment Overview  
Badges: Depending on the task

Next was infrormation about the documente example below:

DOCUMENT CATEGORY: Runbook
SCOPE: Full Azure Landing Zone deployment
PURPOSE: Deploy complete CAF/WAF Enterprise-Scale architecture
MASTER REFERENCE: Azure Landing Zones — Enterprise-Scale

The next is the status of the document.  

Status: Active

-----------------

Next is where it gets tricky.  We have various types of task:

1. Azure task
2. Azure/Azure Local Task
3. On prem task (Active Directoyr, etc)
4. configurations of solutions like wac, etc. inside the vms

each of these has many options that can be used to deploy.

1. Manuallly: Aure Portal, Sconig on nodes, etc.
2. Scripts
2a. fully orchastracted scripts that fully use the variales .yml and pull from the kv for secrectes but allso have the abillity to pass parmamerts in for varoius things if needed.  These scripts can be broken down to target on prem solutis via remoe powershell (invoke, etc) or just run and hit azure, etc.
2b. these scripts need to do the same as 2a but all the variables that noramly would pull from the varibles doc need to be parametrs and need to be set in the script or have an help that has all the variagrls.  the pupose of this so those can either copy and paste into a node or some other area that can't get to the variables.yml and still do the same as 2a.

as for the scripts.  there are many options...  powershell (7), azure cli for powershell, azure cli (bash), powershell for azure, etc.

what we need to decide is picking just one script as our main script throught the document.  now, we know that there are things that powershell can't do, or powershell for azure cant do. etc.  that we need to use azurel cli for powershell ,etc.

we need to decie what our main script versoin will be:

on prem node:  Powershell core
Azure:  Azure Cli for Powershell or powershell for Azure?

we need to standard on this.

However, this solution is setup to support all version.  there is an appendix or appnedices that has a section for scripts.  the toolkit is configurd to have all possible scripts created

so we pick a man script type for each task.  the others scrpt that can be used, we need to move to eh right location in teh appendices and stil create them.

Now that is said....

each of these documents will have at leat 3 tabs for each step for each task. right???

we need to standarized the tab names

each task/step scripts shoud exit in the toolkit and also the entire script should be embededed as well.  

Here is soem examples:

E:\git\azurelocal.github.io\docs\implementation\04-cluster-deployment\phase-01-hardware-provisioning

this phase has 5 task.  each phase has an index file that is an overview of the entire phase.

it has what that phase will do, what prereqs for this phase needs done. any warnings or notifistion nedd.  a validation check list that should be followed after the task are done a well.  the expected outcome, etc.

hthen as mentioned above.. after the status part of the top header:

there shold be an overivew for the task
anotehr pre-reqs for that task.
the list of variables that are going to be used for this specifi task from the variables yml

then the execution optsins. which is the tabs from aboe... 

then followed up for all is a validation check list for that task
a trouble shooting section..
then version contol.

an example:

E:\git\azurelocal.github.io\docs\implementation\04-cluster-deployment\phase-01-hardware-provisioning\task-01-create-dhcp-reservations-for-idrac-interfaces.mdx


I want to stress.  this is a standard we shoud document, not every dcoument will be the same. use logic to decide if we need to customize a spefic task page or not.

Follow other standards when it comes to what comapny you use for exmaples, and what you use for authors etc.

these docs shold be decent from Part 1 - part 5.  the content that is. but the document formating may be off still.  anything after part 6-part 8 and the appendicess alos needs deep content work.  don't over look part 1-5 though. we do need to verify the content.

One thing in this plan:  for both the docs repo and the aztoolkit.  I want you to create a backup-(todaysdate) new branch in github only.  dont creat a pr to merge.

During the planning, I want you to make sure you pull as much infromatin from the microsoft docs, github, etc.  

as I mentioned.. this is the bread and butter... of these docs. thiese need to be 100% factural, 100% readable for those that are not deep knowledge but enough to get thigns done, etc.

include in the plans an advance traking log of wht is being done, what hasn't been done, and what has been done. 

pleaes temporay create a /project-management/claude/ folder in the root fo the doc repo t place the full detailed plan, any reports you need to makewhile doing disovery, the log of the status, etc.

please ask quetions if you need clerificion for this plan.  please add or suggest more if needed.
