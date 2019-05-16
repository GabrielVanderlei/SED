pragma solidity ^0.4.6;

contract Subscriptions {
  
  address addr;
  string description;

  function subscript(
    address _eventAddr,
    address _addr,
    string description
    ) public {
      Event e = Event(_eventAddr);
      e
  }
    function someAction(address addr) returns(uint) {
        Callee c = Callee(addr);
        return c.getValue(100);
    }
    
    function storeAction(address addr) returns(uint) {
        Callee c = Callee(addr);
        c.storeValue(100);
        return c.getValues();
    }
    
    function someUnsafeAction(address addr) {
        addr.call(bytes4(keccak256("storeValue(uint256)")), 100);
    }
}

contract Event {
    function addSubscription(address _addr) public;
}