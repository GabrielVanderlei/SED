import { Component } from '@angular/core';
import { EthereumService } from './ethereum.service';
import { EventService } from './event.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  constructor(
    public ethereumService:EthereumService, 
    public eventService:EventService
    ){
    this.ethereumService.logIn();
    this.eventService.createEvent();
  }
}
