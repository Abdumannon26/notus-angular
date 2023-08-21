import {RouteReuseStrategy, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CustomRouteReuseStrategy} from './core/helper/custom-route-reuse-strategy';

const APP_ROUTES: Routes = [
  {
    path: 'admin',
    loadChildren: (): any => import('./modules/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'auth',
    loadChildren: (): any => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'profile',
    loadComponent: (): any => import('./modules/profile/profile.component').then(c => c.ProfileComponent),
  },
  {
    path: 'landing',
    loadComponent: (): any => import('./modules/landing/landing.component').then(c => c.LandingComponent),
  },
  {path: '**', redirectTo: 'admin', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  providers:[
    { provide: RouteReuseStrategy, useClass: CustomRouteReuseStrategy }
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
