import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data';
import { Events } from 'ionic-angular';
import { CommentsPage } from '../comments/comments';
import { AddEventPage } from '../add-event/add-event';


/**
 * Generated class for the CoursesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-extras',
  templateUrl: 'extras.html',
})
export class ExtrasPage {

  extras = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: Data, public events: Events) {
    this.extras = this.dataService.getDataEvents();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExtrasPage');
  }

  openComments() {
    this.navCtrl.push(CommentsPage);
  }


  addEvent() {
  	this.navCtrl.push(AddEventPage);
  }

}
