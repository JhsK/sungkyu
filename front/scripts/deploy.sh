#!/usr/bin/env bash
echo "> FE 배포"

cd /home/ubuntu/front
sudo rm -rf node_modules
sudo npm install
ls
pwd
sudo npx pm2 reload all