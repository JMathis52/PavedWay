import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { } from '@types/googlemaps';
import { Data } from '../../providers/data';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  courses = [];

  ngOnInit() {

  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: Data) {
    this.courses = this.dataService.getDataCourse();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
    this.initMap();
    console.log(this.courses);
  }

  initMap() {
    var usc = {lat: 33.9961, lng: -81.0274};
    var map = new google.maps.Map(document.getElementById('googleMap'), {
      zoom: 15,
      center: usc
    });
    for(course in this.courses) {
      var marker = new google.maps.Marker({
        position: course.courseLocation,
        title: course.courseID,
        map: map
      });
    }
  }


}
