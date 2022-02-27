// import scope
const { ethers } = require("ethers");


// A Web3Provider wraps a standard Web3 provider, which is
// what MetaMask injects as window.ethereum into each page
const provider = new ethers.providers.Web3Provider(window.ethereum);

//const provider = new ethers.providers.JsonRpcProvider('https://xpoubpjbth7p.usemoralis.com:2053/server');

//get element
const connectEthereumBtn = document.querySelector('.enableEthereumButton');
const showAccount = document.querySelector('.showAccount');
const showbalance = document.getElementById('balance');
const showNetworkName = document.getElementById('networkName');
const showChainId = document.getElementById('chainId');

//run action when click ethereumButton
/**
 * event listen user click connectEthereumBtn
 */
 connectEthereumBtn.addEventListener('click', () => {
     alert("connect");
//    let ethAddress = getAddress();
//    showText(ethAddress);
        console.log(provider.getNetwork());

        provider.getNetwork().then(function(result) {
            // here you can use the result of promiseB
            showNetworkName.innerHTML = result.name;
            showChainId.innerHTML = result.chainId;

            console.log("Network name: "+ result.name);
            console.log("Chain ID: "+ result.chainId);
        });
        //const { name }  = await provider.getNetwork().then(result => result.data);

        
        let walletAddress = getAddress2();
        let balance = getBalance(walletAddress);
});

/**
  * Connect with metamask use javascript
 * 
 * @returns String this is ETH wallet address
 */
async function getAddress() {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    let account = accounts[0];

    showText(account)
    //return account;
}

/**
 * DOM text to text element
 * @param {*} text 
 */
async function showText(text){
    showAccount.innerHTML = text;
}

/**
 * Connect with metamask use Ethers.js
 */
async function getAddress2(){
    // // MetaMask requires requesting permission to connect users accounts
    await provider.send("eth_requestAccounts", []);

    // // The MetaMask plugin also allows signing transactions to
    // // send ether and pay to change state within the blockchain.
    // // For this, you need the account signer...
    const signer = provider.getSigner();

    let userAddress = await signer.getAddress();

    showText(userAddress);

    return userAddress;
}

async function getBalance(walletAddress) {
    let balance = await provider.getBalance(walletAddress);
    
    // we use the code below to convert the balance from wei to eth
    let balanceFomater = ethers.utils.formatEther(balance);
    console.log(balanceFomater);
    showbalance.innerHTML = balance;

    return balanceFomater;
}