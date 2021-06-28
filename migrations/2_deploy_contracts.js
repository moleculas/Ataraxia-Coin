const AtaraxiaToken = artifacts.require("AtaraxiaToken");
const AtaraxiaTokenVenta = artifacts.require("AtaraxiaTokenVenta");

module.exports = function (deployer) {
  deployer.deploy(AtaraxiaToken, 1000000).then(function() {
    // el precio del Token es 0.001 Ether
    var tokenPrice = 1000000000000000;
    return deployer.deploy(AtaraxiaTokenVenta, AtaraxiaToken.address, tokenPrice);
  });
};
