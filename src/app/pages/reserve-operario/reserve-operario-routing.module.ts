import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReserveOperarioPage } from './reserve-operario.page';

const routes: Routes = [
  {
    path: '',
    component: ReserveOperarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReserveOperarioPageRoutingModule {}
