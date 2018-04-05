import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';

import ( Geolocation, GeolocationOptions, Geoposition, PositionError ) from '@ionic-native/geolocation';

//import { CoursesPage } from '../courses/courses';

/**
 * Generated class for the MyPavedWayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 declare var google;

@Component({
  selector: 'page-my-paved-way',
  templateUrl: 'my-paved-way.html',
})
export class MyPavedWayPage {


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

  options: GeolocationOptions;
  currentPos: Geoposition;
  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public popCtrl: PopoverController, private geolocation: Geolocation) {
  }

  getUserPosition() {
    this.options = {
      enableHighAccuracy : false;
    };

    this.geolocation.getCurrentPosition(this.options).then((pos : Geoposition) => {
      this.currentPos = pos;
      console.log(pos);
      this.addMap(pos.coords.latitude, pos.coords.longitude);
    },(err:PositionError) => {
      console.log("error :");
    });
  }

  addMap(lat, long) {
    let latLng = new google.maps.LatLng(lat, long);

    let mapOptions = {
      center:latLng,
      zoom:15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    //this.addMarker();
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad MyPavedWayPage');
    this.getUserPosition();
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
