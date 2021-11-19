#!/bin/bash
docker-compose up -d --build
docker-compose run back migrate
docker-compose run back loaddata
docker-compose run back collectstatic
