import {Component, OnInit} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {NotificationDropdownComponent} from '../dropdowns/notification-dropdown/notification-dropdown.component';
import {UserDropdownComponent} from '../dropdowns/user-dropdown/user-dropdown.component';

@Component({
  standalone: true,
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  imports: [
    CommonModule,
    RouterModule,
    NotificationDropdownComponent,
    UserDropdownComponent
  ]
})
export class SidebarComponent implements OnInit {
  collapseShow = 'hidden';

  constructor() {
  }

  ngOnInit() {
  }

  toggleCollapseShow(classes) {
    this.collapseShow = classes;
  }
}
