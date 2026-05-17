# ================================================
# publish-and-test.ps1 - FINAL CLEAN VERSION
# ================================================

$projectPath = "C:\Windows.old\users\hyrise crown\Documents\hyrisecrown\medical-procedure-guide-cooufvryxgjhyuuxflrdp"
cd $projectPath

Write-Host "🚀 Starting Post-Approval Automation..." -ForegroundColor Green

# 1. Bump Version
$appJson = Get-Content "app.json" -Raw | ConvertFrom-Json
$currentVersion = $appJson.expo.version
$versionParts = $currentVersion.Split('.')
$versionParts[2] = [int]$versionParts[2] + 1
$appJson.expo.version = $versionParts -join '.'
$appJson.expo.android.versionCode += 1

$appJson | ConvertTo-Json -Depth 10 | Out-File "app.json" -Encoding utf8

Write-Host "✅ Version bumped to $($appJson.expo.version) (Code: $($appJson.expo.android.versionCode))" -ForegroundColor Cyan

# 2. Build & Auto-Submit
$env:EAS_NO_VCS = 1
$env:EAS_BUILD_NO_EXPO_GO_WARNING = "true"

Write-Host "📦 Building and submitting to Production..." -ForegroundColor Yellow
eas build --platform android --profile production --auto-submit

Write-Host "`n🎉 Build submitted! Check progress here:" -ForegroundColor Green
Write-Host "https://expo.dev/accounts/erickfotieno/projects/medical-procedure-guide-cooufvryxgjhyuuxflrdp/builds" -ForegroundColor Cyan
