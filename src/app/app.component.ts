import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CalendarPage } from '../pages/calendar/calendar';
import { CoursesPage } from '../pages/courses/courses';
import { ExtrasPage } from '../pages/extras/extras';
import { GroupsPage } from '../pages/groups/groups';
import { ProfilePage } from '../pages/profile/profile';
import { CareerPage } from '../pages/career/career';
import { MyPavedWayPage } from '../pages/my-paved-way/my-paved-way';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = MyPavedWayPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Profile', component: ProfilePage },
      { title: 'My Paved Way', component: MyPavedWayPage },
      { title: 'Courses', component: CoursesPage },
      { title: 'Extracurriculars', component: ExtrasPage },
      { title: 'Career', component: CareerPage },
      { title: 'Groups', component: GroupsPage },
      { title: 'Calendar', component: CalendarPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
