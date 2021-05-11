const Web3 = require("web3");
const fs = require("fs");
const HDWalletProvider = require("truffle-hdwallet-provider");

const Proof = require("../zokrates/code/square/proof.json");

const SolnSquareVerifier = "0x6e377a1c73ebb888d6d0d7ac07d7580d98010a9f";
const contractOwner = "0x2256DF7fd6a6da2E222Bd9BBF3344FF8Dd97eb8B";
const SolnSquareInterface = JSON.parse(
  fs.readFileSync("./build/contracts/SolnSquareVerifier.json")
);

const infuraKey = "48342a...";
const mnemonic = fs.readFileSync(".secret").toString().trim();

const NUM_TOKENS = 10;
const provider = new HDWalletProvider(
  mnemonic,
  `https://rinkeby.infura.io/v3/${infuraKey}`
);
const web3 = new Web3(provider);

const main = async () => {
  console.log(SolnSquareInterface);

  const contract = new web3.eth.Contract(
    SolnSquareInterface.abi,
    SolnSquareVerifier,
    {
      from: contractOwner,
    }
  );

  for (let i = 0; i < NUM_TOKENS; i++) {
    const result = await contract.methods
      .mintProperty(
        contractOwner,
        i,
        Proof.proof.a,
        Proof.proof.b,
        Proof.proof.c,
        Proof.inputs
      )
      .send({ from: contractOwner });

    console.log(`Minted Token ${i} with Tx Hash : ${result.transactionHash}`);
  }
};

main().then(console.log).catch(console.error);
