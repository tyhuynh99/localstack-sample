#!/bin/bash#

echo ===================
echo Starting deploy CDK
echo ===================

cdklocal bootstrap

cdklocal deploy

echo =====================
echo Successful deploy CDK
echo =====================