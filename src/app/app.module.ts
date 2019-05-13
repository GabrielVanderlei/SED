import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { EthereumService } from './ethereum.service';
import { EventService } from './event.service';
import { ContractService } from './contract.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HeaderComponent ],
  bootstrap:    [ AppComponent ],
  providers: [EthereumService, EventService, ContractService]
})

export class AppModule { }
