pragma solidity ^0.4.24;

contract Event{
	
  address owner;
	string nome;
	string description;
	string location;
	string begin;
	string end;

  struct Subscription {
    address subsAddr;
    string description;
    bool valid;
  }
  
  Subscription[] subscriptions;

  event SubscriptionAdded(uint indexed id, address subsAddr, string description);

  constructor() public {
      owner = msg.sender;
  }

	function create(
	    string _nome,
	    string _description,
	    string _location,
	    string _begin,
	    string _end
	    ) public{

    if(msg.sender != owner)
      return;

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
	function getSubscriptions(uint _index) public constant returns (address, string){ 
	    return (subscriptions[_index].subsAddr, subscriptions[_index].description); 
	}
  
  function addSubscription(address _addr, string _description) public{
    Subscription memory subs = Subscription(_addr, _description, true);
    uint id = subscriptions.push(subs) - 1;
    emit SubscriptionAdded(id, _addr, _description);
  }
}
