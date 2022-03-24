import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReserveSpaceOperarioPage } from './reserve-space-operario.page';

const routes: Routes = [
  {
    path: '',
    component: ReserveSpaceOperarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReserveSpaceOperarioPageRoutingModule {}
