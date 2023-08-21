import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthRoutingModule} from './auth-routing.module';
import {AuthComponent} from './auth.component';
import {AuthNavbarComponent} from '../../components/navbars/auth-navbar/auth-navbar.component';
import {FooterSmallComponent} from '../../components/footers/footer-small/footer-small.component';


@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AuthNavbarComponent,
    FooterSmallComponent,
  ],
})
export class AuthModule {
}
