import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeOperarioPageRoutingModule } from './home-operario-routing.module';

import { HomeOperarioPage } from './home-operario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeOperarioPageRoutingModule
  ],
  declarations: [HomeOperarioPage]
})
export class HomeOperarioPageModule {}
