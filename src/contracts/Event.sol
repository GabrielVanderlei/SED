pragma solidity ^0.4.11;

contract Event{
	
	string nome;
	string description;
	string location;
	string begin;
	string end;
	
	function create(
	    string _nome,
	    string _description,
	    string _location,
	    string _begin,
	    string _end
	    ) public{
		nome = _nome;
		description = _description;
		location = _location;
		begin = _begin;
		end = _end;
	}

	function getNome() public constant returns (string){ return nome; }
	function getDescription() public constant returns (string){ return description; }
	function getLocation() public constant returns (string){ return location; }
	function getBegin() public constant returns (string){ return begin; }
	function getEnd() public constant returns (string){ return end; }
}
