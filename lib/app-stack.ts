import * as cdk from 'aws-cdk-lib';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';
import path = require('path');

export class LocalstackSampleStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const sampleQueue = new cdk.aws_sqs.Queue(this, 'sample-queue');

    const sampleFunction = new NodejsFunction(this, 'sample-lambda-function', {
      functionName: 'sample-lambda-function',
      entry: path.join(__dirname, '../src/lambda/handleEvent.ts'),
      runtime: Runtime.NODEJS_18_X,
      memorySize: 512,
      timeout: cdk.Duration.seconds(60),
      handler: 'handler'
    });

    sampleFunction.addEventSourceMapping('event-source-mapping', {
      eventSourceArn: sampleQueue.queueArn,
      batchSize: 5,
      maxBatchingWindow: cdk.Duration.seconds(60)
    });

  }
}
