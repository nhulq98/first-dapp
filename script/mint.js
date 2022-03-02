// import scope
//const { ethers } = require("ethers");
import { ethers } from "ethers"; // apply ES 6

//const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const walletAddress = signer.getAddress();

// not use ERC-20 standard yet
const eth = {
  address: walletAddress,
  abi: [
    "function gimmeSome() external",
    "function balanceOf(address _owner) public view returns (uint256 balance)",
    "function transfer(address _to, uint256 _value) public returns (bool success)",
  ],
};

/**
 * Create ETH coin
 */
// async function mintEth() {
//   await provider.send("eth_requestAccounts", []);
//   const ethContract = new ethers.Contract(eth.address, eth.abi, signer);

//   const tx = await ethContract.gimmeSome({ gasPrice: 20e9 });
//   console.log(`Transaction hash: ${tx.hash}`);

//   const receipt = await tx.wait();
//   console.log(`Transaction confirmed in block ${receipt.blockNumber}`);
//   console.log(`Gas used: ${receipt.gasUsed.toString()}`);
// }

const mint = document.querySelector('.mint');

mint.addEventListener('click', ()=>{

  alert("mint clock");

  //mintEth();
});