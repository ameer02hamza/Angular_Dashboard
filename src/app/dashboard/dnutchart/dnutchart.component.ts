import { Component, OnInit } from '@angular/core';
import {Chart, ChartType} from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
@Component({
  selector: 'app-dnutchart',
  templateUrl: './dnutchart.component.html',
  styleUrls: []
})
export class DnutchartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  doughnutChartLabels: Label[] = [];
doughnutChartData: MultiDataSet = [
  [55, 25],
  
];
doughnutChartType: ChartType = 'doughnut';
}
