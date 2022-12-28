import Web3 from "web3";
// create web3 instance
const web3 = new Web3("http://127.0.0.1:7545");
// get transaction count for first addr in ganache local blockchain workspace
web3.eth.getTransactionCount("0x567E2d82718C657BCfb83346Ce2999B334bb4F18").then(console.log);
