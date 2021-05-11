# Udacity Blockchain Capstone

This is the capstone project for the Udacity Blockchain Nano Degree. In this project we build a decentralized housing product.

### Prerequisites

Install `npm install -g truffle`

```
Truffle v5.3.2 (core: 5.3.2)
Solidity v0.5.16 (solc-js)
Node v15.13.0
Web3.js v1.3.5
```

### Installing Dependencies

```
npm install
```

### Development

```
truffle compile
truffle migrate
truffle test
```

### Generate verifier.sol

- Execute this command in the terminal`docker run -v <path to your project>:/home/zokrates/code -ti zokrates/zokrates /bin/bash`
- Compile program `zokrates compile -i square.code`
- Generate trusted setup `zokrates setup`
- Compute witness `zokrates compute-witness -a 3 9`
- Generate proof `zokrates generate-proof`
- Export verifier `zokrates export-verifier`
- Copy `verifier.sol` to `./eth-contracts/contracts`
- Rename `verifier.sol` to `Verifier.sol`

### Contracts in Rinkeby

- [Verifier](https://rinkeby.etherscan.io/address/0xAc5330563e5de39b8cf75d6d05456bC03952fE1f)
- [SolnSquareVerifier](https://rinkeby.etherscan.io/address/0x6e377a1c73ebb888d6d0d7ac07d7580d98010a9f)

### Mint Tokens

```
$ cd eth-contracts
$ node mint-tokens.js
Minted Token 0 with Tx Hash : 0x1a9631252c0472813b1787053d2e9ca57dbe597fe0e6009c598574553e209ac7
Minted Token 1 with Tx Hash : 0x4abb0b7b03f8e8a49eb5deef0855e05de2f8d3d20709f20677960a11f6362d7e
Minted Token 2 with Tx Hash : 0xc0a407898f0bf136c5a9397b09179f200c4e55a2ddaf89a6f7fa6d6e58586d3c
Minted Token 3 with Tx Hash : 0x4d6261ea26fd72e8c4918da849ff3e56edd3c06414f3a76e992609d76ec7574f
Minted Token 4 with Tx Hash : 0xe9dabe082fff0bbed2de893d324f2e3356a98d4b9e6393aa906739764e13b0b1
Minted Token 5 with Tx Hash : 0xccc73f202513e188e9d79fc06619a9be50422a3bc456ecd6f772698f20bdcab7
Minted Token 6 with Tx Hash : 0x87ec5971012e0c34077ed64ee65c8d3f6e393ed685fd283dbbf5c2225760229b
Minted Token 7 with Tx Hash : 0x5960678f6a8d6f616ac72b68c3ca39faa0ee6e7a58ab3ab4cb75a3df7ea2e4ae
Minted Token 8 with Tx Hash : 0xe1fb4c42fcb57902d8f2551834bfc0a3a8b59a1a10ab0c62284b229000f75b75
Minted Token 9 with Tx Hash : 0x2c1480dfe73b54a6920ac90ceaf06837935a2800fe45bf555ebb36e87b7f0878
```

### Opensea.io

- [Profile](https://testnets.opensea.io/accounts/0x2256df7fd6a6da2e222bd9bbf3344ff8dd97eb8b)
- [Publish/Buy 1](https://testnets.opensea.io/assets/0x6e377a1c73ebb888d6d0d7ac07d7580d98010a9f/5)
- [Publish/Buy 2](https://testnets.opensea.io/assets/0x6e377a1c73ebb888d6d0d7ac07d7580d98010a9f/0)
- [Publish/Buy 3](https://testnets.opensea.io/assets/0x6e377a1c73ebb888d6d0d7ac07d7580d98010a9f/1)
- [Publish/Buy 4](https://testnets.opensea.io/assets/0x6e377a1c73ebb888d6d0d7ac07d7580d98010a9f/2)
- [Publish/Buy 5](https://testnets.opensea.io/assets/0x6e377a1c73ebb888d6d0d7ac07d7580d98010a9f/3)

### Project Resources

- [Remix - Solidity IDE](https://remix.ethereum.org/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Truffle Framework](https://truffleframework.com/)
- [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
- [Open Zeppelin ](https://openzeppelin.org/)
- [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
- [Docker](https://docs.docker.com/install/)
- [ZoKrates](https://github.com/Zokrates/ZoKrates)
