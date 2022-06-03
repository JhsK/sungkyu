#!/usr/bin/env bash
echo "> FE 배포"

sudo rm -rf node_modules
sudo npm imstall
sudo npx pm2 reload all