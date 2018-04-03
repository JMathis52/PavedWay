import { Pro } from '@ionic/pro';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, Injectable, Injector } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { CalendarPage } from '../pages/calendar/calendar';
import { CoursesPage } from '../pages/courses/courses';
import { ExtrasPage } from '../pages/extras/extras';
import { GroupsPage } from '../pages/groups/groups';
import { ProfilePage } from '../pages/profile/profile';
import { CareerPage } from '../pages/career/career';
import { MyPavedWayPage } from '../pages/my-paved-way/my-paved-way';
import { MapPage } from '../pages/map/map';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

Pro.init('7e171f6b', {
  appVersion: '0.0.1'
})

@Injectable()
export class MyErrorHandler implements ErrorHandler {
  ionicErrorHandler: IonicErrorHandler;

  constructor(injector: Injector) {
    try {
      this.ionicErrorHandler = injector.get(IonicErrorHandler);
    } catch(e) {
      console.log(e);
    }
  }

  handleError(err: any): void {
    Pro.monitoring.handleNewError(err);

    this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
  }
}

@NgModule({
  declarations: [
    MyApp,
    CalendarPage,
    CoursesPage,
    ExtrasPage,
    GroupsPage,
    ProfilePage,
    CareerPage,
    MyPavedWayPage,
    MapPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CalendarPage,
    CoursesPage,
    ExtrasPage,
    GroupsPage,
    ProfilePage,
    CareerPage,
    MyPavedWayPage,
    MapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    IonicErrorHandler,
    {provide: ErrorHandler, useClass: MyErrorHandler}
  ]
})
export class AppModule {}
