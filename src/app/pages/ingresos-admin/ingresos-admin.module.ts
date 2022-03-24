import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresosAdminPageRoutingModule } from './ingresos-admin-routing.module';

import { IngresosAdminPage } from './ingresos-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresosAdminPageRoutingModule
  ],
  declarations: [IngresosAdminPage]
})
export class IngresosAdminPageModule {}
