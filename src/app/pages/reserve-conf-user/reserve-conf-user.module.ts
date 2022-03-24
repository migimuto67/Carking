import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReserveConfUserPageRoutingModule } from './reserve-conf-user-routing.module';

import { ReserveConfUserPage } from './reserve-conf-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReserveConfUserPageRoutingModule
  ],
  declarations: [ReserveConfUserPage]
})
export class ReserveConfUserPageModule {}
