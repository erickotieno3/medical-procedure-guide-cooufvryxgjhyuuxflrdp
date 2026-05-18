# ================================================
# play-console-check.ps1
# ================================================

$projectPath = "C:\Windows.old\users\hyrise crown\Documents\hyrisecrown\medical-procedure-guide-cooufvryxgjhyuuxflrdp"
Set-Location $projectPath

$results = @()

function Write-Status {
    param([string]$Label, [string]$Status, [string]$Note = "")
    $color  = switch ($Status) { "OK" { "Green" } "CREATED" { "Yellow" } default { "Red" } }
    $symbol = switch ($Status) { "OK" { "[OK]     " } "CREATED" { "[CREATED]" } default { "[MISSING]" } }
    Write-Host "$symbol $Label $Note" -ForegroundColor $color
    return [PSCustomObject]@{ Item = $Label; Status = $Status; Note = $Note }
}

function Ensure-Json {
    param([string]$FileName, [string]$Content)
    $existed = Test-Path $FileName
    if (-not $existed) {
        [System.IO.File]::WriteAllText(
            (Join-Path $projectPath $FileName),
            $Content,
            [System.Text.Encoding]::UTF8
        )
    }
    $status = if ($existed) { "OK" } else { "CREATED" }
    $note   = if ($existed) { "" }   else { "(template generated)" }
    return Write-Status $FileName $status $note
}

Write-Host ""
Write-Host "================================================" -ForegroundColor Cyan
Write-Host "  PLAY CONSOLE CHECKLIST" -ForegroundColor Cyan
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""

# 1. Privacy Policy
$existed = Test-Path "privacy-policy.html"
$status  = if ($existed) { "OK" } else { "MISSING" }
$note    = if ($existed) { "" }   else { "(add manually - needs hosted URL)" }
$results += Write-Status "privacy-policy.html" $status $note

# 2. Data Safety CSV
$ds = Get-ChildItem "*data_safety*" -File -ErrorAction SilentlyContinue |
      Sort-Object LastWriteTime -Descending | Select-Object -First 1
if ($ds) {
    $results += Write-Status $ds.Name "OK" ""
} else {
    $results += Write-Status "data_safety CSV" "MISSING" "(upload manually in Play Console)"
}

# 3. Content Rating
$results += Ensure-Json "content-rating.json" '{
  "questionnaireCompleted": true,
  "ratingSystem": "IARC",
  "rating": "18+",
  "violence": "None",
  "sexualContent": "None",
  "language": "Mild"
}'

# 4. Target Audience
$results += Ensure-Json "target-audience.json" '{
  "targetAgeGroup": "18+",
  "primaryAudience": "Adults",
  "childDirected": false
}'

# 5. Ads Declaration
$results += Ensure-Json "ads-declaration.json" '{
  "containsAds": true,
  "adTypes": ["banner", "interstitial"],
  "adProviders": ["Google AdMob"]
}'

# 6. Store Listing
$results += Ensure-Json "store-listing.json" '{
  "appName": "Medical Procedure Guide",
  "shortDescription": "Step-by-step medical procedure reference guide.",
  "fullDescription": "Medical Procedure Guide provides healthcare professionals with structured instructions, safety notes, and references for common procedures.",
  "language": "en-US",
  "screenshots": ["screenshot1.png", "screenshot2.png"],
  "icon": "app-icon.png"
}'

# 7. App Category
$results += Ensure-Json "app-category.json" '{
  "category": "Medical",
  "type": "Application"
}'

# 8. Google Play Key
$existed = Test-Path "google-play-key.json"
$status  = if ($existed) { "OK" } else { "MISSING" }
$note    = if ($existed) { "" }   else { "(copy service account JSON from Downloads)" }
$results += Write-Status "google-play-key.json" $status $note

# 9. EAS Config
$existed = Test-Path "eas.json"
$status  = if ($existed) { "OK" } else { "MISSING" }
$results += Write-Status "eas.json" $status ""

# 10. App JSON version
if (Test-Path "app.json") {
    $appJson = Get-Content "app.json" -Raw | ConvertFrom-Json
    $ver     = $appJson.expo.version
    $code    = $appJson.expo.android.versionCode
    $results += Write-Status "app.json" "OK" "(v$ver / code $code)"
} else {
    $results += Write-Status "app.json" "MISSING" ""
}

# 11. Changelogs directory
$changelogDir = "fastlane\metadata\android\en-US\changelogs"
if (Test-Path $changelogDir) {
    $logCount = (Get-ChildItem $changelogDir).Count
    $results += Write-Status $changelogDir "OK" "($logCount changelog(s) found)"
} else {
    New-Item -ItemType Directory -Force -Path $changelogDir | Out-Null
    $results += Write-Status $changelogDir "CREATED" "(directory created)"
}

# ------------------------------------------------
# SUMMARY TABLE
# ------------------------------------------------
Write-Host ""
Write-Host "================================================" -ForegroundColor Cyan
Write-Host "  SUMMARY" -ForegroundColor Cyan
Write-Host "================================================" -ForegroundColor Cyan

$ok      = $results | Where-Object { $_.Status -eq "OK" }
$created = $results | Where-Object { $_.Status -eq "CREATED" }
$missing = $results | Where-Object { $_.Status -eq "MISSING" }

Write-Host ""
Write-Host "READY ($($ok.Count)):" -ForegroundColor Green
$ok | ForEach-Object { Write-Host "  [OK]      $($_.Item) $($_.Note)" -ForegroundColor Green }

if ($created.Count -gt 0) {
    Write-Host ""
    Write-Host "AUTO-GENERATED ($($created.Count)):" -ForegroundColor Yellow
    $created | ForEach-Object { Write-Host "  [CREATED] $($_.Item) $($_.Note)" -ForegroundColor Yellow }
}

if ($missing.Count -gt 0) {
    Write-Host ""
    Write-Host "NEEDS MANUAL ACTION ($($missing.Count)):" -ForegroundColor Red
    $missing | ForEach-Object { Write-Host "  [MISSING] $($_.Item) $($_.Note)" -ForegroundColor Red }
}

Write-Host ""
Write-Host "Total: $($results.Count) checked | OK: $($ok.Count) | Created: $($created.Count) | Missing: $($missing.Count)" -ForegroundColor Cyan
Write-Host "================================================" -ForegroundColor Cyan

$open = Read-Host "`nOpen Play Console in Edge? (y/n)"
if ($open -eq "y") {
    Start-Process "msedge.exe" "https://play.google.com/console/developers"
}
