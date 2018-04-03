import { Pro } from '@ionic/pro';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, Injectable, Injector } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
<<<<<<< HEAD
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
=======
import { CalendarPage } from '../pages/calendar/calendar';
import { CoursesPage } from '../pages/courses/courses';
import { ExtrasPage } from '../pages/extras/extras';
import { GroupsPage } from '../pages/groups/groups';
import { ProfilePage } from '../pages/profile/profile';
import { CareerPage } from '../pages/career/career';
import { MyPavedWayPage } from '../pages/my-paved-way/my-paved-way';
>>>>>>> 1b847678ff93d613923f1c54b7b0c888fb9ecc66

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

<<<<<<< HEAD
import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FirebaseProvider } from '../providers/firebase/firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBUe5CJwSUEexrMtoiNl5PCV9CraFmpRMU",
  authDomain: "pavedway1-1.firebaseapp.com",
  databaseURL: "https://pavedway1-1.firebaseio.com",
  projectId: "pavedway1-1",
  storageBucket: "pavedway1-1.appspot.com",
  messagingSenderId: "1026951207820"
=======
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
>>>>>>> 1b847678ff93d613923f1c54b7b0c888fb9ecc66
}

@NgModule({
  declarations: [
    MyApp,
<<<<<<< HEAD
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage
=======
    CalendarPage,
    CoursesPage,
    ExtrasPage,
    GroupsPage,
    ProfilePage,
    CareerPage,
    MyPavedWayPage
>>>>>>> 1b847678ff93d613923f1c54b7b0c888fb9ecc66
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
<<<<<<< HEAD
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage
=======
    CalendarPage,
    CoursesPage,
    ExtrasPage,
    GroupsPage,
    ProfilePage,
    CareerPage,
    MyPavedWayPage
>>>>>>> 1b847678ff93d613923f1c54b7b0c888fb9ecc66
  ],
  providers: [
    StatusBar,
    SplashScreen,
<<<<<<< HEAD
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider
=======
    IonicErrorHandler,
    {provide: ErrorHandler, useClass: MyErrorHandler}
>>>>>>> 1b847678ff93d613923f1c54b7b0c888fb9ecc66
  ]
})
export class AppModule {}
