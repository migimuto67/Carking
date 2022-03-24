import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReserveDatosUserPageRoutingModule } from './reserve-datos-user-routing.module';

import { ReserveDatosUserPage } from './reserve-datos-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReserveDatosUserPageRoutingModule
  ],
  declarations: [ReserveDatosUserPage]
})
export class ReserveDatosUserPageModule {}
