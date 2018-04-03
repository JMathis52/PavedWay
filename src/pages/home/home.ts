import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  classes: FirebaseListObservable <any[]>;
  newClass = '';

  constructor(public navCtrl: NavController, public firebaseProvider: FirebaseProvider ) {

    this.classes = this.firebaseProvider.getClasses();
  }

  addClass() {
    console.log(this.newClass);
    console.log("Adding class");
    this.firebaseProvider.addClass(this.newClass);
  }

  removeClass(id) {
    this.firebaseProvider.removeClass(id);
  }

}
