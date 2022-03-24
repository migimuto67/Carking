import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyreserveUserPageRoutingModule } from './myreserve-user-routing.module';

import { MyreserveUserPage } from './myreserve-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyreserveUserPageRoutingModule
  ],
  declarations: [MyreserveUserPage]
})
export class MyreserveUserPageModule {}
