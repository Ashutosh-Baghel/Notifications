import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailsPage } from "../details/details";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: any[] = [{
    image: "assets/img/A.png",time:"9:30 AM",
    heading: "Aakash Educational", description: "New Course Enrollment Info. Analysis by Aakash Institute"
  },
  {
    image: "assets/img/book.png",time:"12:30 PM",
    heading: "Aakash Educational", description: "Consolidated Performance Report"
  },
  {
    image: "assets/img/book.png",time:"4:30 PM",
    heading: "Aakash Educational", description: "Consolidated Performance Report"
  }];
  constructor(public navCtrl: NavController) {

  }
 
  itemSelected(item) {
    this.navCtrl.push(DetailsPage,{
      item:item
    })
  }

}
