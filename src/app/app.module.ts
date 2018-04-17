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
<<<<<<< HEAD
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
=======
import { ProfileDetailPage } from '../pages/profile-detail/profile-detail';
>>>>>>> 1cae3065936d8256ddeb3854e3958466ecd1d858

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Data } from '../providers/data';

//Social Logins
import { SocialLoginModule, AuthServiceConfig, FacebookLoginProvider } from 'angular5-social-login';

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

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig([
    {
      id: FacebookLoginProvider.PROVIDER_ID,
      provider: new FacebookLoginProvider("594578054240923")
    }
  ]);
  return config;
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
<<<<<<< HEAD
    RegisterPage,
    LoginPage
=======
    ProfileDetailPage
>>>>>>> 1cae3065936d8256ddeb3854e3958466ecd1d858
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SocialLoginModule
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
<<<<<<< HEAD
    RegisterPage,
    LoginPage
=======
    ProfileDetailPage
>>>>>>> 1cae3065936d8256ddeb3854e3958466ecd1d858
  ],
  providers: [
    StatusBar,
    SplashScreen,
    IonicErrorHandler,
    {provide: ErrorHandler, useClass: MyErrorHandler},
    Data,
    { provide: AuthServiceConfig, useFactory: getAuthServiceConfigs },
  ]
})
export class AppModule {}
