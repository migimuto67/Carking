import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapUserPageRoutingModule } from './map-user-routing.module';

import { MapUserPage } from './map-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapUserPageRoutingModule
  ],
  declarations: [MapUserPage]
})
export class MapUserPageModule {}
