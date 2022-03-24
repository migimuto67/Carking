import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReserveConfOperarioPageRoutingModule } from './reserve-conf-operario-routing.module';

import { ReserveConfOperarioPage } from './reserve-conf-operario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReserveConfOperarioPageRoutingModule
  ],
  declarations: [ReserveConfOperarioPage]
})
export class ReserveConfOperarioPageModule {}
