import { Injectable } from '@angular/core';

@Injectable()
export class EthereumService {
  
  public address:any;
  public contract:any;

  constructor() { }

  loadContract (abi:any, contractAddress:any){
    var web3:any = window["web3"];
    var contractInit = web3.eth.contract(abi);
    web3.eth.defaultAccount = web3.eth.accounts[0];
    var contractInstance = contractInit.at(contractAddress);
    this.contract = contractInstance;
  }

  updateAddress(success,error){
    if(success){

      var abi: any;
      var web3:any = window["web3"];

      // Acccounts now exposed
      // Acccounts always exposed
      abi= JSON.parse('[{"constant":true,"inputs":[],"name":"getNome","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_novoNome","type":"string"}],"name":"setNome","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_start","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]');
      web3.eth.defaultAccount = web3.eth.accounts[0] 
      this.address = web3.eth.defaultAccount;
    //HelloContract = web3.eth.contract(abi);
    }
  }

  logIn(){
    var ethereum:any = window["ethereum"];
    
   // Modern dapp browsers...
    if (ethereum) {
        try {
            ethereum.enable()
            .then((success, error)=>{this.updateAddress(success, error)});
        } catch (error) {
            // User denied account access...
            console.log(error)
        }
    }
    // Legacy dapp browsers...
    else if (window["web3"]) {
      alert("b");
        
    }
    else{
      alert("a");
    }
  }
}