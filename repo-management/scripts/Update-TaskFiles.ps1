#!/usr/bin/env pwsh
#Requires -Version 7.0
<#
.SYNOPSIS
    Update-TaskFiles.ps1
    Comprehensive batch-updater for all 114 implementation task MDX files.

.DESCRIPTION
    For each task in deploy-script-coverage.md:
    1. Replaces/updates script path references in Orchestrated Script tab
    2. Replaces/updates alternatives table with correct azurecli/ paths
    3. Replaces/updates embedded script content with actual toolkit scripts
    4. Adds missing Orchestrated Script tabs (with embedded script content)
    5. Replaces/updates script path reference in Standalone Script tab
    6. Adds missing Standalone Script tabs (with embedded script content)
    7. Globally fixes azure-cli/ -> azurecli/ path references

.PARAMETER DryRun
    Preview changes without writing files.
.PARAMETER FilterTask
    Only process tasks matching this substring.
.PARAMETER ShowVerbose
    Show unchanged files too.
#>
param (
    [switch]$DryRun,
    [string]$FilterTask = "",
    [switch]$ShowVerbose
)

$ErrorActionPreference = "Stop"

$docsBase     = "E:\git\azurelocal.github.io\docs\implementation"
$toolkitBase  = "E:\git\azurelocal-toolkit\scripts\deploy"
$coverageFile = "E:\git\azurelocal.github.io\repo-management\reports\variables\deploy-script-coverage.md"

# Build taskMap from coverage table
$lines   = Get-Content $coverageFile
$taskMap = @{}
foreach ($line in $lines) {
    if ($line -match '^\|\s+\d+\s+\|') {
        $cols = $line -split '\|' | ForEach-Object { $_.Trim() }
        if ($cols.Count -ge 9 -and $cols[2] -and $cols[2] -ne 'Task Path') {
            $taskMap[$cols[2]] = @{
                StandalonePS = $cols[7]
                OrchPS       = $cols[8]
                StandCLI     = if ($cols.Count -gt 9)  { $cols[9] }  else { "" }
                OrchCLI      = if ($cols.Count -gt 10) { $cols[10] } else { "" }
                StandBash    = if ($cols.Count -gt 11) { $cols[11] } else { "" }
                OrchBash     = if ($cols.Count -gt 12) { $cols[12] } else { "" }
                Other        = if ($cols.Count -gt 13) { $cols[13] } else { "" }
            }
        }
    }
}
Write-Host "Loaded $($taskMap.Count) task entries" -ForegroundColor Cyan

