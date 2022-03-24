import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReserveSpaceUserPage } from './reserve-space-user.page';

const routes: Routes = [
  {
    path: '',
    component: ReserveSpaceUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReserveSpaceUserPageRoutingModule {}
