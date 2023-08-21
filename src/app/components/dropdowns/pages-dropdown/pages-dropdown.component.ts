import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {createPopper} from '@popperjs/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-pages-dropdown',
  templateUrl: './pages-dropdown.component.html',
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PagesDropdownComponent implements OnInit {
  dropdownPopoverShow = false;
  @ViewChild('btnDropdownRef', {static: false}) btnDropdownRef: ElementRef;
  @ViewChild('popoverDropdownRef', {static: false})
  popoverDropdownRef: ElementRef;

  ngOnInit() {
  }

  toggleDropdown(event) {
    event.preventDefault();
    if (this.dropdownPopoverShow) {
      this.dropdownPopoverShow = false;
    } else {
      this.dropdownPopoverShow = true;
      this.createPoppper();
    }
  }

  createPoppper() {
    createPopper(
      this.btnDropdownRef.nativeElement,
      this.popoverDropdownRef.nativeElement,
      {
        placement: 'bottom-start',
      }
    );
  }
}
