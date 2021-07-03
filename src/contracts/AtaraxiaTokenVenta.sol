// SPDX-License-Identifier: MIT
pragma solidity ^0.5.3;

import "./AtaraxiaToken.sol";

contract AtaraxiaTokenVenta {
    //address payable public admin;
    address payable public admin;
    AtaraxiaToken public tokenContract;
    uint256 public tokenPrice;
    uint256 public tokensSold;

    event Sell(address _buyer, uint256 _amount);  
   constructor(
       AtaraxiaToken _tokenContract, 
       uint256 _tokenPrice
       //address payable _admin
       ) public{        
       // admin = _admin;       
        admin=msg.sender;     
        tokenContract = _tokenContract;
        tokenPrice = _tokenPrice;       
       
    }

    function multiply(uint x, uint y) internal pure returns (uint z) {
        require(y == 0 || (z = x * y) / y == x);
    }

    function buyTokens(uint256 _numberOfTokens) public payable {
        
     require(msg.value == multiply(_numberOfTokens, tokenPrice));
        require(tokenContract.balanceOf(address(this)) >= _numberOfTokens);
       require(tokenContract.transfer(msg.sender, _numberOfTokens));

        tokensSold += _numberOfTokens;

        emit Sell(msg.sender, _numberOfTokens);
    }

    function endSale() public{      
        require(msg.sender == admin);
        require(tokenContract.transfer(admin, tokenContract.balanceOf(address(this))));
        // Transferir el balance al admin       
        admin.transfer(address(this).balance);
    }
}