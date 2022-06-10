#!/usr/bin/env bash
echo "> FE 배포"
ls
pwd
cd /home/ubuntu/front
sudo npx pm2 reload all