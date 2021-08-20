import { Component, OnInit } from '@angular/core';
import {Chart, ChartType} from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: []
})
export class BarChartComponent implements OnInit {
  canvas: any;
  ctx: any;
  constructor() { }

  ngOnInit(): void {
    this.canvas = document.getElementById('chart');
  this.ctx = this.canvas.getContext('2d');
  const myChart = new Chart(this.ctx, {type: 'bar',data:
   {labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July',
    'Aug', 'Sep', 'Oct', ],
     datasets: [{
    label: 'Total sell',
    data: [100,300,700,200,800,100,300,400,500,900],
    borderWidth: 2,
    backgroundColor:'orange',
    }]
    },
    options: {
    legend: {
    display: false
    },
    responsive: false,
    }
    });
    ///check

    
    }


}
