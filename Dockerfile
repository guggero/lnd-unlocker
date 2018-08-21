FROM mhart/alpine-node:8.11

RUN mkdir /app
WORKDIR /app

ENV HOME /app
ENV TLS_CERT /app/tls.cert
ENV UNLOCK_TEXT /app/unlock.txt
ENV HOST_PORT "localhost:10009"

ADD package.json ${HOME}/package.json
ADD yarn.lock ${HOME}/yarn.lock
RUN yarn install

ADD unlocker.js ${HOME}/unlocker.js
ADD rpc.proto ${HOME}/rpc.proto

ENTRYPOINT ["yarn"]
