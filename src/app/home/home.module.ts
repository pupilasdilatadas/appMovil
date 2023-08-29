import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';


import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';

import { MatDatepickerModule } from '@angular/material/datepicker'; //importar el DATEPICKER
import { MatInputModule } from '@angular/material/input'; //importar el INPUT
import { MatNativeDateModule } from '@angular/material/core'; //importar el NATIVE

@NgModule({ //acá también
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    QRCodeModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
