import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { } from '@types/googlemaps';

//import { CoursesPage } from '../courses/courses';

/**
 * Generated class for the MyPavedWayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-my-paved-way',
  templateUrl: 'my-paved-way.html',
})
export class MyPavedWayPage {


  ngOnInit() {
  }

  semester: string = "fall";
  coursesFall = [
    "CSCE 350",
    "CSCE 311",
    "CSCE 546",
    "CSCE 390",
    "MATH 300"
  ];

  coursesSpring = [
    "CSCE 330",
    "PHYS 211",
    "CHEM 112",
    "MATH 242",
    "CSCE 240"
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public popCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyPavedWayPage');
  }

  /*
   * highlight(id)
   * This function is used to show the current highlighted year
   * Based on the id passed into the function, it will highlight
   * that button as the active button.
   *
   * @params id
   *
   */
  highlight(id) {
    //booleans to keep track of if an item is highlighted
    var y1H = false;
    var y2H = false;
    var y3H = false;
    var y4H = false;

    var primary = '#862633';
    var dark = '#000000';
    var light = '#f4f4f4';


    switch(id) {
      case 'year1':
        if(y1H == false) {
          //Setting background-color
          document.getElementById(id).style.backgroundColor = dark;
          document.getElementById('year2').style.backgroundColor = primary;
          document.getElementById('year3').style.backgroundColor = primary;
          document.getElementById('year4').style.backgroundColor = primary;
          y1H = true;
        }
        break;
      case 'year2':
        if(y2H == false) {
          //Setting background-color
          document.getElementById(id).style.backgroundColor = dark;
          document.getElementById('year1').style.backgroundColor = primary;
          document.getElementById('year3').style.backgroundColor = primary;
          document.getElementById('year4').style.backgroundColor = primary;
          y2H = true;
        }
        break;
      case 'year3':
        if(y3H == false) {
          //Setting background-color
          document.getElementById(id).style.backgroundColor = dark;
          document.getElementById('year1').style.backgroundColor = primary;
          document.getElementById('year2').style.backgroundColor = primary;
          document.getElementById('year4').style.backgroundColor = primary;
          y3H = true;
        }
        break;
      case 'year4':
        if(y4H == false) {
          //Setting background-color
          document.getElementById(id).style.backgroundColor = dark;
          document.getElementById('year1').style.backgroundColor = primary;
          document.getElementById('year2').style.backgroundColor = primary;
          document.getElementById('year3').style.backgroundColor = primary;
          y4H = true;
        }
        break;
    }
  }

}
