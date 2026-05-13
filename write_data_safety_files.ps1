$dest = "C:\Windows.old\users\hyrise crown\Documents\hyrisecrown\medical-procedure-guide-cooufvryxgjhyuuxflrdp"

# ─────────────────────────────────────────────
# 1. WRITE DATA SAFETY CSV (v6 - FINAL CORRECT)
# ─────────────────────────────────────────────
$csv = @"
Question ID (machine readable),Response ID (machine readable),Response value,Answer requirement,Human-friendly question label
PSL_DATA_COLLECTION_COLLECTS_PERSONAL_DATA,,true,REQUIRED,Does your app collect or share any of the required user data types?
PSL_DATA_COLLECTION_ENCRYPTED_IN_TRANSIT,,true,MAYBE_REQUIRED,Is all of the user data collected by your app encrypted in transit?
PSL_SUPPORTED_ACCOUNT_CREATION_METHODS,PSL_ACM_OAUTH,true,MULTIPLE_CHOICE,Which of the following methods of account creation does your app support? / OAuth
PSL_HAS_OUTSIDE_APP_ACCOUNTS,,true,OPTIONAL,Can users login to your app with accounts created outside of the app?
PSL_ACCOUNT_DELETION_URL,,https://erickotieno3.github.io/medical-procedure-guide-cooufvryxgjhyuuxflrdp/privacy-policy.html,MAYBE_REQUIRED,Account Deletion Link
PSL_SUPPORT_DATA_DELETION_BY_USER,DATA_DELETION_YES,true,SINGLE_CHOICE,Do you provide a way for users to request that their data is deleted? / Yes
PSL_DATA_DELETION_URL,,https://erickotieno3.github.io/medical-procedure-guide-cooufvryxgjhyuuxflrdp/privacy-policy.html,MAYBE_REQUIRED,Data Deletion Link
PSL_DATA_TYPES_PERSONAL,PSL_NAME,true,MULTIPLE_CHOICE,Personal info / Name
PSL_DATA_TYPES_PERSONAL,PSL_EMAIL,true,MULTIPLE_CHOICE,Personal info / Email address
PSL_DATA_TYPES_APP_PERFORMANCE,PSL_CRASH_LOGS,true,MULTIPLE_CHOICE,App info and performance / Crash logs
PSL_DATA_TYPES_IDENTIFIERS,PSL_DEVICE_ID,true,MULTIPLE_CHOICE,Device or other IDs / Device or other IDs
PSL_DATA_USAGE_RESPONSES:PSL_NAME:PSL_DATA_USAGE_COLLECTION_AND_SHARING,PSL_DATA_USAGE_BOTH_COLLECTED_AND_SHARED,true,MULTIPLE_CHOICE,Data usage and handling (Name) / Both collected and shared
PSL_DATA_USAGE_RESPONSES:PSL_NAME:PSL_DATA_USAGE_EPHEMERAL,,false,MAYBE_REQUIRED,Data usage and handling (Name) / Ephemeral / No
PSL_DATA_USAGE_RESPONSES:PSL_NAME:DATA_USAGE_USER_CONTROL,PSL_DATA_USAGE_USER_CONTROL_REQUIRED,true,SINGLE_CHOICE,Data usage and handling (Name) / Required for app to function
PSL_DATA_USAGE_RESPONSES:PSL_NAME:DATA_USAGE_COLLECTION_PURPOSE,PSL_APP_FUNCTIONALITY,true,MULTIPLE_CHOICE,Data usage and handling (Name) / Collection Purpose / App functionality
PSL_DATA_USAGE_RESPONSES:PSL_NAME:DATA_USAGE_COLLECTION_PURPOSE,PSL_ACCOUNT_MANAGEMENT,true,MULTIPLE_CHOICE,Data usage and handling (Name) / Collection Purpose / Account management
PSL_DATA_USAGE_RESPONSES:PSL_NAME:DATA_USAGE_SHARING_PURPOSE,PSL_APP_FUNCTIONALITY,true,MULTIPLE_CHOICE,Data usage and handling (Name) / Sharing Purpose / App functionality
PSL_DATA_USAGE_RESPONSES:PSL_NAME:DATA_USAGE_SHARING_PURPOSE,PSL_ACCOUNT_MANAGEMENT,true,MULTIPLE_CHOICE,Data usage and handling (Name) / Sharing Purpose / Account management
PSL_DATA_USAGE_RESPONSES:PSL_EMAIL:PSL_DATA_USAGE_COLLECTION_AND_SHARING,PSL_DATA_USAGE_BOTH_COLLECTED_AND_SHARED,true,MULTIPLE_CHOICE,Data usage and handling (Email) / Both collected and shared
PSL_DATA_USAGE_RESPONSES:PSL_EMAIL:PSL_DATA_USAGE_EPHEMERAL,,false,MAYBE_REQUIRED,Data usage and handling (Email) / Ephemeral / No
PSL_DATA_USAGE_RESPONSES:PSL_EMAIL:DATA_USAGE_USER_CONTROL,PSL_DATA_USAGE_USER_CONTROL_REQUIRED,true,SINGLE_CHOICE,Data usage and handling (Email) / Required for app to function
PSL_DATA_USAGE_RESPONSES:PSL_EMAIL:DATA_USAGE_COLLECTION_PURPOSE,PSL_APP_FUNCTIONALITY,true,MULTIPLE_CHOICE,Data usage and handling (Email) / Collection Purpose / App functionality
PSL_DATA_USAGE_RESPONSES:PSL_EMAIL:DATA_USAGE_COLLECTION_PURPOSE,PSL_ACCOUNT_MANAGEMENT,true,MULTIPLE_CHOICE,Data usage and handling (Email) / Collection Purpose / Account management
PSL_DATA_USAGE_RESPONSES:PSL_EMAIL:DATA_USAGE_SHARING_PURPOSE,PSL_APP_FUNCTIONALITY,true,MULTIPLE_CHOICE,Data usage and handling (Email) / Sharing Purpose / App functionality
PSL_DATA_USAGE_RESPONSES:PSL_EMAIL:DATA_USAGE_SHARING_PURPOSE,PSL_ACCOUNT_MANAGEMENT,true,MULTIPLE_CHOICE,Data usage and handling (Email) / Sharing Purpose / Account management
PSL_DATA_USAGE_RESPONSES:PSL_DEVICE_ID:PSL_DATA_USAGE_COLLECTION_AND_SHARING,PSL_DATA_USAGE_BOTH_COLLECTED_AND_SHARED,true,MULTIPLE_CHOICE,Data usage and handling (Device ID) / Both collected and shared
PSL_DATA_USAGE_RESPONSES:PSL_DEVICE_ID:PSL_DATA_USAGE_EPHEMERAL,,false,MAYBE_REQUIRED,Data usage and handling (Device ID) / Ephemeral / No
PSL_DATA_USAGE_RESPONSES:PSL_DEVICE_ID:DATA_USAGE_USER_CONTROL,PSL_DATA_USAGE_USER_CONTROL_REQUIRED,false,SINGLE_CHOICE,Data usage and handling (Device ID) / Optional (not required for core function)
PSL_DATA_USAGE_RESPONSES:PSL_DEVICE_ID:DATA_USAGE_COLLECTION_PURPOSE,PSL_ADVERTISING,true,MULTIPLE_CHOICE,Data usage and handling (Device ID) / Collection Purpose / Advertising or marketing
PSL_DATA_USAGE_RESPONSES:PSL_DEVICE_ID:DATA_USAGE_COLLECTION_PURPOSE,PSL_ANALYTICS,true,MULTIPLE_CHOICE,Data usage and handling (Device ID) / Collection Purpose / Analytics
PSL_DATA_USAGE_RESPONSES:PSL_DEVICE_ID:DATA_USAGE_SHARING_PURPOSE,PSL_ADVERTISING,true,MULTIPLE_CHOICE,Data usage and handling (Device ID) / Sharing Purpose / Advertising or marketing
PSL_DATA_USAGE_RESPONSES:PSL_DEVICE_ID:DATA_USAGE_SHARING_PURPOSE,PSL_ANALYTICS,true,MULTIPLE_CHOICE,Data usage and handling (Device ID) / Sharing Purpose / Analytics
PSL_DATA_USAGE_RESPONSES:PSL_CRASH_LOGS:PSL_DATA_USAGE_COLLECTION_AND_SHARING,PSL_DATA_USAGE_ONLY_COLLECTED,true,MULTIPLE_CHOICE,Data usage and handling (Crash logs) / Collected only
PSL_DATA_USAGE_RESPONSES:PSL_CRASH_LOGS:PSL_DATA_USAGE_EPHEMERAL,,false,MAYBE_REQUIRED,Data usage and handling (Crash logs) / Ephemeral / No
PSL_DATA_USAGE_RESPONSES:PSL_CRASH_LOGS:DATA_USAGE_USER_CONTROL,PSL_DATA_USAGE_USER_CONTROL_REQUIRED,false,SINGLE_CHOICE,Data usage and handling (Crash logs) / Optional
PSL_DATA_USAGE_RESPONSES:PSL_CRASH_LOGS:DATA_USAGE_COLLECTION_PURPOSE,PSL_ANALYTICS,true,MULTIPLE_CHOICE,Data usage and handling (Crash logs) / Collection Purpose / Analytics
"@

