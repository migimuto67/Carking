import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReserveConfUserPage } from './reserve-conf-user.page';

const routes: Routes = [
  {
    path: '',
    component: ReserveConfUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReserveConfUserPageRoutingModule {}
