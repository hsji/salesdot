echo off
echo ----------------------------------------
echo              UbiService.bat
echo ----------------------------------------
echo.
set JAVA_DIR="D:\SALESDOT\jdk\jdk1.8.0_181"
set UBISERVICE_DIR=D:/SALESDOT/workspace/unisales/src/main/webapp/UbiService
set PROPERTY_DIR=%UBISERVICE_DIR%
set FONT_DIR=%UBISERVICE_DIR%\fonts\
set XMS=512M
set XMX=1024M
set CLASSPATH=%UBISERVICE_DIR%\lib\UbiServer.jar

REM For Redbc
REM set CLASSPATH=%UBISERVICE_DIR%\lib\UbiServer.jar;%UBISERVICE_DIR%\lib\EzIssuerJava.jar

REM For Voiceye
REM set CLASSPATH=%UBISERVICE_DIR%\lib\UbiServer.jar;%UBISERVICE_DIR%\lib\VERVMakerJNI.jar
REM set CLASSPATH=%UBISERVICE_DIR%\lib\UbiServer.jar;%UBISERVICE_DIR%\lib\VERVMakerJNI64.jar


echo.
echo [Directory Information]
echo - Java : %JAVA_DIR%
echo - UbiService : %UBISERVICE_DIR%
echo.

echo [Java Information]
%JAVA_DIR%\bin\java -version
echo.

echo [UbiService Start]
%JAVA_DIR%\bin\java -Xms%XMS% -Xmx%XMX% -Dfile.encoding=UTF-8 -Djava.awt.headless=true -Dhttps.protocols=TLSv1.2,TLSv1.1,TLSv1 -Dsun.java2d.fontpath=%FONT_DIR% -classpath %CLASSPATH%;. com.ubireport.service.UbiService4 %PROPERTY_DIR%
pause>nul
