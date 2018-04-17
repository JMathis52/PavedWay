import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { } from '@types/googlemaps';
import { Data } from '../../providers/data';
import { Parse } from 'parse';

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

  map;

  markers = [];

  ngOnInit() {
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: Data) {
    this.courses = this.dataService.getDataCourse();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
    this.setMarkers();
  }

  ionViewDidEnter() {
    this.initMap();
  }

  initMap() {
    var usc = {lat: 33.9961, lng: -81.0274};
    this.map = new google.maps.Map(document.getElementById('googleMap'), {
      zoom: 15,
      center: usc,
      streetViewControl: false,
      mapTypeControl: false,
      zoomControl: false,
      fullscreenControl: false
    });
  }

  setMarkers() {
    const Course = Parse.Object.extend('Course');
    let query = new Parse.Query(Course);
    query.limit(1000);
    query.find().then((courses) => {
      for (var i = 0; i < courses.length; i++) {
          if(courses[i].get("year") == 2017 && courses[i].get("semester") == 'Fall') {
             var loc = {lat: courses[i].get("lat"), lng: courses[i].get("long")};
             this.markers[i] = this.addMarker(loc, this.map);
          }
      }

    }, (error) => {
      // reject(error);
      console.log("error");
    });
  }

  addMarker(position, map) {
    var contentString =
    '<div class="container">'+
    '<h1>Test Title</h1>'+
    '<p>Test ID</p'+
    '</div>';
    var infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 400
    })
    var marker = new google.maps.Marker({
      position: position,
      map: map
    });
    marker.addListener('click', function() {
      infowindow.open(map, marker);
      map.panTo(marker.getPosition());
    });
  }


}
