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

  get formattedWholeFoodsMsg():string {
	var rate = Math.round((this.wholefoodDiscount/20));
	return ("Spend $" + rate + " less a week at Whole Foods");
  }

  get formattedUberMsg():string {
        var rate = Math.round((this.uberDiscount/33));
        return ("Take " + rate + " less Uber a month");
  }

  get formattedSalonMsg():string {
        var msg1 = "Keep salon budget as minimum as possible";
        var msg2 = "Keep salon budget at a moderate level ";
	if (this.salonDiscount > 50) {
	   return msg1;
	} else {
	   return msg2;
	}
  }

  get formattedRestMsg():string {
        var rate = Math.round(this.restDiscount/7);
        return ("Spend $" + rate + " less a week at restaurants");
  }

  get formattedRetailMsg():string {
        var rate = Math.round(this.retailDiscount/7);
        console.log("rate"+rate   );
        return ("Spend $" + rate + " less a week on retail");
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
    this.random=4+this.total;
  }

  uberChanged(event) {
    console.log("Uber: " + event.value);
    this.uberDiscount = event.value;	
    this.total = this.wholefoodDiscount + this.uberDiscount + this.salonDiscount + this.restDiscount + this.retailDiscount;
    this.random=2+this.total;
  }

  salonChanged(event) {
    console.log("Salon: " + event.value);
    this.salonDiscount = event.value;	
    this.total = this.wholefoodDiscount + this.uberDiscount + this.salonDiscount + this.restDiscount + this.retailDiscount;
    this.random=3+this.total;
  }

  restChanged(event) {
    console.log("Restaurent: " + event.value);
    this.restDiscount = event.value;	
    this.total = this.wholefoodDiscount + this.uberDiscount + this.salonDiscount + this.restDiscount + this.retailDiscount;
    this.random=5+this.total;
  }

  retailChanged(event) {
    console.log("Retail: " + event.value);
    this.retailDiscount = event.value;	
    this.total = this.wholefoodDiscount + this.uberDiscount + this.salonDiscount + this.retailDiscount;
    this.random=1+this.total;
  }

}
