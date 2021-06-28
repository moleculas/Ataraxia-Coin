const { assert } = require("chai");

const AtaraxiaToken = artifacts.require('AtaraxiaToken')

contract('AtaraxiaToken', (accounts) => {
    it('establece el suministro total en el momento del despliegue', () => {
        return AtaraxiaToken.deployed().then((instance) => {
            tokenInstance = instance;
            return tokenInstance.totalSupply();
        }).then((totalSupply) => {
            assert.equal(totalSupply.toNumber(), 1000000, 'establece la cantidad total a 1000000')
        });
    });
})