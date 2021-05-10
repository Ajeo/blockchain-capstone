var ERC721MintableComplete = artifacts.require("PupiPropertyERC721Token");

contract("TestERC721Mintable", (accounts) => {
  const name = "PUPI Property";
  const symbol = "PPPT";

  describe("match erc721 spec", () => {
    beforeEach(async () => {
      this.contract = await ERC721MintableComplete.new(name, symbol, {
        from: accounts[0],
      });

      // TODO: mint multiple tokens
      await this.contract.mint(accounts[0], 1986, { from: accounts[0] });
      await this.contract.mint(accounts[0], 1996, { from: accounts[0] });
      await this.contract.mint(accounts[0], 2006, { from: accounts[0] });
      await this.contract.mint(accounts[1], 2016, { from: accounts[0] });
      await this.contract.mint(accounts[1], 2026, { from: accounts[0] });
    });

    it("should return total supply", async () => {
      const totalSupply = await this.contract.totalSupply.call();

      assert.equal(totalSupply.toNumber(), 5);
    });

    it("should get token balance", async () => {
      const balance1 = await this.contract.balanceOf.call(accounts[0]);
      const balance2 = await this.contract.balanceOf.call(accounts[1]);

      assert.equal(balance1.toNumber(), 3);
      assert.equal(balance2.toNumber(), 2);
    });

    // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
    it("should return token uri", async () => {
      const tokenUri = await this.contract.tokenURI.call(1986);
      const expectedUri = `https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1986`;

      assert.equal(tokenUri, expectedUri);
    });

    it("should transfer token from one owner to another", async () => {
      await this.contract.transferFrom(accounts[0], accounts[1], 2006, {
        from: accounts[0],
      });

      const newOwner = await this.contract.ownerOf.call(2006);
      assert.equal(newOwner, accounts[1]);
    });
  });

  describe("have ownership properties", () => {
    beforeEach(async () => {
      this.contract = await ERC721MintableComplete.new(name, symbol, {
        from: accounts[0],
      });
    });

    it("should fail when minting when address is not contract owner", async () => {
      let error;
      try {
        await this.contract.mint(accounts[0], 2036, { from: accounts[1] });
      } catch (err) {
        error = err;
      }
      assert.notEqual(error, null, "Only the owner can call this");
    });

    it("should return contract owner", async () => {
      const contractOwner = await this.contract.getOwner.call();
      assert.equal(contractOwner, accounts[0]);
    });
  });
});
