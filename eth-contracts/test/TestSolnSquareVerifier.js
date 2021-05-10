const SolnSquareVerifier = artifacts.require("SolnSquareVerifier");
const Proof = require("../../zokrates/code/square/proof.json");

contract("TestSolnSquareVerifier", (accounts) => {
  beforeEach(async () => {
    this.contract = await SolnSquareVerifier.new("PUPI Property", "PPPT", {
      from: accounts[0],
    });
  });

  // Test if a new solution can be added for contract - SolnSquareVerifier
  // Test if an ERC721 token can be minted for contract - SolnSquareVerifier
  it("Should mint an ERC721 token and add a new solution", async () => {
    let result;

    try {
      result = await this.contract.mintProperty(
        accounts[1],
        1986,
        Proof.proof.a,
        Proof.proof.b,
        Proof.proof.c,
        Proof.inputs
      );
    } catch (e) {
      console.log(e);
    }

    assert.equal(result.logs[0].event, "Transfer");
    assert.equal(result.logs[1].event, "SolutionAdded");
  });
});
