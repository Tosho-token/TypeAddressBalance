
// TOSHO token , last revision december 2021

// format((val / (1000000000)).toFixed(0))
// the [  toFixed(0))  ] value our the decimals in the result
// the [  (1000000000) ]value the decimals of your token

let addressTosho = "0x2414349097185575fe0644c661Eacc1E188F9Bf3";
let abiJson = [{ "constant": true, "inputs": [{ "name": "who", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }];

web3 = new Web3(new Web3.providers.HttpProvider("https://bsc-dataseed.binance.org/"));

const dataAddressTosho = new web3.eth.Contract(abiJson, addressTosho);
const balanceAddressTosho = dataAddressTosho.methods.balanceOf(addressTosho).call();
balanceAddressTosho.then(val => document.getElementById("balanceAddressTosho").innerText = new Intl.NumberFormat("en-EN").format((val /(1000000000)).toFixed(0)));



