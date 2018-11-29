# Pub Sub Microservices with nodejs

A very common approach when using microservices is to use a event-based architecture to enable your application to scale better.

In this repository, I include some resources to show how easy is to jump from a small problem to a microservice approach.

## 1. Basic Example

In the basic example, there are two files:

- send.js
- receive.js

These examples were taken from the official documentation of RabbitMQ.

The `send.js` file will act as a producer and the `receive.js` file will act as a consumer.

[Click here](./basic_example) to see more details.

## 2. Microservice Approach

In the microservices approach, I include a basic folder structure that has a simple architecture including an API layer and a Service layer.

Each of those services include the proper docker configuration to deploy the services.

[Click here](./services) to see more details.