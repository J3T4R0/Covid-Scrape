#!/usr/bin/env bash

./gradlew clean build
docker build -f Docker/Dockerfile --no-cache -t J3T4R0/storefront-eureka:latest .
docker push J3T4R0/storefront-eureka:latest

# docker run --name storefront-eureka -d J3T4R0/storefront-eureka:latest