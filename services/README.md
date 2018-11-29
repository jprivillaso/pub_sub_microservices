# Pub-Sub Microservices with nodejs

## 0. Setup
First of all, verify that no application is running at port 5672.

```
  docker rm -f rabbitmq
```

Be sure that docker is installed too. See the [official docs](https://docs.docker.com/install/).

### 1. Create custom network
```
  docker network create meetupnode
```

### 2. Run again the rabbitmq image
```
  docker run -d -p 5672:5672 --network meetupnode --hostname rabbitmq-h1 --name rabbitmq rabbitmq
```

## 1. Publisher service

[Click here](./publisher_service) to see the publisher documentation.

## 2. Subscriber service

[Click here](./subscriber_service) to see the subscriber documentation.