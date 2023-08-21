export interface IDashboard {
  allDashboardCards: IDashboardCard[];
}

export interface IDashboardCard {
  id: number;
  cardName: string;
  cardType: 'list' | 'diagram' | 'user' | 'performance';
  count: string;
  percent: string;
  perCentType: 'up' | 'down';
  period: string;
}
