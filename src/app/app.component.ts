import { Component } from '@angular/core';
import { EthereumService } from './ethereum.service';
import { EventService } from './event.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  public eventService = new EventService();
  public ethereumService = new EthereumService();

  public eventName = "Carregando...";
  public ref:any;
  
  constructor(ref:ChangeDetectorRef){
    this.ref = ref;
    this.eventService.loadEventData(ref);
    //this.eventService.createEvent(); 
  }

  Event(
    name,
    description,
    location,
    begin,
    end
    ){
    this.eventService.setName(name);
    this.eventService.setDescription(description);
    this.eventService.setLocation(location);
    this.eventService.setBegin(begin);
    this.eventService.setEnd(end);
    this.eventService.createEvent(this.ref);  
  }

  Subscribe(){
    this.eventService.subscribe(this.ref);
  }
}
