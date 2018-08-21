# LND unlocker docker container

A simple docker container that contains a Javascript gRPC client that can unlock
the wallet of a Lightning Network Daemon.

## Run

```bash
docker run \
  --rm \
  -e HOST_PORT=lnd:10009 \
  -v /home/user/password.txt:/app/unlock.txt \
  -v /home/user/.lnd/tls.cert:/app/tls.cert \
  guggero/lnd-unlocker \
  unlock
```

Make sure that password.txt has no newline at the end (for example, create with `echo -n "mypassword" > password.txt`) and that nobody else can read it (`chmod 400 password.txt`).

