@echo off

cd %~dp0

if exist dist rmdir /s /q dist

node copyTemplates.js

start /wait /B cmd.exe /C "npx eleventy"

if exist build rmdir /s /q build
