import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ["../../../../node_modules/bootstrap/scss/bootstrap.scss",
    './sidenavbar.component.scss']
})
export class SidenavbarComponent implements OnInit {

  canvas: any;
  ctx: any;
  constructor() { }
  opened = true;
  panelOpenState = false;
  ngOnInit(): void {
    this.canvas = document.getElementById('myChart');
  this.ctx = this.canvas.getContext('2d');
  const myChart = new Chart(this.ctx, {type: 'line',data:
   {labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July',
    'Aug', 'Sep', 'Oct', ],
     datasets: [{
    label: 'Total Ratings.',
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
