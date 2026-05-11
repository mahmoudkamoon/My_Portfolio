@echo off
echo === Setting up portfolio for deployment ===

REM Create assets/images folder
if not exist "assets\images" mkdir "assets\images"

REM Copy generated images to assets folder
copy "C:\Users\Sshss\.gemini\antigravity\brain\15834071-7f28-4879-b72b-5b77b16c97b2\flower_app_real_1778522239381.png" "assets\images\flower_app.png"
copy "C:\Users\Sshss\.gemini\antigravity\brain\15834071-7f28-4879-b72b-5b77b16c97b2\exam_app_real_1778522383162.png" "assets\images\exam_app.png"
copy "C:\Users\Sshss\.gemini\antigravity\brain\15834071-7f28-4879-b72b-5b77b16c97b2\hungry_app_real_1778522910910.png" "assets\images\hungry_app.png"

echo === Done! Images copied successfully ===
echo.
echo Now you can deploy your portfolio!
pause
