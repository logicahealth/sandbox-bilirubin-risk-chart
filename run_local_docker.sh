#!/usr/bin/env bash

docker build --build-arg ACTIVE_ENV=prod -t bilirubin-risk-chart/node-web-app .
docker run -p 8086:8086 bilirubin-risk-chart/node-web-app