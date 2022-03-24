import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservePagoUserPageRoutingModule } from './reserve-pago-user-routing.module';

import { ReservePagoUserPage } from './reserve-pago-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservePagoUserPageRoutingModule
  ],
  declarations: [ReservePagoUserPage]
})
export class ReservePagoUserPageModule {}
