# Subscriber Service

The subscriber service will allow you to build an image called `subscriber_service`. This information and additional environment variables can be found at the file `deploy.env`.

Be sure that [Make](https://en.wikipedia.org/wiki/Makefile) is supported by your terminal.

## 1. Run locally with docker
```
  make build
  make run
```

## 2. See aditional supported commands
```
  make help
```

## Running more than one container

If you want to run more than one container, go to the file `deploy.env` and edit the following attributes:

- CONTAINER_NAME
- HOST_PORT

Those fields need to be unique. After changing these attributes, run again step 1.