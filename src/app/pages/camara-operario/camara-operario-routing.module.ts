import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamaraOperarioPage } from './camara-operario.page';

const routes: Routes = [
  {
    path: '',
    component: CamaraOperarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamaraOperarioPageRoutingModule {}
