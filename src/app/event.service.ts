import { Injectable } from '@angular/core';
import { ContractService } from './contract.service';
import { ChangeDetectorRef } from '@angular/core';

@Injectable()
export class EventService {

  public name:any;
  public description:any;
  public location:any;
  public begin:any;
  public end:any;
  public contractService:any = new ContractService();
  public address:any;
  public walletAddress:any;
  public subscripts:any = [{address:"a"}];

  constructor() {
    this.contractService.build();
  }

  setName(value){this.name=value};
  setDescription(value){this.description=value};
  setLocation(value){this.location=value};
  setBegin(value){this.begin=value};
  setEnd(value){this.end=value};
  setAddress(value){this.address=value};
  setWAddress(value){this.walletAddress=value};

  createEvent(ref:ChangeDetectorRef){
    this.contractService.contract.create(
      this.name,
      this.description,
      this.location,
      this.begin,
      this.end,
      (e,s)=>{this.updateData(ref,e,s)});
  }

  updateData(ref:ChangeDetectorRef, e,s) {
        this.updating(ref);
        
        if(!e){ 
          var m = setInterval(()=>{
            var web3 = window["web3"];
            web3.eth.getTransaction(s, (e,s) => {
              if(s != null){
                if(s.blockNumber != null){
                  this.setAddress(s.blockHash);
                  setTimeout(()=>{this.loadEventData(ref)},5000);
                  clearInterval(m);
                }
              }
            });
          }, 1000);
        }
      };

  updating(ref:ChangeDetectorRef){
    var loading = "Carregando...";
    this.setName(loading);
    this.setDescription(loading);
    this.setLocation(loading);
    this.setBegin(loading);
    this.setEnd(loading);
    this.setAddress(loading);
    this.view(ref);
  }

  view(ref:ChangeDetectorRef){
    ref.detectChanges();
  }

  loadEventData(ref:ChangeDetectorRef){
    this.contractService.contract.getNome((err, result) => { 
        if(!err){ this.setName(result);this.view(ref);}
    });

    this.contractService.contract.getDescription((err, result) => { 
        if(!err){ this.setDescription(result);this.view(ref);}
    });

    this.contractService.contract.getLocation((err, result) => { 
        if(!err){ this.setLocation(result);this.view(ref);}
    });

    this.contractService.contract.getBegin((err, result) => { 
        if(!err){ this.setBegin(result);this.view(ref);}
    });

    this.contractService.contract.getEnd((err, result) => { 
        if(!err){ this.setEnd(result);this.view(ref);}
    });

    var index = 0;
    this.subscripts = [];

    var localizeSubs = () => {
      this.contractService.contract.getSubscriptions(index, (err, result) => { 
        if(!err){ 
          if(result != null){
            this.subscripts.push(result);
            this.view(ref);
            index++;
            localizeSubs();
          }
        }
      });
    }
  }

  subscribe(ref:ChangeDetectorRef){
    console.log(this.contractService.waddress);
    this.contractService.contract.addSubscription(
      this.contractService.waddress,
      "s",
      (e,s)=>{this.updateData(ref,e,s)});
  }
}