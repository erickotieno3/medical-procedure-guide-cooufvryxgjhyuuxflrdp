# ============================================================
# activateAffiliate.ps1
# Run this script when you receive your Medisave affiliate ID
# Usage: .\scripts\activateAffiliate.ps1 -AffiliateId "YOUR_ID"
# ============================================================

param(
    [Parameter(Mandatory=$true)]
    [string]$AffiliateId
)

$envFile = ".env"
$configFile = "config\medisaveConfig.ts"

Write-Host "Activating Medisave affiliate ID: $AffiliateId" -ForegroundColor Cyan

# Update or create .env file
$envContent = ""
if (Test-Path $envFile) {
    $envContent = Get-Content $envFile -Raw
    if ($envContent -match "EXPO_PUBLIC_MEDISAVE_AFFILIATE_ID=") {
        $envContent = $envContent -replace "EXPO_PUBLIC_MEDISAVE_AFFILIATE_ID=.*", "EXPO_PUBLIC_MEDISAVE_AFFILIATE_ID=$AffiliateId"
    } else {
        $envContent += "`nEXPO_PUBLIC_MEDISAVE_AFFILIATE_ID=$AffiliateId"
    }
} else {
    $envContent = "EXPO_PUBLIC_MEDISAVE_AFFILIATE_ID=$AffiliateId`nEXPO_PUBLIC_MEDISAVE_ENABLED=true"
}
$envContent | Out-File -FilePath $envFile -Encoding utf8
Write-Host "Updated .env with affiliate ID" -ForegroundColor Green

# Update eas.json with env var for production builds
$easJson = Get-Content "eas.json" -Raw | ConvertFrom-Json
if (-not $easJson.build.production.env) {
    $easJson.build.production | Add-Member -MemberType NoteProperty -Name "env" -Value @{
        EXPO_PUBLIC_MEDISAVE_AFFILIATE_ID = $AffiliateId
    }
} else {
    $easJson.build.production.env.EXPO_PUBLIC_MEDISAVE_AFFILIATE_ID = $AffiliateId
}
$easJson | ConvertTo-Json -Depth 10 | Out-File "eas.json" -Encoding utf8
Write-Host "Updated eas.json with affiliate env var" -ForegroundColor Green

Write-Host ""
Write-Host "=== AFFILIATE ACTIVATED SUCCESSFULLY ===" -ForegroundColor Green
Write-Host "Affiliate ID: $AffiliateId" -ForegroundColor Yellow
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Run: npx expo start  (to test locally)"
Write-Host "2. Run: eas build --platform android --profile production"
Write-Host "3. Submit updated build to Play Store"
