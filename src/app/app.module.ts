import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {MatDatepickerModule} from '@angular/material/datepicker'; //importar el DATEPICKER
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; //importar el MODULE

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [MatDatepickerModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule, BrowserAnimationsModule], //importar el DATEPICKER
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
