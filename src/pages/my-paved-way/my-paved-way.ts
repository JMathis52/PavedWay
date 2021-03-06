import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { } from '@types/googlemaps';

import { Data } from '../../providers/data';

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
  extra: string = 'events';

  coursesFall = {
    1 : [],
    2 : [],
    3 : [],
    4 : []
  };
  coursesSpring = {
    1 : [],
    2 : [],
    3 : [],
    4 : []
  };

  years = {
    1 : {
      'Fall' : 2017,
      'Spring' : 2018
    },
    2 : {
      'Fall' : 2018,
      'Spring' : 2019
    },
    3 : {
      'Fall' : 2019,
      'Spring' : 2020
    },
    4 : {
      'Fall' : 2020,
      'Spring' : 2021
    }
  };

  currentYear = 1;

  extras = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public popCtrl: PopoverController, public dataService: Data) {
    var i;
    for(i = 0; i < 4; i++) {
      this.coursesFall[i+1] = this.dataService.getCoursesFall(this.years[i+1].Fall);
    }
    for(i = 0; i < 4; i++) {
      this.coursesSpring[i+1] = this.dataService.getCoursesSpring(this.years[i+1].Spring);
    }
    this.extras = this.dataService.getDataEvents();
  }

  ionViewDidLoad() {this.semester = "fall";
    console.log('ionViewDidLoad MyPavedWayPage');
  }

  /*
   * highlight(id)
   * This function is used to show the curthis.semester = "fall";rent highlighted year
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
    var y3H = false;this.semester = "fall";
    var y4H = false;

    var primary = '#862633';
    var light = '#f4f4f4';

    switch(id) {
      case 'year1':
        if(y1H == false) {
          //Setting background-color
          document.getElementById(id).style.backgroundColor = primary;
          document.getElementById('year2').style.backgroundColor = light;
          document.getElementById('year3').style.backgroundColor = light;
          document.getElementById('year4').style.backgroundColor = light;
          //Setting text-color
          document.getElementById(id).style.color = light;
          document.getElementById('year2').style.color = primary;
          document.getElementById('year3').style.color = primary;
          document.getElementById('year4').style.color = primary;
          y1H = true;
          this.currentYear = 1;
          this.semester = "fall";
        }
        break;
      case 'year2':
        if(y2H == false) {
          //Setting background-color
          document.getElementById(id).style.backgroundColor = primary;
          document.getElementById('year1').style.backgroundColor = light;
          document.getElementById('year3').style.backgroundColor = light;
          document.getElementById('year4').style.backgroundColor = light;
          //Setting text-color
          document.getElementById(id).style.color = light;
          document.getElementById('year1').style.color = primary;
          document.getElementById('year3').style.color = primary;
          document.getElementById('year4').style.color = primary;
          y2H = true;
          this.currentYear = 2;
          this.semester = "fall";
        }
        break;
      case 'year3':
        if(y3H == false) {
          //Setting background-color
          document.getElementById(id).style.backgroundColor = primary;
          document.getElementById('year1').style.backgroundColor = light;
          document.getElementById('year2').style.backgroundColor = light;
          document.getElementById('year4').style.backgroundColor = light;
          //Setting text-color
          document.getElementById(id).style.color = light;
          document.getElementById('year1').style.color = primary;
          document.getElementById('year2').style.color = primary;
          document.getElementById('year4').style.color = primary;
          y3H = true;
          this.currentYear = 3;
          this.semester = "fall";
        }
        break;
      case 'year4':
        if(y4H == false) {
          //Setting background-color
          document.getElementById(id).style.backgroundColor = primary;
          document.getElementById('year1').style.backgroundColor = light;
          document.getElementById('year2').style.backgroundColor = light;
          document.getElementById('year3').style.backgroundColor = light;
          //Setting text-color
          document.getElementById(id).style.color = light;
          document.getElementById('year1').style.color = primary;
          document.getElementById('year2').style.color = primary;
          document.getElementById('year3').style.color = primary;
          y4H = true;
          this.currentYear = 4;
          this.semester = "fall";
        }
        break;
    }
  }

}
