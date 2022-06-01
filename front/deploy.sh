#!/usr/bin/env bash
echo "> FE 배포"

git pull
sudo npx pm2 reload all