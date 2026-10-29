@echo off
echo === Building Zenakhe Digital Solutions ===
call npx ng build --configuration production

echo === Copying TouchBase Foundation into dist ===
mkdir dist\zenakhe-webApp\touchbase\css 2>nul
mkdir dist\zenakhe-webApp\touchbase\js 2>nul
copy /Y TouchBaseWebsite\index.html dist\zenakhe-webApp\touchbase\
copy /Y TouchBaseWebsite\css\style.css dist\zenakhe-webApp\touchbase\css\
copy /Y TouchBaseWebsite\js\main.js dist\zenakhe-webApp\touchbase\js\

echo === Build complete ===
echo Serve locally: npx serve dist/zenakhe-webApp
echo Zenakhe:    http://localhost:3000
echo TouchBase:  http://localhost:3000/touchbase/
