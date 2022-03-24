import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperariosAdminPage } from './operarios-admin.page';

const routes: Routes = [
  {
    path: '',
    component: OperariosAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperariosAdminPageRoutingModule {}
