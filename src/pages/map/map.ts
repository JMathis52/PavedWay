import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { } from '@types/googlemaps';

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



  ngOnInit() {
    var classes = [
      {lat: 33.9893, lng: -81.0295},
      {lat: 33.9893, lng: -81.0295},
      {lat: 33.9982, lng: -81.0253},
      {lat: 33.9945, lng: -81.0334},
      {lat: 33.9900, lng: -81.0284}
    ];

    var usc = {lat: 33.9961, lng: -81.0274};
    var map = new google.maps.Map(document.getElementById('googleMap'), {
      zoom: 15,
      center: usc
    });

    var labels = ['CSCE 350', 'CSCE 350','CSCE 350','CSCE 350','CSCE 350'];

    var markers = classes.map(function(class1, i) {
      return new google.maps.Marker({
        position: class1,
        label: labels[i]
      });
    });

    var markerCluster = new MarkerClusterer(map, markers,
    {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
  }

}
