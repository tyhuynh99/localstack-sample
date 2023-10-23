#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { LocalstackSampleStack } from '../lib/app-stack';

const app = new cdk.App();
new LocalstackSampleStack(app, 'LocalstackSampleStack', {

});