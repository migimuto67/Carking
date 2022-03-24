import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyreserveUserPage } from './myreserve-user.page';

const routes: Routes = [
  {
    path: '',
    component: MyreserveUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyreserveUserPageRoutingModule {}
