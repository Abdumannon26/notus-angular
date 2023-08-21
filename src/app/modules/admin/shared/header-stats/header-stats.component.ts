import { Component, OnInit } from '@angular/core';
import {AppModule} from '../../../../app.module';
import {AdminService} from '../../admin.service';
import {IDashboardCard} from '../../../../core/interfaces/dashboard.interface';
import {CommonModule} from '@angular/common';
import {HeaderCardTypeEnum} from '../../../../core/enums/header-card-type-enum';
import {CardStatsComponent} from '../../../../components/cards/card-stats/card-stats.component';

@Component({
  standalone: true,
  selector: 'app-header-stats',
  templateUrl: './header-stats.component.html',
  imports: [
    CommonModule,
    CardStatsComponent
  ]
})
export class HeaderStatsComponent implements OnInit {
  constructor(
    private adminService: AdminService
  ) {}
  headerStats: IDashboardCard[]

  protected readonly HeaderCardTypeEnum = HeaderCardTypeEnum;

  ngOnInit() {
    this.getDashboard()
  }

  private getDashboard(): void {
    this.adminService.getHeaderStats()
      .valueChanges.subscribe(res => {
      this.headerStats = res.data.allDashboardCards;
    })
  }
}
