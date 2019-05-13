import { Injectable } from '@angular/core';

@Injectable()
export class EventService {

  public events:any;

  constructor() { }

  getEvents(){
    this.events = "a";
  }
}