#Requires -Version 7.0
<#
.SYNOPSIS
    Fails when a toolkit path written on the docs site does not exist in the toolkit.

.DESCRIPTION
    Owner rule D19: the toolkit and both guides (Implementation and Automation) stay
    aligned. This check finds every path into the Azure Local toolkit written in the
    published content (docs/, blog/, src/pages/, plus the site config files) and
    checks each one against the toolkit file list.

    What counts as a toolkit path:
      * GitHub links: github.com/AzureLocal/azurelocal-toolkit/(blob|tree)/<ref>/<path>
      * Terraform module sources: github.com/AzureLocal/azurelocal-toolkit//<path>
      * Written as "azurelocal-toolkit/<scripts|src|config|...>/<path>"
      * Plain paths starting with a toolkit top-level folder (scripts, src, config,
        pipelines, ansible, tests, tools, archive), with or without a leading "./"

    A path with a glob (*) or a placeholder (<name>, {name}) passes when the folder
    before the first glob or placeholder exists. A path that ends in "/" must be a
    folder. Anything else must be a file or a folder in the toolkit.

    The toolkit file list is a text file with one repo-relative path per line, the
    output of "git ls-tree -r --name-only <ref>" or "git ls-files" in the toolkit.
    Folders are derived from the file paths.

    Allow list (optional): lines of "<path> | <reason>". Use it only for paths that
    are generated at run time (for example a user's own infrastructure.yml) or that
    belong to another repository. Forms: "<path> | <reason>" (anywhere),
    "<page> :: <path> | <reason>" (that page only), and "page:<page> | <reason>"
    (a whole page about another repository). <page> is the file path from the site root.
    Blank lines and lines starting with # are ignored. An entry with no reason fails.

.PARAMETER ToolkitFileList
    Path to the toolkit file list (one repo-relative path per line).

.PARAMETER SiteRoot
    Root of the docs site repo. Default: two folders above this script's folder.

.PARAMETER AllowListPath
    Path to the allow list. Default: toolkit-links-allowlist.txt next to this script.

.PARAMETER Report
    Print every toolkit path found with its status, not just the failures.

.EXAMPLE
    git -C ../azurelocal-toolkit ls-tree -r --name-only HEAD > toolkit-files.txt
    ./repo-management/scripts/Test-ToolkitLinks.ps1 -ToolkitFileList ./toolkit-files.txt
#>
[CmdletBinding()]
param(
    [Parameter(Mandatory)]
    [string]$ToolkitFileList,

    [string]$SiteRoot = (Split-Path -Parent (Split-Path -Parent $PSScriptRoot)),

    [string]$AllowListPath = (Join-Path $PSScriptRoot 'toolkit-links-allowlist.txt'),

    [switch]$Report
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

if (-not (Test-Path -LiteralPath $ToolkitFileList)) {
    throw "Toolkit file list not found: $ToolkitFileList"
}

# Toolkit file and folder sets
$files = [System.Collections.Generic.HashSet[string]]::new([System.StringComparer]::Ordinal)
$dirs = [System.Collections.Generic.HashSet[string]]::new([System.StringComparer]::Ordinal)
foreach ($line in Get-Content -LiteralPath $ToolkitFileList) {
    $p = $line.Trim().Replace('\', '/')
    if ($p -eq '') { continue }
    [void]$files.Add($p)
    $parts = $p.Split('/')
    for ($i = 1; $i -lt $parts.Count; $i++) {
        [void]$dirs.Add(($parts[0..($i - 1)] -join '/'))
    }
}
if ($files.Count -lt 50) {
    throw "Toolkit file list has only $($files.Count) entries; refusing to check against a list that small."
}

# Allow list
$allowPaths = @{}
$allowPages = @{}
$allowErrors = [System.Collections.Generic.List[string]]::new()
if (Test-Path -LiteralPath $AllowListPath) {
    $n = 0
    foreach ($raw in Get-Content -LiteralPath $AllowListPath) {
        $n++
        $t = $raw.Trim()
        if ($t -eq '' -or $t.StartsWith('#')) { continue }
        $bar = $t.IndexOf('|')
        if ($bar -lt 0 -or $t.Substring($bar + 1).Trim() -eq '') {
            $allowErrors.Add("${AllowListPath}:${n}: allow list entry has no reason: $t")
            continue
        }
        $key = $t.Substring(0, $bar).Trim()
        if ($key.StartsWith('page:')) { $allowPages[$key.Substring(5).Trim()] = 0 }
        else { $allowPaths[($key -replace '\s*::\s*', '::')] = 0 }
    }
}

# Extraction
$roots = 'scripts|src|config|pipelines|ansible|tests|tools|archive'
$pathChars = '(?:[A-Za-z0-9_.\-]|/|\*|(?<=/)\{[^}\s]*\}|(?<=/)<[A-Za-z_.\-]+>)+'

$reGithub = [regex]"github\.com/AzureLocal/azurelocal-toolkit/(?:(?:blob|tree)/(?<ref>[A-Za-z0-9_.\-]+)/|/)(?<p>[^\s)\]""'``>#?|]+)"
$reDouble = [regex]"(?<![A-Za-z0-9_./\-])azurelocal-toolkit//(?<p>[^\s)\]""'``>#?|]+)"
$reNamed = [regex]"(?<![A-Za-z0-9_./\-])azurelocal-toolkit/(?<p>(?:$roots)/$pathChars)"
$rePlain = [regex]"(?<![A-Za-z0-9_./~\-])(?:\./)?(?<p>(?:$roots)/$pathChars)"

function Get-Candidate {
    param([string]$Text)
    $out = [System.Collections.Generic.List[object]]::new()
    $mask = $Text
    foreach ($m in $reGithub.Matches($Text)) {
        $out.Add([pscustomobject]@{ Kind = 'github'; Raw = $m.Groups['p'].Value })
        $mask = $mask.Remove($m.Index, $m.Length).Insert($m.Index, (' ' * $m.Length))
    }
    foreach ($m in $reDouble.Matches($mask)) {
        $out.Add([pscustomobject]@{ Kind = 'module'; Raw = $m.Groups['p'].Value })
        $mask = $mask.Remove($m.Index, $m.Length).Insert($m.Index, (' ' * $m.Length))
    }
    foreach ($m in $reNamed.Matches($mask)) {
        $out.Add([pscustomobject]@{ Kind = 'named'; Raw = $m.Groups['p'].Value })
        $mask = $mask.Remove($m.Index, $m.Length).Insert($m.Index, (' ' * $m.Length))
    }
    foreach ($m in $rePlain.Matches($mask)) {
        $out.Add([pscustomobject]@{ Kind = 'plain'; Raw = $m.Groups['p'].Value })
    }
    $out
}

function Resolve-Candidate {
    # Returns Path (normalized), Exists, and a Note.
    param([string]$Raw)
    $p = $Raw.TrimEnd('.', ',', ':', ';')
    $mustBeDir = $p.EndsWith('/')
    $cut = [regex]::Match($p, '[*{<]')
    $isPattern = $cut.Success
    if ($isPattern) {
        $head = $p.Substring(0, $cut.Index)
        $p = $head.Substring(0, $head.LastIndexOf('/') + 1)
        $mustBeDir = $true
    }
    $norm = $p.TrimEnd('/')
    $exists = if ($mustBeDir) { $dirs.Contains($norm) }
    else { $files.Contains($norm) -or $dirs.Contains($norm) }
    [pscustomobject]@{ Path = $norm; Exists = $exists; Pattern = $isPattern }
}

# Content scan
$scanRoots = @('docs', 'blog', 'src/pages') | ForEach-Object { Join-Path $SiteRoot $_ } | Where-Object { Test-Path -LiteralPath $_ }
$scanFiles = [System.Collections.Generic.List[System.IO.FileInfo]]::new()
foreach ($r in $scanRoots) {
    Get-ChildItem -LiteralPath $r -Recurse -File -Include *.md, *.mdx, *.js, *.jsx, *.ts, *.tsx | ForEach-Object { $scanFiles.Add($_) }
}
foreach ($f in 'docusaurus.config.js', 'sidebars.js') {
    $fp = Join-Path $SiteRoot $f
    if (Test-Path -LiteralPath $fp) { $scanFiles.Add((Get-Item -LiteralPath $fp)) }
}

$rootFull = (Resolve-Path -LiteralPath $SiteRoot).Path
$results = [System.Collections.Generic.List[object]]::new()
$usedAllow = @{}

foreach ($f in $scanFiles) {
    $rel = [System.IO.Path]::GetRelativePath($rootFull, $f.FullName).Replace('\', '/')
    if ($allowPages.ContainsKey($rel)) { $usedAllow["page:$rel"] = 1; continue }
    $isMarkdown = $f.Extension -in '.md', '.mdx'
    $lineNo = 0
    foreach ($line in [System.IO.File]::ReadLines($f.FullName)) {
        $lineNo++
        if ($line.IndexOf('azurelocal-toolkit') -lt 0 -and -not $isMarkdown) { continue }
        foreach ($c in (Get-Candidate -Text $line)) {
            # Plain paths are only read from Markdown pages; scripts and config use GitHub links only.
            if (-not $isMarkdown -and $c.Kind -eq 'plain') { continue }
            $r = Resolve-Candidate -Raw $c.Raw
            $scoped = "$rel::$($r.Path)"
            $status = if ($r.Exists) { 'ok' }
            elseif ($allowPaths.ContainsKey($scoped)) { $usedAllow[$scoped] = 1; 'allowed' }
            elseif ($allowPaths.ContainsKey($r.Path)) { $usedAllow[$r.Path] = 1; 'allowed' }
            else { 'MISSING' }
            $results.Add([pscustomobject]@{
                    File = $rel; Line = $lineNo; Kind = $c.Kind; Path = $r.Path
                    Raw = $c.Raw; Status = $status
                })
        }
    }
}

if ($Report) {
    $results | Sort-Object File, Line | ForEach-Object {
        '{0,-8} {1}:{2}  {3}' -f $_.Status, $_.File, $_.Line, $_.Path
    }
}

$missing = @($results | Where-Object Status -eq 'MISSING')
$allowKeys = @($allowPaths.Keys) + @($allowPages.Keys | ForEach-Object { "page:$_" })
$stale = @($allowKeys | Where-Object { -not $usedAllow.ContainsKey($_) })

Write-Host ("Toolkit paths found: {0}; ok: {1}; allowed: {2}; missing: {3}" -f `
        $results.Count, @($results | Where-Object Status -eq 'ok').Count,
    @($results | Where-Object Status -eq 'allowed').Count, $missing.Count)

foreach ($s in $stale) { Write-Warning "Allow list entry matches nothing on the site: $s" }

$failed = $false
foreach ($e in $allowErrors) { Write-Error $e -ErrorAction Continue; $failed = $true }
foreach ($m in $missing) {
    # GitHub Actions annotation format; plain text elsewhere.
    Write-Host ("::error file={0},line={1}::Toolkit path not found in the toolkit: {2}" -f $m.File, $m.Line, $m.Path)
    Write-Host ("MISSING  {0}:{1}  {2}" -f $m.File, $m.Line, $m.Path)
    $failed = $true
}
if ($failed) { exit 1 }
Write-Host 'Toolkit link check passed.'
