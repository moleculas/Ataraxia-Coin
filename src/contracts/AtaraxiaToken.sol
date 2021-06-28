// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract AtaraxiaToken {
    string public name = "Ataraxia Token";
    string public symbol = "ATR";
    string public standard = "Ataraxia Token v1.0";
    uint256 public totalSupply;
    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    event Approval(
        address indexed _owner,
        address indexed _spender,
        uint256 _value
    );
    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;

    //constructor
    constructor(uint256 _initialSupply) public {
        balanceOf[msg.sender] = _initialSupply;
        totalSupply = _initialSupply;
        //asignar la cantidad inicial
    }

    //transferencias
    function transfer(address _to, uint256 _value)
        public
        returns (bool success)
    {
        //excepción si la cuenta no tiene suficiente
        require(balanceOf[msg.sender] >= _value);
        //transferir el balance
        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;
        //emitir evento
        emit Transfer(msg.sender, _to, _value);
        //retorna booleano
        return true;
    }

    //transferencias delegadas

    function approve(address _spender, uint256 _value)
        public
        returns (bool success)
    {
        allowance[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }

    function transferFrom(
        address _from,
        address _to,
        uint256 _value
    ) public returns (bool success) {
        //excepción si la cuenta _from no tiene suficiente
        require(_value <= balanceOf[_from]);
        //excepción si la asignación no es suficiente
        require(_value <= allowance[_from][msg.sender]);
        //cambiar el balance
        balanceOf[_from] -= _value;
        balanceOf[_to] += _value;
        //actualizar asignación
        allowance[_from][msg.sender] -= _value;
        //emitir evento
        emit Transfer(_from, _to, _value);
        //retorna booleano
        return true;
    }
}
