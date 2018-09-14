#!/bin/bash

docker build -t guggero/lnd-unlocker -f Dockerfile .

docker build -t guggero/lnd-unlocker:with-lnd -f Dockerfile-with-lnd .


docker push guggero/lnd-unlocker
docker push guggero/lnd-unlocker:with-lnd
