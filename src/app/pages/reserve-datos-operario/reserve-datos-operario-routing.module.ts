import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReserveDatosOperarioPage } from './reserve-datos-operario.page';

const routes: Routes = [
  {
    path: '',
    component: ReserveDatosOperarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReserveDatosOperarioPageRoutingModule {}
