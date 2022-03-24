import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservePagoUserPage } from './reserve-pago-user.page';

const routes: Routes = [
  {
    path: '',
    component: ReservePagoUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservePagoUserPageRoutingModule {}
