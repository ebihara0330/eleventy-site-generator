@echo off

cd %~dp0

rem Execute copyTemplates.js
node copyTemplates.js

rem Execute npx eleventy
start /wait /B cmd.exe /C "npx eleventy --quiet"

rem Remove ./build directory and its contents
powershell -Command "Remove-Item -Path '.\build' -Recurse -Force"
