import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppModule} from '../../../../app.module';
import {CardSettingsComponent} from '../../../../components/cards/card-settings/card-settings.component';
import {CardProfileComponent} from '../../../../components/cards/card-profile/card-profile.component';

@Component({
  standalone: true,
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  imports: [
    CardSettingsComponent,
    CardProfileComponent
  ]
})
export class SettingsComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit(): void {
    console.log('start')
  }

  ngOnDestroy() {
    console.log('end')
  }
}
