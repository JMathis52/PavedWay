import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Data } from '../../providers/data';
import { Events } from 'ionic-angular';

/**
 * Generated class for the CoursesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-courses',
  templateUrl: 'courses.html',
})
export class CoursesPage {

  courses = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: Data, public events: Events) {
    this.courses = this.dataService.getDataCourse();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoursesPage');
  }

}
