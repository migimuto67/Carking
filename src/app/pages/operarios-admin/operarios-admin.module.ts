import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OperariosAdminPageRoutingModule } from './operarios-admin-routing.module';

import { OperariosAdminPage } from './operarios-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OperariosAdminPageRoutingModule
  ],
  declarations: [OperariosAdminPage]
})
export class OperariosAdminPageModule {}
