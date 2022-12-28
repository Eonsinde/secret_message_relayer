import Web3 from "web3";

console.log(Web3.givenProvider)
// create web3 instance
const web3: Web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:7545");

// set default account
web3.eth.defaultAccount = "0x567E2d82718C657BCfb83346Ce2999B334bb4F18";

// get contract address
const remixContract: any = new web3.eth.Contract([
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "value",
                    "type": "string"
                }
            ],
            "name": "setMessage",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getMessage",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
    , "0xf5b5B3E8679a08a747887FF54440506bE2C643e1");



// get contract abi 
const myMessage: any = ""

console.log(myMessage); 
console.log("Contract:", remixContract); 
console.log("Default Account on Contract:", remixContract.defaultAccount); 