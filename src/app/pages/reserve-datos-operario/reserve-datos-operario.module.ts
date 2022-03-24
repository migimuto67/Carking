import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReserveDatosOperarioPageRoutingModule } from './reserve-datos-operario-routing.module';

import { ReserveDatosOperarioPage } from './reserve-datos-operario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReserveDatosOperarioPageRoutingModule
  ],
  declarations: [ReserveDatosOperarioPage]
})
export class ReserveDatosOperarioPageModule {}
