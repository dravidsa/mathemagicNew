import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { CoursesService } from '../../providers/courses-service/courses-service';
 
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading: Loading;
  registerCredentials = { username: 'sandra', password: 'sandeep123' };
 
  constructor(private nav: NavController, private auth: AuthService, private courses : CoursesService , private alertCtrl: AlertController, private loadingCtrl: LoadingController) { }
 
  public createAccount() {
    this.nav.push('RegisterPage');
  }
 
  public login() {
    console.log( "got credentials " + JSON.stringify( this.registerCredentials)) ; 

    this.showLoading()
    this.auth.login(this.registerCredentials).subscribe(loginMessage => {
      console.log ( "allowed is " + loginMessage ) ; 
     // next: value => console.log("next vvalue" + value  ) ; 
      
      //console.log ( " back here allowed is" + allowed )
      if (loginMessage == "Login successful") {        
        //console.log( " calling courses") ; 
      
     
      this.courses.getCoursesForUser(this.registerCredentials.username).subscribe( data => { 
      console.log( "got this data " + JSON.stringify( data )) ; 
      this.nav.setRoot('MenuPage');
      });
  
  

        this.nav.setRoot('TabsHomePage');

        
      } else {
        console.log( "failed ") ; 
        this.showError("Access Denied");
      }
    },
      error => {
        this.showError(error);
      });
  }
 
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }
 
  showError(text) {
    this.loading.dismiss();
 
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    //alert.present(prompt);
  }
}