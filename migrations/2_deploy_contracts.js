const AtaraxiaToken = artifacts.require("AtaraxiaToken");

module.exports = function (deployer) {
  deployer.deploy(AtaraxiaToken, 1000000);
};
