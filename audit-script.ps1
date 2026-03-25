$results = @()
$files = Get-ChildItem "E:\git\azurelocal.github.io\docs\implementation" -Recurse -Filter "*.mdx"

foreach ($file in $files) {
    $lines = Get-Content $file.FullName
    $inBlock = $false
    $hasIssue = $false
    
    for ($i = 0; $i -lt $lines.Count; $i++) {
        $line = $lines[$i]
        if ($line -match '^> \*\*DOCUMENT CATEGORY\*\*') { 
            $inBlock = $true 
        }
        if ($inBlock -and $line -match '^> \*\*') {
            if (-not ($line -match '  $')) {
                $hasIssue = $true
            }
        } elseif ($inBlock -and $line -notmatch '^> \*\*') {
            $inBlock = $false
        }
    }
    
    if ($hasIssue) {
        $results += $file.FullName.Replace("E:\git\azurelocal.github.io\", "")
    }
}

"=== FILES WITH DOCUMENT INFO BLOCK FORMATTING ISSUES ===" | Out-File "E:\git\azurelocal.github.io\audit-results.txt"
"Total: $($results.Count) files" | Out-File "E:\git\azurelocal.github.io\audit-results.txt" -Append
"" | Out-File "E:\git\azurelocal.github.io\audit-results.txt" -Append
$results | Out-File "E:\git\azurelocal.github.io\audit-results.txt" -Append

Write-Host "Done! Check audit-results.txt"
