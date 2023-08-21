import { Component, OnInit, Input } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-footer-small',
  templateUrl: './footer-small.component.html',
  imports: [CommonModule]
})
export class FooterSmallComponent implements OnInit {
  date = new Date().getFullYear();

  @Input()
  get absolute(): boolean {
    return this._absolute;
  }
  set absolute(absolute: boolean) {
    this._absolute = absolute === undefined ? false : absolute;
  }
  private _absolute = false;

  constructor() {}

  ngOnInit(): void {}
}
