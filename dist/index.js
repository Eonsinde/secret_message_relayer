import Web3 from "web3";
import { Transaction as EthereumTransaction } from "ethereumjs-tx";
// create web3 instance
const web3 = new Web3("http://127.0.0.1:7545");
// create addresses
const sendingAddr = "0x567E2d82718C657BCfb83346Ce2999B334bb4F18";
const receivingAddr = "0x2D48c53798A8Ca22B3a2f5c6283ABcb4ae7622Cd";
// check the balance for each address
web3.eth.getBalance(sendingAddr).then(console.log);
web3.eth.getBalance(receivingAddr).then(console.log);
// create a new transaction
const rawTransaction = {
    nonce: 1,
    to: receivingAddr,
    gasPrice: 2000000,
    gasLimit: 30000,
    value: 100,
    data: "0x0"
};
// sign the transaction with the private key of the sender
const senderPrivateKey = "b05c696d9fbaa0f51950576e8b29e6bd9c15cdc2d15046dee576b8561bb60929";
const senderPrivateKeyHex = Buffer.from(senderPrivateKey, 'hex');
// create EthTX and sign it
const transaction = new EthereumTransaction(rawTransaction);
transaction.sign(senderPrivateKeyHex);
// // send the transaction to the network
const serializedTransaction = transaction.serialize().toString('hex');
web3.eth.sendSignedTransaction(serializedTransaction);
