import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { RegisterPage } from '../register/register';
import { ProfilePage } from '../profile/profile';
import { MyPavedWayPage } from '../my-paved-way/my-paved-way';
import { Parse } from 'parse';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  userData = null;
  registerPage = RegisterPage;
  password: string = '';
  username: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: Facebook) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginWithFB() {
    this.fb.login(['email', 'public_profile']).then((response: FacebookLoginResponse) => {
      this.fb.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
        this.userData = {email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name']};
      });
    });

    var self=this;
    Parse.User.logIn(this.userData.username, {
      success: function(user) {
        console.log("logged in "+user.get("username"));
        self.navCtrl.setRoot(ProfilePage);
      },
      error: function(user, error) {
      // The login failed. Check error to see why.
      }
    });

    //email is saved under {{userData.email}}
    //username is saved under {{userData.username}}
    //picture is saved under {{userData.picture}}
  }

  public doSignin() {
    // var self=this;
    // Parse.User.logIn(this.username, this.password, {
    //   success: function(user) {
    //   console.log("logged in "+user.get("username"));
    //   self.navCtrl.setRoot(ProfilePage);
    //   },
    //   error: function(user, error) {
    //   // The login failed. Check error to see why.
    //   }
    // });
    this.navCtrl.setRoot(MyPavedWayPage);
  }

}
