# Download docker image

```
  docker pull rabbitmq
```

# Run Rabbitmq

```
  docker run -d -p 5672:5672 --network meetupnode --hostname rabbitmq-h1 --name rabbitmq rabbitmq
  docker run -d -p 5672:5672 --hostname rabbitmq-h1 --name rabbitmq rabbitmq
```

# Run the examples

```
  node receive.js
  node receive.js
  node receive.js
  node send.js
```