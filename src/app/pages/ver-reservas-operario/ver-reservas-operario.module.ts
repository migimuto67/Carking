import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerReservasOperarioPageRoutingModule } from './ver-reservas-operario-routing.module';

import { VerReservasOperarioPage } from './ver-reservas-operario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerReservasOperarioPageRoutingModule
  ],
  declarations: [VerReservasOperarioPage]
})
export class VerReservasOperarioPageModule {}
