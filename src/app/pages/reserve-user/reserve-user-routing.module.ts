import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReserveUserPage } from './reserve-user.page';

const routes: Routes = [
  {
    path: '',
    component: ReserveUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReserveUserPageRoutingModule {}
