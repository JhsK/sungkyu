#!/usr/bin/env bash
REPOSITORY=/home/ubuntu/front
echo "> FE 배포"

sudo rm -rf node_modules
sudo npm install
ls
pwd
sudo npx pm2 reload all