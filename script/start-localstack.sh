#!/bin/bash#

echo ==================================
echo Starting Docker compose LocalStack
echo ==================================

docker compose -f docker-localstack.yml up -d 

echo ==========================================
echo Successful start Docker compose LocalStack
echo ==========================================