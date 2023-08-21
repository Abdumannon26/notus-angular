import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {PagesDropdownComponent} from '../../dropdowns/pages-dropdown/pages-dropdown.component';

@Component({
  standalone: true,
  selector: 'app-auth-navbar',
  templateUrl: './auth-navbar.component.html',
  imports: [CommonModule, RouterModule, PagesDropdownComponent]
})
export class AuthNavbarComponent implements OnInit {
  navbarOpen = false;

  constructor() {}

  ngOnInit(): void {}

  setNavbarOpen() {
    this.navbarOpen = !this.navbarOpen;
  }
}
