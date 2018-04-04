import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  wholefoods:string = "Savings: $0";
  wholefoodDiscount:number = 0;
  uberDiscount:number = 0;
  salonDiscount:number = 0;
  restDiscount:number = 0;
  retailDiscount:number = 0;
  random:number  = 10;
  total:number = 0;

  get formattedMsg():string {
	return "Savings: $" + this.total;
  }

  get formattedMsg2():string {
   return "Estimated Savings Have Fun in Paris !! " + this.random;
  }


  constructor(public navCtrl: NavController) {

  }

  wholeFoodsChanged(event) {
    console.log("Whole Foods: " + event.value);
    this.wholefoodDiscount = event.value;	
    this.total = this.wholefoodDiscount + this.uberDiscount + this.salonDiscount + this.restDiscount + this.retailDiscount;
    this.random+=1+this.total;
  }

  uberChanged(event) {
    console.log("Uber: " + event.value);
    this.uberDiscount = event.value;	
    this.total = this.wholefoodDiscount + this.uberDiscount + this.salonDiscount + this.restDiscount + this.retailDiscount;
    this.random+=1+this.total;
  }

  salonChanged(event) {
    console.log("Salon: " + event.value);
    this.salonDiscount = event.value;	
    this.total = this.wholefoodDiscount + this.uberDiscount + this.salonDiscount + this.restDiscount + this.retailDiscount;
    this.random=1+this.total;
  }

  restChanged(event) {
    console.log("Restaurent: " + event.value);
    this.restDiscount = event.value;	
    this.total = this.wholefoodDiscount + this.uberDiscount + this.salonDiscount + this.restDiscount + this.retailDiscount;
    this.random=5+this.total;
  }

  retailChanged(event) {
    console.log("Retail: " + event.value);
    this.restDiscount = event.value;	
    this.total = this.wholefoodDiscount + this.uberDiscount + this.salonDiscount + this.restDiscount + this.retailDiscount;
    this.random=1+this.total;
  }

}
