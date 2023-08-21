import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminComponent} from './admin.component';
import {HeaderStatsComponent} from './shared/header-stats/header-stats.component';
import {SidebarComponent} from '../../components/sidebar/sidebar.component';
import {AdminNavbarComponent} from '../../components/navbars/admin-navbar/admin-navbar.component';
import {FooterAdminComponent} from '../../components/footers/footer-admin/footer-admin.component';
import {AdminService} from './admin.service';
import {AdminRoutingModule} from './admin-routing.module';


@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HeaderStatsComponent,
    SidebarComponent,
    AdminNavbarComponent,
    FooterAdminComponent,
  ],
  providers: [AdminService]
})
export class AdminModule {
}
