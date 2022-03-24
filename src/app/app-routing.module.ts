
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home-user',
    loadChildren: () => import('./pages/home-user/home-user.module').then( m => m.HomeUserPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'reserve-user',
    loadChildren: () => import('./pages/reserve-user/reserve-user.module').then( m => m.ReserveUserPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'map-user',
    loadChildren: () => import('./pages/map-user/map-user.module').then( m => m.MapUserPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'reserve-space-user',
    loadChildren: () => import('./pages/reserve-space-user/reserve-space-user.module').then( m => m.ReserveSpaceUserPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'reserve-datos-user',
    loadChildren: () => import('./pages/reserve-datos-user/reserve-datos-user.module').then( m => m.ReserveDatosUserPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'reserve-conf-user',
    loadChildren: () => import('./pages/reserve-conf-user/reserve-conf-user.module').then( m => m.ReserveConfUserPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'myreserve-user',
    loadChildren: () => import('./pages/myreserve-user/myreserve-user.module').then( m => m.MyreserveUserPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'reserve-pago-user',
    loadChildren: () => import('./pages/reserve-pago-user/reserve-pago-user.module').then( m => m.ReservePagoUserPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'home-operario',
    loadChildren: () => import('./pages/home-operario/home-operario.module').then( m => m.HomeOperarioPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'ver-reservas-operario',
    loadChildren: () => import('./pages/ver-reservas-operario/ver-reservas-operario.module').then( m => m.VerReservasOperarioPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'reserve-operario',
    loadChildren: () => import('./pages/reserve-operario/reserve-operario.module').then( m => m.ReserveOperarioPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'reserve-space-operario',
    loadChildren: () => import('./pages/reserve-space-operario/reserve-space-operario.module').then( m => m.ReserveSpaceOperarioPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'reserve-datos-operario',
    loadChildren: () => import('./pages/reserve-datos-operario/reserve-datos-operario.module').then( m => m.ReserveDatosOperarioPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'reserve-conf-operario',
    loadChildren: () => import('./pages/reserve-conf-operario/reserve-conf-operario.module').then( m => m.ReserveConfOperarioPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'home-admin',
    loadChildren: () => import('./pages/home-admin/home-admin.module').then( m => m.HomeAdminPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'ingresos-admin',
    loadChildren: () => import('./pages/ingresos-admin/ingresos-admin.module').then( m => m.IngresosAdminPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'operarios-admin',
    loadChildren: () => import('./pages/operarios-admin/operarios-admin.module').then( m => m.OperariosAdminPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'reservas-admin',
    loadChildren: () => import('./pages/reservas-admin/reservas-admin.module').then( m => m.ReservasAdminPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'camara-operario',
    loadChildren: () => import('./pages/camara-operario/camara-operario.module').then( m => m.CamaraOperarioPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./pages/verify-email/verify-email.module').then( m => m.VerifyEmailPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
