#!/usr/bin/env bash
echo "> FE 배포"
cd /home/ubuntu/front
ls
pwd
sudo rm -rf node_modules
sudo npm install
sudo npx pm2 reload all