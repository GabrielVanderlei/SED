import { Component } from '@angular/core';
import { EthereumService } from './ethereum.service';
import { EventService } from './event.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  public eventService:any = new EventService();
  public ethereumService:any = new EthereumService();
  
  constructor(){
    this.ethereumService.logIn();
    this.eventService.loadEventData();
    //this.eventService.createEvent();
  }

  Event(name){
    this.eventService.setName(name);
    this.eventService.createEvent();  
  }
}
