#!/bin/bash

help: ## Show this help message
	@echo 'usage: make [target]'
	@echo
	@echo 'targets:'
	@egrep '^(.+)\:\ ##\ (.+)' ${MAKEFILE_LIST} | column -t -c 2 -s ':#'

logs: ## Show all logs
	docker-compose logs
site-bash: ## Entry site bash
	 docker-compose exec site bash

delete-containers: ## Remove all containers
	docker-compose down
