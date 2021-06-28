const AtaraxiaToken = artifacts.require("AtaraxiaToken");

module.exports = function (deployer) {
  deployer.deploy(AtaraxiaToken);
};
