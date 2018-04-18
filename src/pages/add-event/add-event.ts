import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { Data } from '../../providers/data';
import { Parse } from 'parse';
//import { DatePicker } from '@ionic-native/date-picker';



@Component({
  selector: 'page-add-event',
  templateUrl: 'add-event.html',
})
export class AddEventPage {

  eventsName;
  eventsDate;
  eventsLocName;
  eventsLocation;
  eventsLat;
  eventsLong;
  eventsCreator;
  eventsDesc;
  eventsTag1;
  eventsTag2;
  eventsTag3;

  constructor(public navCtrl: NavController, public view: ViewController, public dataService: Data) {

  }

  saveEvent() {

  // this.dataService.setMenuItem(this.itemName, this.price, this.description, this.category, this.url, this.quantity );
var Eve = Parse.Object.extend("Events");
var eve = new Eve();

eve.set("name", this.eventsName);
eve.set("eventCreator", this.eventsCreator);
eve.set("locationName", this.eventsLocName);
eve.set("lat", parseInt(this.eventsLat));
eve.set("long", parseInt(this.eventsLong));
eve.set("date", this.eventsDate);
eve.set("description", this.eventsDesc);
eve.set("tag1", this.eventsTag1);
eve.set("tag2", this.eventsTag2);
eve.set("tag3", this.eventsTag3);



eve.save(null, {
  success: function(eve) {
    // Execute any logic that should take place after the object is saved.
    alert('New object created with objectId: ' + eve.id);
  },
  error: function(eve, error) {
    // Execute any logic that should take place if the save fails.
    // error is a Parse.Error with an error code and message.
    alert('Failed to create new object, with error code: ' + error.message);
  }
});



  this.view.dismiss();

  }

  close() {
    this.view.dismiss();
  }




}
