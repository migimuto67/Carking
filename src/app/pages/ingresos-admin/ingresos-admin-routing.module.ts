import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresosAdminPage } from './ingresos-admin.page';

const routes: Routes = [
  {
    path: '',
    component: IngresosAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresosAdminPageRoutingModule {}
