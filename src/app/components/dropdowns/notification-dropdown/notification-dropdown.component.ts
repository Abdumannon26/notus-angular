import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {createPopper} from '@popperjs/core';
import {CommonModule} from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-notification-dropdown',
  templateUrl: './notification-dropdown.component.html',
  imports: [
    CommonModule
  ]
})
export class NotificationDropdownComponent implements AfterViewInit {
  dropdownPopoverShow = false;
  @ViewChild('btnDropdownRef', {static: false}) btnDropdownRef: ElementRef;
  @ViewChild('popoverDropdownRef', {static: false})
  popoverDropdownRef: ElementRef;

  ngAfterViewInit() {
    createPopper(
      this.btnDropdownRef.nativeElement,
      this.popoverDropdownRef.nativeElement,
      {
        placement: 'bottom-start',
      }
    );
  }

  toggleDropdown(event) {
    event.preventDefault();
    if (this.dropdownPopoverShow) {
      this.dropdownPopoverShow = false;
    } else {
      this.dropdownPopoverShow = true;
    }
  }
}