function Read-ToolkitScript {
    param([string]$TaskPath, [string]$SubDir, [string]$FileName)
    if (-not $FileName) { return $null }
    $p = Join-Path $toolkitBase ($TaskPath.Replace('/', '\')) $SubDir $FileName
    if (Test-Path $p) { return ([IO.File]::ReadAllText($p)).TrimEnd() }
    return $null
}

function Build-OrchRefBlock {
    param([string]$TaskPath, [hashtable]$Scripts)
    $orchPS = $Scripts.OrchPS
    if (-not $orchPS) { return "" }
    $out = @("**Script**: ``scripts/deploy/$TaskPath/powershell/$orchPS``", "")
    $alts = @()
    if ($Scripts.StandCLI)  { $alts += "| Azure CLI (PowerShell) | ``scripts/deploy/$TaskPath/azurecli/$($Scripts.StandCLI)`` |" }
    if ($Scripts.StandBash) { $alts += "| Azure CLI (Bash) | ``scripts/deploy/$TaskPath/bash/$($Scripts.StandBash)`` |" }
    if ($alts.Count -gt 0) {
        $out += "> **Alternatives** — other toolchain implementations:"
        $out += ">"
        $out += "> | Variant | Path |"
        $out += "> |---------|------|"
        $alts | ForEach-Object { $out += "> $_" }
        $out += ""
    }
    return ($out -join "`n")
}

function Build-StandRefLine {
    param([string]$TaskPath, [hashtable]$Scripts)
    if (-not $Scripts.StandalonePS) { return "" }
    return "**Script**: ``scripts/deploy/$TaskPath/powershell/$($Scripts.StandalonePS)``"
}

function Find-TabBounds {
    param([string]$Content, [string]$TabValue)
    $openTag  = "<TabItem value=""$TabValue"""
    $startIdx = $Content.IndexOf($openTag)
    if ($startIdx -lt 0) { return $null }
    $closeTag = "</TabItem>"
    $endIdx   = $Content.IndexOf($closeTag, $startIdx + $openTag.Length)
    if ($endIdx -lt 0) { return $null }
    return @{ Start = $startIdx; End = $endIdx + $closeTag.Length }
}

function Rebuild-OrchContent {
    param([string]$TabContent, [string]$TaskPath, [hashtable]$Scripts)
    $scriptContent = Read-ToolkitScript -TaskPath $TaskPath -SubDir "powershell" -FileName $Scripts.OrchPS
    if (-not $scriptContent) { $scriptContent = "# Script: $($Scripts.OrchPS)`n# (Script not available)" }
    $refBlock = Build-OrchRefBlock -TaskPath $TaskPath -Scripts $Scripts

    # Strip old script refs, section headers and alternatives
    $t = $TabContent
    # Remove **Primary**: or **Script**: reference lines
    $t = $t -replace '\*\*(?:Primary|Script)\*\*:[ \t]*`[^`\r\n]+`[ \t]*\r?\n?', ''
    # Remove #### Script / #### Code section headers (legacy format)
    $t = $t -replace '####[ \t]+(?:Script|Code)[ \t]*\r?\n', ''
    # Remove **Alternatives**: header line
    $t = $t -replace '\*\*Alternatives\*\*:[ \t]*\r?\n?', ''
    # Remove old-format non-blockquote markdown table for alternatives
    # Matches: | Variant | Path | header + separator + data rows
    $t = [regex]::Replace($t, '(?m)^\| Variant \| Path \|[ \t]*\r?\n\|[-| ]+\|[ \t]*\r?\n(?:\|[^\r\n]*\r?\n?)*', '')
    # Remove blockquote-style alternatives block: > **Alternatives**... through last > row
    $t = [regex]::Replace($t, '(?s)> \*\*Alternatives\*\*[^\r\n]*\r?\n(>[ \t]*[^\r\n]*\r?\n?)*', '')

    # Replace first powershell code block content
    $m = [regex]::Match($t, '(?s)```powershell\r?\n(.*?)\r?\n```')
    if ($m.Success) {
        $newBlock = "``````powershell`n$scriptContent`n``````"
        $before   = $t.Substring(0, $m.Index)
        $after    = $t.Substring($m.Index + $m.Length)
        $t = $before + "$refBlock`n$newBlock" + $after
    } else {
        $ci = $t.LastIndexOf("</TabItem>")
        if ($ci -ge 0) { $t = $t.Substring(0, $ci) + "`n$refBlock`n``````powershell`n$scriptContent`n``````" + "`n" + $t.Substring($ci) }
    }
    return ($t -replace '(\r?\n){3,}', "`n`n")
}

function Rebuild-StandContent {
    param([string]$TabContent, [string]$TaskPath, [hashtable]$Scripts)
    $scriptContent = Read-ToolkitScript -TaskPath $TaskPath -SubDir "powershell" -FileName $Scripts.StandalonePS
    if (-not $scriptContent) { $scriptContent = "# Script: $($Scripts.StandalonePS)`n# (Script not available)" }
    $refLine = Build-StandRefLine -TaskPath $TaskPath -Scripts $Scripts

    $t = $TabContent
    $t = $t -replace '\*\*(?:Primary|Script)\*\*:[ \t]*`[^\`\r\n]+`[ \t]*\r?\n?', ''
    $t = $t -replace '####[ \t]+(?:Script|Code)[ \t]*\r?\n', ''

    $m = [regex]::Match($t, '(?s)```powershell\r?\n(.*?)\r?\n```')
    if ($m.Success) {
        $newBlock = "``````powershell`n$scriptContent`n``````"
        $before   = $t.Substring(0, $m.Index)
        $after    = $t.Substring($m.Index + $m.Length)
        $t = $before + "$refLine`n`n$newBlock" + $after
    } else {
        $ci = $t.LastIndexOf("</TabItem>")
        if ($ci -ge 0) { $t = $t.Substring(0, $ci) + "`n$refLine`n`n``````powershell`n$scriptContent`n``````" + "`n" + $t.Substring($ci) }
    }
    return ($t -replace '(\r?\n){3,}', "`n`n")
}

function New-OrchTabItem {
    param([string]$TaskPath, [hashtable]$Scripts)
    if (-not $Scripts.OrchPS) { return "" }
    $sc = Read-ToolkitScript $TaskPath "powershell" $Scripts.OrchPS
    if (-not $sc) { $sc = "# Script: $($Scripts.OrchPS)" }
    $rb = Build-OrchRefBlock $TaskPath $Scripts
    $fences = '```'
    $lines = @()
    $lines += ""
    $lines += "<TabItem value=`"orchestrated`" label=`"Orchestrated Script`">"
    $lines += ""
    $lines += "### Orchestrated Script"
    $lines += ""
    $lines += "> **When to use**: Deploy from management server — reads configuration from ``variables.yml``."
    $lines += ""
    $lines += $rb
    $lines += "${fences}powershell"
    $lines += $sc
    $lines += $fences
    $lines += ""
    $lines += "</TabItem>"
    return ($lines -join "`n")
}

function New-StandTabItem {
    param([string]$TaskPath, [hashtable]$Scripts)
    if (-not $Scripts.StandalonePS) { return "" }
    $sc = Read-ToolkitScript $TaskPath "powershell" $Scripts.StandalonePS
    if (-not $sc) { $sc = "# Script: $($Scripts.StandalonePS)" }
    $rl = Build-StandRefLine $TaskPath $Scripts
    $fences = '```'
    $lines = @()
    $lines += ""
    $lines += "<TabItem value=`"standalone`" label=`"Standalone Script`">"
    $lines += ""
    $lines += "### Standalone Script"
    $lines += ""
    $lines += "> **When to use**: Copy-paste ready script — fully self-contained, no external dependencies."
    $lines += ""
    $lines += $rl
    $lines += ""
    $lines += "${fences}powershell"
    $lines += $sc
    $lines += $fences
    $lines += ""
    $lines += "</TabItem>"
    return ($lines -join "`n")
}

# Results
$updated   = [System.Collections.Generic.List[string]]::new()
$unchanged = [System.Collections.Generic.List[string]]::new()
$skipped   = [System.Collections.Generic.List[string]]::new()
$errors    = [System.Collections.Generic.List[string]]::new()

foreach ($taskPath in ($taskMap.Keys | Sort-Object)) {
    if ($FilterTask -and $taskPath -notlike "*$FilterTask*") { continue }

    $scripts = $taskMap[$taskPath]
    $mdxPath = Join-Path $docsBase ($taskPath.Replace('/', '\') + '.mdx')

    if (-not (Test-Path $mdxPath)) {
        $skipped.Add("NO_FILE: $taskPath")
        if ($ShowVerbose) { Write-Host "  skip: $taskPath" -ForegroundColor DarkGray }
        continue
    }
    if (-not $scripts.OrchPS -and -not $scripts.StandalonePS) {
        $skipped.Add("NO_SCRIPTS: $taskPath")
        continue
    }

    try {
        $original = [IO.File]::ReadAllText($mdxPath)
        $content  = $original

        # Skip CI/CD tasks
        if ($taskPath -like "01-cicd*") {
            $skipped.Add("CICD: $taskPath")
            continue
        }

        # Fix azure-cli/ -> azurecli/ globally
        $content = $content -replace '/azure-cli/', '/azurecli/'

        # Handle Orchestrated Script tab
        if ($scripts.OrchPS) {
            $b = Find-TabBounds -Content $content -TabValue "orchestrated"
            if ($b) {
                $old = $content.Substring($b.Start, $b.End - $b.Start)
                $new = Rebuild-OrchContent -TabContent $old -TaskPath $taskPath -Scripts $scripts
                if ($new -ne $old) {
                    $content = $content.Substring(0, $b.Start) + $new + $content.Substring($b.End)
                }
            } else {
                $newTab = New-OrchTabItem -TaskPath $taskPath -Scripts $scripts
                if ($newTab) {
                    $sb = Find-TabBounds -Content $content -TabValue "standalone"
                    if ($sb) {
                        $content = $content.Substring(0, $sb.Start) + $newTab + "`n" + $content.Substring($sb.Start)
                    } else {
                        $li = $content.LastIndexOf("</Tabs>")
                        if ($li -ge 0) { $content = $content.Substring(0, $li) + $newTab + "`n" + $content.Substring($li) }
                    }
                }
            }
        }

        # Handle Standalone Script tab
        if ($scripts.StandalonePS) {
            $b = Find-TabBounds -Content $content -TabValue "standalone"
            if ($b) {
                $old = $content.Substring($b.Start, $b.End - $b.Start)
                $new = Rebuild-StandContent -TabContent $old -TaskPath $taskPath -Scripts $scripts
                if ($new -ne $old) {
                    $content = $content.Substring(0, $b.Start) + $new + $content.Substring($b.End)
                }
            } else {
                $newTab = New-StandTabItem -TaskPath $taskPath -Scripts $scripts
                if ($newTab) {
                    $li = $content.LastIndexOf("</Tabs>")
                    if ($li -ge 0) { $content = $content.Substring(0, $li) + $newTab + "`n" + $content.Substring($li) }
                }
            }
        }

        if ($content -ne $original) {
            if (-not $DryRun) { [IO.File]::WriteAllText($mdxPath, $content, [Text.Encoding]::UTF8) }
            $updated.Add($taskPath)
            Write-Host "  UPDATED: $taskPath" -ForegroundColor Green
        } else {
            $unchanged.Add($taskPath)
            if ($ShowVerbose) { Write-Host "  unchanged: $taskPath" -ForegroundColor DarkGray }
        }
    }
    catch {
        $errors.Add("$taskPath : $_")
        Write-Host "  ERROR: $taskPath`n  $_" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "===================================" -ForegroundColor Cyan
Write-Host "SUMMARY" -ForegroundColor Cyan
Write-Host "===================================" -ForegroundColor Cyan
Write-Host "Updated:   $($updated.Count)" -ForegroundColor Green
Write-Host "Unchanged: $($unchanged.Count)" -ForegroundColor DarkGray
Write-Host "Skipped:   $($skipped.Count)" -ForegroundColor DarkYellow
Write-Host "Errors:    $($errors.Count)" -ForegroundColor Red
if ($errors.Count -gt 0) { $errors | ForEach-Object { Write-Host "  $_" -ForegroundColor Red } }
if ($DryRun) { Write-Host "`n[DRY RUN] Would update:" -ForegroundColor Yellow; $updated | ForEach-Object { Write-Host "  $_" -ForegroundColor Yellow } }