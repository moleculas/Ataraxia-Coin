const { assert } = require("chai");

const AtaraxiaToken = artifacts.require('AtaraxiaToken')
const AtaraxiaTokenVenta = artifacts.require('AtaraxiaTokenVenta')

contract('AtaraxiaTokenVenta', (accounts) => {
    let tokenInstance;
    let tokenSaleInstance;
    let admin = accounts[0];
    let buyer = accounts[1];
    let tokenPrice = 1000000000000000; // en wei
    let tokensAvailable = 750000;
    let numberOfTokens;

    it('inicializa el contrato con los valores correctos', () => {
        return AtaraxiaTokenVenta.deployed().then((instance) => {
            tokenSaleInstance = instance;
            return tokenSaleInstance.address
        }).then((address) => {
            assert.notEqual(address, 0x0, 'tiene dirección de contrato');
            return tokenSaleInstance.tokenContract();
        }).then((address) => {
            assert.notEqual(address, 0x0, 'tiene dirección de contrato');
            return tokenSaleInstance.tokenPrice();
        }).then((price) => {
            assert.equal(price, tokenPrice, 'el precio del token es correcto');
        });
    });

    it('facilita la compra de tokens', () => {
        return AtaraxiaToken.deployed().then((instance) => {
            // Toma la instancia de token primero
            tokenInstance = instance;
            return AtaraxiaTokenVenta.deployed();
        }).then((instance) => {
            // Luego, toma la instancia de venta de tokens
            tokenSaleInstance = instance;
            // Suministra el 75% de todos los tokens a la venta del token
            return tokenInstance.transfer(tokenSaleInstance.address, tokensAvailable, { from: admin })
        }).then((receipt) => {
            numberOfTokens = 10;
            return tokenSaleInstance.buyTokens(numberOfTokens, { from: buyer, value: numberOfTokens * tokenPrice })
        }).then((receipt) => {
            assert.equal(receipt.logs.length, 1, 'dispara evento');
            assert.equal(receipt.logs[0].event, 'Sell', 'debe ser el "Sell" evento');
            assert.equal(receipt.logs[0].args._buyer, buyer, 'registra la cuenta que compra los tokens');
            assert.equal(receipt.logs[0].args._amount, numberOfTokens, 'registra el número de tokens comprados');
            return tokenSaleInstance.tokensSold();
        }).then((amount) => {
            assert.equal(amount.toNumber(), numberOfTokens, 'incrementa el número de tokens vendidos');
            return tokenInstance.balanceOf(buyer);
        }).then((balance) => {
            assert.equal(balance.toNumber(), numberOfTokens);
            return tokenInstance.balanceOf(tokenSaleInstance.address);
        }).then((balance) => {
            assert.equal(balance.toNumber(), tokensAvailable - numberOfTokens);
            // Intenta comprar tokens diferentes al valor de ether.
            return tokenSaleInstance.buyTokens(numberOfTokens, { from: buyer, value: 1 });
        }).then(assert.fail).catch((error) => {
            assert(error.message.indexOf('revert') >= 0, 'msg.value debe ser igual que el número de tokens en wei');
            return tokenSaleInstance.buyTokens(800000, { from: buyer, value: numberOfTokens * tokenPrice })
        }).then(assert.fail).catch((error) => {
            assert(error.message.indexOf('revert') >= 0, 'no se puede comprar más tokens que los disponibles');
        });
    });

    it('finaliza la venta de tokens', () => {
        return AtaraxiaToken.deployed().then((instance) => {
            // Toma la instancia de token primero
            tokenInstance = instance;
            return AtaraxiaTokenVenta.deployed();
        }).then((instance) => {
            // Luego, toma la instancia de venta de tokens
            tokenSaleInstance = instance;
            // Intenta finalizar la venta desde una cuenta que no sea la del administrador
            return tokenSaleInstance.endSale({ from: buyer });
        }).then(assert.fail).catch((error) => {
            assert(error.message.indexOf('revert' >= 0, 'se debe ser admin para finalizar la venta'));
            // Termina la venta como admin
            return tokenSaleInstance.endSale({ from: admin });
        }).then((receipt) => {
            return tokenInstance.balanceOf(admin);
        }).then((balance) => {
            assert.equal(balance.toNumber(), 999990, 'devuelve todos los tokens no ​​vendidos al administrador');
            // Comprueba que el contrato no tiene saldo           
           web3.eth.getBalance(tokenSaleInstance.address)
           .then(balance => {
            assert.equal(balance.toNumber(), 0);
           });    
        });
    });
});