# ================================================
# setup-closed-test.ps1 - Setup Closed Testing
# ================================================

$projectPath = "C:\Windows.old\users\hyrise crown\Documents\hyrisecrown\medical-procedure-guide-cooufvryxgjhyuuxflrdp"
cd $projectPath

Write-Host "🔧 Setting up Closed Test (Internal Testers)..." -ForegroundColor Green

Write-Host "`n✅ Add these emails as testers in Play Console:" -ForegroundColor Cyan
Write-Host "   • erickotieno3@yahoo.com" -ForegroundColor Yellow
Write-Host "   • Any other emails you want" -ForegroundColor Yellow

Write-Host "`nSteps in Play Console:" -ForegroundColor Yellow
Write-Host "1. Go to Testing → Closed testing"
Write-Host "2. Create or manage your closed test track"
Write-Host "3. Add the emails above"
Write-Host "4. Upload the latest AAB (or use the one from Production)"
Write-Host "5. Save and activate the track"

Write-Host "`nAfter activation, testers can join via this link (you'll get it in Play Console)" -ForegroundColor Cyan
Write-Host "They can then install the app directly from the Play Store." -ForegroundColor Green