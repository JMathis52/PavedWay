import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  constructor(public afd: AngularFireDatabase) {
    console.log('Hello FirebaseProvider Provider');
  }

  getClasses() {
    return this.afd.list('/classes/');
  }

  addClass(name) {
    this.afd.list('/classes/').push(name);
  }

  removeClass(id) {
    this.afd.list('/classes/').remove(id);
  }

}
