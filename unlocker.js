const grpc = require('grpc');
const fs = require('fs');

// Due to updated ECDSA generated tls.cert we need to let gprc know that
// we need to use that cipher suite otherwise there will be a handhsake
// error when we communicate with the lnd rpc server.
process.env.GRPC_SSL_CIPHER_SUITES = 'HIGH+ECDSA';

const lndCert = fs.readFileSync(process.env.TLS_CERT);
const pwd = fs.readFileSync(process.env.UNLOCK_TEXT);
const credentials = grpc.credentials.createSsl(lndCert);
const lnrpcDescriptor = grpc.load('/app/rpc.proto');
const unlocker = new lnrpcDescriptor.lnrpc.WalletUnlocker(process.env.HOST_PORT, credentials);

unlocker.unlockWallet({ wallet_password: pwd }, function (err, response) {
    if (err) {
		console.error(JSON.stringify(err));
    } else {
        console.log(JSON.stringify(response));
    }
});
