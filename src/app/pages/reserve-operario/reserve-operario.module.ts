import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReserveOperarioPageRoutingModule } from './reserve-operario-routing.module';

import { ReserveOperarioPage } from './reserve-operario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReserveOperarioPageRoutingModule
  ],
  declarations: [ReserveOperarioPage]
})
export class ReserveOperarioPageModule {}
