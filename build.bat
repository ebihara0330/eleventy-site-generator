@echo off
cd %~dp0
REM ********************************************************************************************
REM  静的サイトのビルド処理
REM ********************************************************************************************

REM 以前のビルド結果を削除（今回のビルド結果と混ざる可能性あり）
if exist dist rmdir /s /q dist

REM srcとdataを照合して結果をbuildディレクトリに出力
node copyTemplates.js

REM 整形が完了してからビルド処理を実行
start /wait /B cmd.exe /C "npx eleventy"

REM 中間ディレクトリ（build）を削除
REM .gitignoreにbuildを含めるとbuildディレクトリがビルド対象外になるようなので
@REM gitの管理対象に含まれないようビルド後に削除する
if exist build rmdir /s /q build
