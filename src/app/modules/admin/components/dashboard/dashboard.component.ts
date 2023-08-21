import {Component, OnDestroy, OnInit} from '@angular/core';
import {AdminService} from '../../admin.service';
import {IDashboard} from '../../../../core/interfaces/dashboard.interface';
import {CardLineChartComponent} from '../../../../components/cards/card-line-chart/card-line-chart.component';
import {CardBarChartComponent} from '../../../../components/cards/card-bar-chart/card-bar-chart.component';
import {CardPageVisitsComponent} from '../../../../components/cards/card-page-visits/card-page-visits.component';
import {
  CardSocialTrafficComponent
} from '../../../../components/cards/card-social-traffic/card-social-traffic.component';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  imports: [
    CardLineChartComponent,
    CardBarChartComponent,
    CardPageVisitsComponent,
    CardSocialTrafficComponent
  ]
})
export class DashboardComponent implements OnInit, OnDestroy {
  dashboardData: IDashboard;

  constructor(
    private dashboardService: AdminService
  ) {
  }

  ngOnInit() {
    console.log('start')
    // this.getDashboard()
  }

  // private getDashboard(): void {
  //   this.dashboardService.getDashboard()
  //     .valueChanges.subscribe(res => {
  //     this.dashboardData = res.data;
  //   })
  // }
  ngOnDestroy() {
    console.log('end')
  }
}
