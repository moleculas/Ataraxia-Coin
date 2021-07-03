const AtaraxiaToken = artifacts.require("AtaraxiaToken");
const AtaraxiaTokenVenta = artifacts.require("AtaraxiaTokenVenta");

module.exports = async function (deployer) {
  await deployer.deploy(AtaraxiaToken, 1000000).then(function() {
    // el precio del Token es 0.001 Ether
    const tokenPrice = 1000000000000000;
    return deployer.deploy(AtaraxiaTokenVenta, AtaraxiaToken.address, tokenPrice);
  });
  // transferimos la cantidad total de tokens de admin al contrato
  const ataraxiaToken = await AtaraxiaToken.deployed();
  const ataraxiaTokenVenta = await AtaraxiaTokenVenta.deployed()
  await ataraxiaToken.transfer(ataraxiaTokenVenta.address, 1000000);
};
