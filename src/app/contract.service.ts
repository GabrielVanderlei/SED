import { Injectable } from '@angular/core';
import { EthereumService } from './ethereum.service';

@Injectable()
export class ContractService {
  public eventContract:any = "0x1cb4012d338eda0f8966819beb6e3e269b45e116";
  public eventInstance:any;
  public ethereumService:any = new EthereumService();
  public contract:any;
  public eventAbi:any = [{
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
		"type": "function",
		"stateMutability": "nonpayable"
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
		"type": "function",
		"stateMutability": "view"
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
		"type": "function",
		"stateMutability": "view"
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
		"type": "function",
		"stateMutability": "view"
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
		"type": "function",
		"stateMutability": "view"
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
		"type": "function",
		"stateMutability": "view"
	}];
  
  constructor() { }

  build(){
    this.ethereumService.loadContract(
      this.eventAbi, 
      this.eventContract);
      
      this.contract = this.ethereumService.contract;
  }

}