import { Injectable } from '@angular/core';
import { ContractService } from './contract.service';

@Injectable()
export class EventService {

  public name:any = "Meu Evento";
  public description:any = "Um evento de testes";
  public location:any = "Brasil";
  public begin:any = "13/05/2019 00:00";
  public end:any = "15/05/2019 00:00";
  public contractService:any = new ContractService();

  constructor() { }

  createEvent(){
    this.contractService.build();
    this.contractService.contract.create(
      this.name,
      this.description,
      this.location,
      this.begin,
      this.end
    ).then(console.log);
  }
}