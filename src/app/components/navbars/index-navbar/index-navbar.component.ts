import { Component, OnInit } from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {IndexDropdownComponent} from '../../dropdowns/index-dropdown/index-dropdown.component';

@Component({
  standalone: true,
  selector: 'app-index-navbar',
  templateUrl: './index-navbar.component.html',
  imports: [RouterModule, CommonModule, IndexDropdownComponent]
})
export class IndexNavbarComponent implements OnInit {
  navbarOpen = false;

  constructor() {}

  ngOnInit(): void {}

  setNavbarOpen() {
    this.navbarOpen = !this.navbarOpen;
  }
}
