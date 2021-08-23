
YARN ?= $(shell which yarn)

# See https://gist.github.com/prwhite/8168133#comment-1313022
help:		## Show this help.
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'

setup:		## Install all necessary dependencies to run the project
	$(YARN)

run:		## Run the application
	$(YARN) start

setup-run:	## Install dependencies and then run the application
	make setup
	make run

test:		## Run unit tests
	$(YARN) test

lint:		## Run eslint
	$(YARN) lint

build:		## Build the application
	$(YARN) build