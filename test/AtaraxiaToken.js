const { assert } = require("chai");

const AtaraxiaToken = artifacts.require('AtaraxiaToken')

contract('AtaraxiaToken', (accounts) => {
    let tokenInstace;
    it('inicializa el contrato con los valores correctos', () => {
        return AtaraxiaToken.deployed().then((instance) => {
            tokenInstance = instance;
            return tokenInstance.name();
        }).then((name) => {
            assert.equal(name, 'Ataraxia Token', 'el nombre es correcto');
            return tokenInstance.symbol();
        }).then((symbol) => {
            assert.equal(symbol, 'ATR', 'el símbolo es correcto');
            return tokenInstance.standard();
        }).then((standard) => {
            assert.equal(standard, 'Ataraxia Token v1.0', 'el standard es correcto');
        });
    });
    it('asigna la cantidad inicial en el momento del despliegue', () => {
        return AtaraxiaToken.deployed().then((instance) => {
            tokenInstance = instance;
            return tokenInstance.totalSupply();
        }).then((totalSupply) => {
            assert.equal(totalSupply.toNumber(), 1000000, 'establece la cantidad total a 1000000');
            return tokenInstance.balanceOf(accounts[0]);
        }).then((adminBalance) => {
            assert.equal(adminBalance.toNumber(), 1000000, 'asigna la cantidad inicial a la cuenta del admin');
        });
    });
    it('transferir la propiedad del token', () => {
        return AtaraxiaToken.deployed().then((instance) => {
            tokenInstance = instance;
            //Prueba primero la declaración `require` transfiriendo algo más grande que el saldo del remitente
            return tokenInstance.transfer.call(accounts[1], 99999999999999999999999);
        }).then(assert.fail).catch((error) => {
            assert(error.message, 'el error message debe contener revert');
            return tokenInstance.transfer.call(accounts[1], 250000, { from: accounts[0] })
        }).then((success)=> {
            assert.equal(success, true, 'retorna true');            
            return tokenInstance.transfer(accounts[1], 250000, { from: accounts[0] });
        }).then((receipt) => {
            assert.equal(receipt.logs.length, 1, 'dispara evento');
            assert.equal(receipt.logs[0].event, 'Transfer', 'debe ser el "Transfer" evento');
            assert.equal(receipt.logs[0].args._from, accounts[0], 'registra la cuenta desde la que se transfieren los tokens');
            assert.equal(receipt.logs[0].args._to, accounts[1], 'registra la cuenta a la que se transfieren los tokens');
            assert.equal(receipt.logs[0].args._value, 250000, 'registra la cantidad de la transferencia');
            return tokenInstance.balanceOf(accounts[1]);
        }).then((balance) => {
            assert.equal(balance.toNumber(), 250000, 'agrega la cantidad a la cuenta receptora');
            return tokenInstance.balanceOf(accounts[0]);
        }).then((balance) => {
            assert.equal(balance.toNumber(), 750000, 'deduce el importe de la cuenta de envío');
        });
    })
})