#!/usr/bin/env bash
echo "> FE 배포"
cd /home/ubuntu/front
ls
pwd
sudo npx pm2 reload all