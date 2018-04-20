@echo off
msg * by StdarkPha

:intro
title Script Batch Hosting Github
echo Pilih Opsi Anda (1, 2, 3)
echo 1: download
echo 2: remove
echo 3: upload
set /p pilihan=
if %pilihan% == 1 goto download
if %pilihan% == 2 goto remove
if %pilihan% == 3 goto upload

:download
cls
title Download Github Content
echo Masukkan username github :
set /p user=
cls
echo mengclone github anda : https://github.com/%user%/%user%.github.com
git clone https://github.com/%user%/%user%.github.com
cd %user%.github.com
pause
goto intro

:remove
cls
title Removing All Data From Repository
msg *sudahkah anda backup??
pause
git rm *
git commit -a -m "removing"
echo Menerapkan~
git push origin master
echo sukses
pause
goto intro

:upload
cls
msg *silahkan copy ulang data anda kesini
pause
git add *
git commit -a -m "New Files"
echo Uploading~
git push origin master
echo sukses
pause
goto intro