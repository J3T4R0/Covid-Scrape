#!/usr/bin/env bash

./gradlew clean build
docker build -f Docker/Dockerfile --no-cache -t J3T4R0/storefront-accounts:latest .
docker push J3T4R0/storefront-accounts:latest

# docker run --name storefront-accounts -d J3T4R0/storefront-accounts:latest