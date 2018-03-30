import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { CalendarPage } from '../pages/calendar/calendar';
import { CoursesPage } from '../pages/courses/courses';
import { ExtrasPage } from '../pages/extras/extras';
import { GroupsPage } from '../pages/groups/groups';
import { ProfilePage } from '../pages/profile/profile';
import { CareerPage } from '../pages/career/career';
import { MyPavedWayPage } from '../pages/my-paved-way/my-paved-way';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    CalendarPage,
    CoursesPage,
    ExtrasPage,
    GroupsPage,
    ProfilePage,
    CareerPage,
    MyPavedWayPage
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
    MyPavedWayPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
