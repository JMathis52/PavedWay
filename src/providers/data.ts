import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
//Parse
import { Parse } from 'parse';

@Injectable()
export class Data {

  //User variables
  username;
  password;
  email;

  //Course variables
  courseName;
  courseID;
  courseLocName;
  courseLocation;
  courseProf;
  courseSem;
  courseYear;


  //Events variables
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

  //ParseDB info
  private parseAppId: string = '5bQx4LafA7p6c2U07077xKzM4o5wjJ7dKfz1TvEl';
  private parseJSKey: string = 'HNw9mQOSKuufdS1AsR3vlUP9Gf8h5wsDFQJ3hhKG';
  private parseServerUrl: string = 'https://parseapi.back4app.com/';


  constructor(public events: Events) {
    Parse.initialize(this.parseAppId, this.parseJSKey);
    Parse.serverURL = this.parseServerUrl;

    console.log('Initiated Parse');
  }

  getDataCourse() {
    const Course = Parse.Object.extend('Course');
    let query = new Parse.Query(Course);
    query.limit(1000);
    var items=[];
    query.find().then((courses) => {
      for (var i = courses.length - 1; i >= 0; i--) {
         var myCourse = {
           courseName:courses[i].get("name"),
           courseID:courses[i].get("CourseID"),
           courseLocName:courses[i].get("locationName"),
           courseLocation:courses[i].get("location"),
           courseProf:courses[i].get("professor"),
           courseSem:courses[i].get("semester"),
           courseYear:courses[i].get("year")
         }
         items.push(myCourse);
      }
    }, (error) => {
      // reject(error);
      console.log("error");
    });
    return items;
  }

  getDataEvents() {
    const Events = Parse.Object.extend('Events');
    let query = new Parse.Query(Events);
    query.limit(1000);
    var items=[];
    query.find().then((eve) => {
      for (var i = eve.length - 1; i >= 0; i--) {
         var myEvents = {
           eventsName:eve[i].get("name"),
           eventsDate:eve[i].get("date"),
           eventsLocName:eve[i].get("locationName"),
           eventsLocation:eve[i].get("location"),
           eventsLat:eve[i].get("eventsLat"),
           eventsLong:eve[i].get("eventsLong"),
           eventsCreator:eve[i].get("eventCreator"),
           eventsDesc:eve[i].get("description"),
           eventsTag1:eve[i].get("tag1"),
           eventsTag2:eve[i].get("tag2"),
           eventsTag3:eve[i].get("tag3"),
         }
         items.push(myEvents);
      }
    }, (error) => {
      // reject(error);
      console.log("error");
    });

    return items;
  }

  setEventsItem(eventsName, eventsDate, eventsLocName, eventsLocation, eventsCreator) {
    let item = {
      name: eventsName,
      date: eventsDate,
      locName: eventsLocName,
      location: eventsLocation,
      creator: eventsCreator
    };

    this.saveEventsItem(item);
  }

  saveEventsItem(item) {
    var Events = Parse.Object.extend("Events");
    var eve = new Events();

    eve.set("name", item.name);
    eve.set("locationName", item.locName);
    eve.set("location", item.location);
    eve.set("eventCreator", item.creator);
    eve.set("date", item.date);

    var self = this;
    eve.save(null, {
      success: function(eve) {
        console.log('New event created with objectId: ' + eve.id);
        let newEve = {
          name: item.name,
          date: item.date,
          locName: item.locName,
          location: item.location,
          creator: item.creator
        };
        self.events.publish("newEve", newEve);
      },
      error: function(eve, error) {
        alert('Failed to create new object, with error code: ' + error.code + " " + error.message);
      }
    });
  }

  getCoursesFall(year) {
    const Course = Parse.Object.extend('Course');
    let query = new Parse.Query(Course);
    query.limit(1000);
    var items=[];
    query.find().then((courses) => {
      for (var i = courses.length - 1; i >= 0; i--) {
        if((courses[i].get("semester") == "Fall") && (courses[i].get("year") == year)) {
          var myCourse = {
            courseName:courses[i].get("name"),
            courseID:courses[i].get("CourseID"),
            courseLocName:courses[i].get("locationName"),
            courseLocation:courses[i].get("location"),
            courseProf:courses[i].get("professor"),
            courseSem:courses[i].get("semester"),
            courseYear:courses[i].get("year")
          }
          items.push(myCourse);
        }
      }
    }, (error) => {
      // reject(error);
      console.log("error");
    });
    return items;
  }

  getCoursesSpring(year) {
    const Course = Parse.Object.extend('Course');
    let query = new Parse.Query(Course);
    query.limit(1000);
    var items=[];
    query.find().then((courses) => {
      for (var i = courses.length - 1; i >= 0; i--) {
        if((courses[i].get("semester") == "Spring") && (courses[i].get("year") == year)) {
          var myCourse = {
            courseName:courses[i].get("name"),
            courseID:courses[i].get("CourseID"),
            courseLocName:courses[i].get("locationName"),
            courseLocation:courses[i].get("location"),
            courseProf:courses[i].get("professor"),
            courseSem:courses[i].get("semester"),
            courseYear:courses[i].get("year")
          }
          items.push(myCourse);
        }
      }
    }, (error) => {
      // reject(error);
      console.log("error");
    });
    return items;
  }

}
