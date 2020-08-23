.PHONY: run
build: 
	docker-compose up --build

.PHONY: dev
build:
	docker-compose -f docker-compose.yml -f docker-compose-dev.yml up --build

.DEFAULT_GOAL := run
