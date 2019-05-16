import { Injectable } from '@angular/core';
import { EthereumService } from './ethereum.service';

@Injectable()
export class ContractService {
  public eventContract:any = "0x4fe9111ae02850f1c46170d569e4c76f211effc5";
  public eventInstance:any;
  public ethereumService:any = new EthereumService();
  public contract:any;
  public waddress:any;
  public eventAbi:any = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_addr",
				"type": "address"
			},
			{
				"name": "_description",
				"type": "string"
			}
		],
		"name": "addSubscription",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_nome",
				"type": "string"
			},
			{
				"name": "_description",
				"type": "string"
			},
			{
				"name": "_location",
				"type": "string"
			},
			{
				"name": "_begin",
				"type": "string"
			},
			{
				"name": "_end",
				"type": "string"
			}
		],
		"name": "create",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "subsAddr",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "description",
				"type": "string"
			}
		],
		"name": "SubscriptionAdded",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getBegin",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getDescription",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getEnd",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getLocation",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getNome",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "getSubscriptions",
		"outputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];
  
  constructor() { }

  build(){
    this.ethereumService.loadContract(
      this.eventAbi, 
      this.eventContract,
      (a) => {
        this.waddress = a;
        this.contract = this.ethereumService.contract;
      });
  }

}