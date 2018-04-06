import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CommentsPage } from '../comments/comments';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoursesPage');
  }

  openComments() {
    this.navCtrl.push(CommentsPage);
  }

}
