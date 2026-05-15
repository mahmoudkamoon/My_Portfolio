@echo off
echo === Setting up portfolio for deployment ===

REM Create assets/images folder
if not exist "assets\images" mkdir "assets\images"

REM Copy generated images to assets folder
copy "C:\Users\Sshss\.gemini\antigravity\brain\15834071-7f28-4879-b72b-5b77b16c97b2\flower_app_real_1778522239381.png" "assets\images\flower_app.png"
copy "C:\Users\Sshss\.gemini\antigravity\brain\15834071-7f28-4879-b72b-5b77b16c97b2\exam_app_real_1778522383162.png" "assets\images\exam_app.png"
copy "C:\Users\Sshss\.gemini\antigravity\brain\15834071-7f28-4879-b72b-5b77b16c97b2\hungry_app_real_1778522910910.png" "assets\images\hungry_app.png"
copy "C:\Users\Sshss\.gemini\antigravity\brain\15834071-7f28-4879-b72b-5b77b16c97b2\syrian_food_app_mockup_1778524714513.png" "assets\images\karam_app.png"
copy "C:\Users\Sshss\.gemini\antigravity\brain\15834071-7f28-4879-b72b-5b77b16c97b2\novera_app_real_mockup_1778524802901.png" "assets\images\novera_app.png"
copy "C:\Users\Sshss\.gemini\antigravity\brain\15834071-7f28-4879-b72b-5b77b16c97b2\newscloud_app_real_mockup_1778525236474.png" "assets\images\newscloud_app.png"
copy "C:\Users\Sshss\.gemini\antigravity\brain\15834071-7f28-4879-b72b-5b77b16c97b2\chato_app_real_mockup_1778525378192.png" "assets\images\chato_app.png"
copy "C:\Users\Sshss\.gemini\antigravity\brain\15834071-7f28-4879-b72b-5b77b16c97b2\dawenit_app_real_mockup_1778525841616.png" "assets\images\dawenit_app.png"

copy "C:\Users\Sshss\.gemini\antigravity\brain\cc54028f-639f-4754-b5ee-f6dea0cc5121\media__1778832849151.jpg" "assets\images\profile.jpg"

echo === Done! Images copied successfully ===
echo.
echo Now you can deploy your portfolio!
pause
