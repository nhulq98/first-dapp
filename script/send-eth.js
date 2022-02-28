//Import module scope
const { ethers } = require("ethers");

// Get provider with metamask
const provider = new ethers.providers.Web3Provider(window.ethereum);
const singer = provider.getSigner();
const walletAddress = singer.getAddress();

// scope for Global variable
const tranferEth = document.getElementById('tranferEth');
tranferEth.addEventListener('click', () => {
    //alert("click tranfer");
    const receiverAdress = document.getElementById("receiver").value;
    const amount = document.getElementById("amount").value;
    sendEth(receiverAdress, amount);
});
    


/**
 * 
 * @param {*} receiverAddress 
 * @param {*} amount 
 */
async function sendEth(receiverAddress, amount) {
    const gasPrice = provider.getGasPrice();
    
    const sendObject = {
        from: walletAddress,
        to: receiverAddress,
        value: ethers.utils.parseUnits(amount, "ether"),
        gasPrice: gasPrice,
        gasLimit: ethers.utils.hexlify(100000), //100 gwei
        nonce: provider.getTransactionCount(walletAddress, 'latest')
    }

    const transaction = await singer.sendTransaction(sendObject);

    console.log(transaction);
}