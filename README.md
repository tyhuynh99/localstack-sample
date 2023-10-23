# Welcome to sample CDK TypeScript project

This is a project for CDK development with TypeScript. This project is will be used for practicing CDK locally
deployment by using LocalStack.

**LocalStack** is a cloud service emulator that runs in a single container on your laptop or in your CI environment.
With LocalStack, you can run your AWS applications or Lambdas entirely on your local machine without connecting to a
remote cloud provider!

|                | Version |
|----------------|---------|
| aws-cli-local  | 2.13.13 |
| localstack-cli | 2.3.2   |
| cdk-local      | 2.102.0 |

## Install aws-cli-local
You can install `aws` by using the following command if it’s not already installed.

````
pip3 install awscli-local
````

## Start LocalStack
You can start LocalStack with Docker Compose by using a `docker-localstack.yml` configuration file.

You can compose docker file by running following command
````
npm run start-localstack
````

## Install cdk-local

The `cdklocal` command line is published as an npm library

````
npm install -g aws-cdk-local aws-cdk
````

## Deploy CDK

Run the following command to deploy cdk after starting LocalStack

````
npm run deploy-cdk
````
