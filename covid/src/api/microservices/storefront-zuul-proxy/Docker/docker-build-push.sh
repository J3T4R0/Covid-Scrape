#!/usr/bin/env bash

./gradlew clean build
docker build -f Docker/Dockerfile --no-cache -t J3T4R0/storefront-zuul:latest .
docker push J3T4R0/storefront-zuul:latest

# docker run --name storefront-zuul -d J3T4R0/storefront-zuul:latest