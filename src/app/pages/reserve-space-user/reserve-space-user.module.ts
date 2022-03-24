import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReserveSpaceUserPageRoutingModule } from './reserve-space-user-routing.module';

import { ReserveSpaceUserPage } from './reserve-space-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReserveSpaceUserPageRoutingModule
  ],
  declarations: [ReserveSpaceUserPage]
})
export class ReserveSpaceUserPageModule {}
