import { Component, OnInit } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [
    RouterLink
  ]
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
