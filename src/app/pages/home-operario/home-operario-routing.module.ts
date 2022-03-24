import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeOperarioPage } from './home-operario.page';

const routes: Routes = [
  {
    path: '',
    component: HomeOperarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeOperarioPageRoutingModule {}
