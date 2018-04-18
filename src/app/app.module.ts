import { Pro } from '@ionic/pro';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, Injectable, Injector } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
//import { CalendarPage } from '../pages/calendar/calendar';
import { CoursesPage } from '../pages/courses/courses';
import { ExtrasPage } from '../pages/extras/extras';
//import { GroupsPage } from '../pages/groups/groups';
import { ProfilePage } from '../pages/profile/profile';
//import { CareerPage } from '../pages/career/career';
import { MyPavedWayPage } from '../pages/my-paved-way/my-paved-way';
import { MapPage } from '../pages/map/map';
import { CommentsPage } from '../pages/comments/comments';
import { ProfileDetailPage } from '../pages/profile-detail/profile-detail';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Data } from '../providers/data';

//Social Logins
import { Facebook } from '@ionic-native/facebook';

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
    //CalendarPage,
    CoursesPage,
    ExtrasPage,
    //GroupsPage,
    ProfilePage,
    //CareerPage,
    MyPavedWayPage,
    MapPage,
    CommentsPage,
    LoginPage,
    RegisterPage,
    ProfileDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //SocialLoginModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //CalendarPage,
    CoursesPage,
    ExtrasPage,
    //GroupsPage,
    ProfilePage,
    //CareerPage,
    MyPavedWayPage,
    MapPage,
    CommentsPage,
    LoginPage,
    RegisterPage,
    ProfileDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    IonicErrorHandler,
    Facebook,
    {provide: ErrorHandler, useClass: MyErrorHandler},
    Data,
    //{ provide: AuthServiceConfig, useFactory: getAuthServiceConfigs },
  ]
})
export class AppModule {}
