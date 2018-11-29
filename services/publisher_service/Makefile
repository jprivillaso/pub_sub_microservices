# loads env variable from file deploy.env
dpl ?= deploy.env
include $(dpl)
export $(shell sed 's/=.*//' $(dpl))

# always latest with no arguments
VERSION=latest

# HELP
# This will output the help for each task
# thanks to https://marmelab.com/blog/2016/02/29/auto-documented-makefile.html
.PHONY: help build push run test

help: ## This help.
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)
	@echo ''
	@echo 'make build # will use $(VERSION) as tag'
	@echo 'make build VERSION=$$(jq -rM '.version' package.json) # will use :latest as tag'

.DEFAULT_GOAL := help

build: ## Build the container
	npm run build
	docker build -t $(IMAGE_NAME) .

push: ## Tag and Push image to AWS registry
	docker tag $(IMAGE_NAME) $(AWS_ACCOUNT_ID).dkr.ecr.$(AWS_REGION_ID).amazonaws.com/$(IMAGE_NAME):$(VERSION)
	docker push $(AWS_ACCOUNT_ID).dkr.ecr.$(AWS_REGION_ID).amazonaws.com/$(IMAGE_NAME):$(VERSION)

run: ## Run single container
	docker run -d -p $(HOST_PORT):$(CONTAINER_PORT) \
	--network $(DEV_NETWORK) \
	-e SUBSCRIBER_SERVER_PORT=$(SUBSCRIBER_SERVER_PORT) \
	--name $(CONTAINER_NAME) \
	$(IMAGE_NAME):$(VERSION)
	make logs

test: ## Run image tests
	npm run test

logs: ## Tail -f the container logs
	docker logs -f $(CONTAINER_NAME)

rm: ## Remove container
	docker rm -f $(CONTAINER_NAME)