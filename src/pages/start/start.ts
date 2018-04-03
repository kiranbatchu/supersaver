import { Component, ViewChild } from '@angular/core';
import { NavController} from 'ionic-angular';
import { Chart } from 'chart.js';



@Component({
  selector: 'page-start',
  templateUrl: 'start.html'
})
export class StartPage {

  @ViewChild('lineCanvas') lineCanvas;
  
  lineChart: any;

  constructor(public navCtrl: NavController) {

  }

  handleTrySuperSaver() {
      console.log('Handle super saver request ...');
  }

  ionViewDidLoad() {
	this.lineChart = new Chart(this.lineCanvas.nativeElement, {
 
            type: 'line',
	    options: { 
		legend: { display: false }, 
		gridLines: {display:false},  
		tooltips: { enabled: false },
		scales: { yAxes: [{
          gridLines: {display:false},
		  ticks: { display: false } }],
 xAxes: [{
          gridLines: {display:false},
		  ticks: { display: false } }]


		   }
	    },
            data: {
                labels: ["", "", ""],
                datasets: [
                    {
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(31,73,125,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                       
		     	pointColor: "rgba(31,73,125,1)",
		     	pointHighlightFill: "#1f497d",
		     	pointFill: "#1f497d",
                        pointBackgroundColor: "#1f497d",
                        pointBorderWidth: 0,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(31,73,125,1)",
                        pointHoverBorderColor: "rgba(31,73,125,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 10,
                        pointHitRadius: 10,
                        data: [65, 59, 80],
                        spanGaps: false
                    }
                ]
            }
 
        });

  }

}
   
