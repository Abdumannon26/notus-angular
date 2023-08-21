import {RouteReuseStrategy, RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin.component';
import {NgModule} from '@angular/core';
import {CustomRouteReuseStrategy} from '../../core/helper/custom-route-reuse-strategy';

const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: (): any => import('./components/dashboard/dashboard.component').then(c => c.DashboardComponent),
      },
      {
        path: 'settings',
        loadComponent: (): any => import('./components/settings/settings.component').then(c => c.SettingsComponent),
      },
      {
        path: 'tables',
        loadComponent: (): any => import('./components/tables/tables.component').then(c => c.TablesComponent),
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ADMIN_ROUTES)],
  exports: [RouterModule],
})
export class AdminRoutingModule {
}
