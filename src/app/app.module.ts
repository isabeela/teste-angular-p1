import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import {IsabelawalletComponent} from './isabelawallet/isabelawallet.component';

import { IsabelawalletService } from './isabelawallet.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, IsabelawalletComponent],
  bootstrap: [AppComponent],
  providers: [IsabelawalletService],
})
export class AppModule {}
