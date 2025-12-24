import { Component } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
   Highcharts = Highlight;

  chartOptions = {
    chart: { type: 'column' },
    title: { text: 'Gym Report' },
    series: [{
      name: 'Users',
      data: [5, 10, 15]
    }]
  };
}

