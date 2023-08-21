import { Component, OnInit } from '@angular/core';
import {AppModule} from '../../../../app.module';
import {CardTableComponent} from '../../../../components/cards/card-table/card-table.component';

@Component({
  standalone: true,
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  imports: [
    CardTableComponent
  ]
})
export class TablesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
