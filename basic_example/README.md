# Basic Example
The first prerequisite to run this project is to run the `rabbitmq` docker image.

## Run the project locally

### 1. Download image
```
  docker pull rabbitmq
```

### 2. Run Rabbitmq image

```
  docker run -d -p 5672:5672 --hostname rabbitmq-h1 --name rabbitmq rabbitmq
```

### 3. Run the examples locally

Run the receive scripts in different terminal windows.

```
  node receive.js
  node receive.js
  node receive.js
  node send.js
  node send.js
  node send.js
```

You should see that every time you run the send script, one of the receivers will display the message.