import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//Social Logins
import { AuthService, FacebookLoginProvider } from 'angular5-social-login';

@Component({
  selector: 'page-profile-detail',
  templateUrl: 'profile-detail.html',
})
export class ProfileDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private socialAuthService: AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileDetailPage');
  }

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if(socialPlatform == "facebook") {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform + " sign in data: ", userData)
      }
    );
  }
  
}
