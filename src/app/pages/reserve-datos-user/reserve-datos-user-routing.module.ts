import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReserveDatosUserPage } from './reserve-datos-user.page';

const routes: Routes = [
  {
    path: '',
    component: ReserveDatosUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReserveDatosUserPageRoutingModule {}
