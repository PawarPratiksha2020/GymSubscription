import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HighchartsChartModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard {

  Highcharts: typeof Highcharts = Highcharts;

  isDark = true;

toggleTheme() {
  this.isDark = !this.isDark;
  document.body.classList.toggle('light-theme', !this.isDark );
  document.body.classList.toggle('dark-theme', this.isDark);
}

  chartOptions: Highcharts.Options = {
    chart:{ type:'column', backgroundColor:'transparent' },
    title:{ text:'Monthly Revenue' },
    xAxis:{ categories:['Jan','Feb','Mar','Apr','May'] },
    yAxis:{ title:{ text:'Amount (₹)' } },
    series:[{
      type:'column',
      name:'Revenue',
      data:[30000,38000,42000,40000,45000]
    }]
  };

  users = 120;
  trainers = 8;
  subs = 95;
}
