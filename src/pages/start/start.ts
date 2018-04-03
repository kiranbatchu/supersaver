import { Component } from '@angular/core';
import { NavController,NavParams} from 'ionic-angular';
import * as Chartist from 'chartist';


import {
 ChartType,
 ChartEvent
} from 'angular2-chartist';

@Component({
  selector: 'page-start',
  templateUrl: 'start.html'
})
export class StartPage {

  constructor(public navCtrl: NavController) {

  }

  handleTrySuperSaver() {
      console.log('Handle super saver request ...');
  }

}
