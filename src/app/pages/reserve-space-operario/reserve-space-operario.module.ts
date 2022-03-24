import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReserveSpaceOperarioPageRoutingModule } from './reserve-space-operario-routing.module';

import { ReserveSpaceOperarioPage } from './reserve-space-operario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReserveSpaceOperarioPageRoutingModule
  ],
  declarations: [ReserveSpaceOperarioPage]
})
export class ReserveSpaceOperarioPageModule {}