$csv | Set-Content -Path "$dest\hyrisecrown_data_safety_FINAL_v6.csv" -Encoding UTF8
Write-Host "✓ CSV written: hyrisecrown_data_safety_FINAL_v6.csv" -ForegroundColor Green

# ─────────────────────────────────────────────
# 2. WRITE PRIVACY POLICY HTML (corrected)
# ─────────────────────────────────────────────
$html = @"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Privacy Policy - Medical Procedure Guide</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px auto; max-width: 800px; line-height: 1.8; color: #333; padding: 0 20px; }
        h1 { color: #1a1a1a; border-bottom: 2px solid #ddd; padding-bottom: 10px; }
        h2 { color: #2c2c2c; margin-top: 30px; }
        a { color: #0066cc; }
        .last-updated { color: #666; font-style: italic; }
        .highlight { background: #f9f9f9; border-left: 4px solid #0066cc; padding: 10px 16px; margin: 16px 0; }
    </style>
</head>
<body>
    <h1>Privacy Policy</h1>
    <p class="last-updated">Last updated: May 13, 2026</p>

    <div class="highlight">
        <strong>Summary:</strong> This app uses Google AdMob (advertising) and OAuth login. We collect Name, Email, Device ID, and Crash Logs. We do not collect personal health data. Data is encrypted in transit.
    </div>

    <h2>1. Information We Collect</h2>
    <p>We collect the following data to operate and improve the app:</p>
    <ul>
        <li><strong>Name</strong> - used for account creation and app functionality</li>
        <li><strong>Email address</strong> - used for account creation and app functionality</li>
        <li><strong>Device or other IDs</strong> - used by Google AdMob for advertising and analytics</li>
        <li><strong>Crash logs</strong> - collected anonymously for app performance analytics</li>
    </ul>
    <p>We do <strong>not</strong> collect personal health information, location data, financial data, or any other sensitive user data.</p>

    <h2>2. How We Use Your Data</h2>
    <ul>
        <li><strong>Name and Email:</strong> For account management and app functionality (OAuth login). Shared with our authentication provider.</li>
        <li><strong>Device ID:</strong> Shared with Google AdMob for advertising and marketing purposes, and with analytics services.</li>
        <li><strong>Crash Logs:</strong> Collected only by us; used solely to diagnose and fix technical issues.</li>
    </ul>

    <h2>3. Third-Party Services</h2>
    <p>This app uses the following third-party services that may collect data independently:</p>
    <ul>
        <li><strong>Google AdMob</strong> - provides in-app advertisements and may collect your Device ID and usage data. See Google's Privacy Policy at https://policies.google.com/privacy</li>
        <li><strong>OAuth Providers</strong> - login is handled via OAuth (e.g., Google). See your provider's privacy policy.</li>
    </ul>

    <h2>4. Affiliate Links</h2>
    <p>This app contains affiliate links. When you click an affiliate link, the partner site may track the referral. We earn a small commission at no extra cost to you. No personal data is shared by us when you click affiliate links.</p>

    <h2>5. Data Security</h2>
    <p>All data collected by this app is <strong>encrypted in transit</strong> using industry-standard TLS/HTTPS protocols.</p>

    <h2>6. Data Deletion and Account Deletion</h2>
    <p>You can request deletion of your account and associated data at any time by:</p>
    <ul>
        <li>Emailing us at erickotieno3@yahoo.com with subject "Delete My Data"</li>
        <li>Uninstalling the app removes locally stored data from your device</li>
    </ul>
    <p>We will process deletion requests within 30 days.</p>

    <h2>7. Children's Privacy</h2>
    <p>This app is not directed at children under 13. We do not knowingly collect data from children.</p>

    <h2>8. Changes to This Policy</h2>
    <p>We may update this Privacy Policy from time to time. Changes will be reflected by updating the "Last updated" date above.</p>

    <h2>9. Contact Us</h2>
    <p>If you have any questions about this Privacy Policy, please contact us at: erickotieno3@yahoo.com</p>
</body>
</html>
"@

$html | Set-Content -Path "$dest\privacy-policy.html" -Encoding UTF8
Write-Host "✓ HTML written: privacy-policy.html" -ForegroundColor Green

# ─────────────────────────────────────────────
# 3. VERIFY BOTH FILES EXIST
# ─────────────────────────────────────────────
Write-Host "`n=== VERIFICATION ===" -ForegroundColor Yellow
Get-ChildItem -Path $dest -File |
    Where-Object { $_.Name -like "*data_safety*" -or $_.Name -like "*privacy*" } |
    Select-Object Name, LastWriteTime, Length |
    Format-Table -AutoSize

Write-Host "Done! Next step: push privacy-policy.html to GitHub Pages." -ForegroundColor Cyan
