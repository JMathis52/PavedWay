import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyPavedWayPage');
  }

  highlight(id) {
    //booleans to keep track of if an item is highlighted
    var y1H = false;
    var y2H = false;
    var y3H = false;
    var y4H = false;

    var primary = '#862633';
    var dark = '#000000';

    switch(id) {
      case 'year1':
        if(y1H == false) {
          document.getElementById(id).style.backgroundColor = dark;
          document.getElementById('year2').style.backgroundColor = primary;
          document.getElementById('year3').style.backgroundColor = primary;
          document.getElementById('year4').style.backgroundColor = primary;
          y1H = true;
        }
        break;
      case 'year2':
        if(y2H == false) {
          document.getElementById(id).style.backgroundColor = dark;
          document.getElementById('year1').style.backgroundColor = primary;
          document.getElementById('year3').style.backgroundColor = primary;
          document.getElementById('year4').style.backgroundColor = primary;
          y2H = true;
        }
        break;
      case 'year3':
        if(y3H == false) {
          document.getElementById(id).style.backgroundColor = dark;
          document.getElementById('year1').style.backgroundColor = primary;
          document.getElementById('year2').style.backgroundColor = primary;
          document.getElementById('year4').style.backgroundColor = primary;
          y3H = true;
        }
        break;
      case 'year4':
        if(y4H == false) {
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
