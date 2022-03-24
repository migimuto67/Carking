import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerReservasOperarioPage } from './ver-reservas-operario.page';

const routes: Routes = [
  {
    path: '',
    component: VerReservasOperarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerReservasOperarioPageRoutingModule {}
