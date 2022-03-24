import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamaraOperarioPageRoutingModule } from './camara-operario-routing.module';

import { CamaraOperarioPage } from './camara-operario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamaraOperarioPageRoutingModule
  ],
  declarations: [CamaraOperarioPage]
})
export class CamaraOperarioPageModule {}
