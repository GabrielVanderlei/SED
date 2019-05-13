import { Component } from '@angular/core';
import { EthereumService } from './ethereum.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  constructor(public ethereumService:EthereumService){
    this.ethereumService.logIn();
  }
}
