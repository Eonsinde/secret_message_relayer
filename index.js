const Web3 = require("web3");
const { Transaction:EthereumTransaction } = require("ethereumjs-tx");

// create web3 instance
const web3 = new Web3("http://127.0.0.1:8545");


// create addresses
const sendingAddr = "0x1D3de98C3271B9F7239b6Cea3336155cf836759D";
const receivingAddr = "0xede108843112a2C8EB32A415A7707B126ebfe703";
 

// check the balance for each address
web3.eth.getBalance(sendingAddr).then(console.log);
web3.eth.getBalance(receivingAddr).then(console.log);


// create a new transaction
const rawTransaction = {
    nonce: 0,
    to: receivingAddr,
    gasPrice: 2000000,
    gasLimit: 30000,
    value: 1,
    data: ""
}


// sign the transaction with the private key of the sender
const senderPrivateKey = "2322883137f9758c46a505fff635398f7087795a7f87b917ba87c788456aea8d";
// const senderPrivateKeyHex = new Buffer(senderPrivateKey, 'hex');
const senderPrivateKeyHex = Buffer.from(
    senderPrivateKey,
    'hex'
);
console.log("senderPrivateKeyHex: ", senderPrivateKeyHex);
const transaction = new EthereumTransaction(rawTransaction);
// transaction.sign(senderPrivateKey);


// // send the transaction to the network
// const serializedTransaction = transaction.serialize();
// web3.eth.sendSignedTransaction(serializedTransaction);