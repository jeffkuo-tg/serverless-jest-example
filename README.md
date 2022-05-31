<!--
title: AWS Simple HTTP Endpoint example in NodeJS
description: This example demonstrates how to setup a simple HTTP GET endpoint. Once you ping it, it will reply with the current time.
layout: Doc
-->
# Simple HTTP Endpoint Example + Jest tests

This example is based on the [Simple HTTP Endpoint](https://github.com/serverless/examples/tree/master/aws-node-simple-http-endpoint)
example, and adds Jest unit tests to it.

## Invoke the function locally

```bash
$ sls invoke local -f localGreeting
{
    "statusCode": 200,
    "body": "{\"message\":\"Hello!\"}"
}
```

## Run the tests

Run the tests via `npm`:

```bash
$ npm test
```
