@echo off
echo Building Android AAB...
call npx expo prebuild --clean
cd android
call gradlew.bat assembleRelease
echo Build complete! Check android\app\build\outputs\bundle\release\
pause
