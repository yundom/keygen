var crypto = require('crypto');
var prime_length = 128;
var diffHell = crypto.createDiffieHellman(prime_length);
diffHell.generateKeys();
var publicKey = diffHell.getPublicKey('hex');
var privateKey = diffHell.getPrivateKey('hex');

console.log("Public Key : " , publicKey);
console.log("Private Key : " , privateKey);
