import {Component, OnInit} from '@angular/core';
import {AppModule} from '../../app.module';
import {RouterLink, RouterModule} from '@angular/router';
import {AuthNavbarComponent} from '../../components/navbars/auth-navbar/auth-navbar.component';
import {FooterComponent} from '../../components/footers/footer/footer.component';

@Component({
  standalone: true,
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  imports: [
    RouterModule,
    AuthNavbarComponent,
    FooterComponent
  ]
})
export class LandingComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }
}
