import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { CoursesService } from '../../providers/courses-service/courses-service';
import { Network } from '@ionic-native/network';
 

 
import { MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading: Loading;
  appVersionCode : any  ; 
 

  //registerCredentials = { username: 'sandra', password: 'sandeep123' };
  registerCredentials = { username: '', password: '' };
 

  constructor(private nav: NavController, private auth: AuthService, public network : Network   , menu : MenuController ,    private courses : CoursesService , private alertCtrl: AlertController, private loadingCtrl: LoadingController) {

   
    
    menu.enable(false, 'leftMenu');

    if (localStorage.getItem("loggedUser") != null  ) {
   
      this.showLoading() ; 
      
      console.log( " already logged in as " + localStorage.getItem("loggedUser")) ; 
      this.courses.getCoursesForUser( localStorage.getItem("loggedUser")).subscribe( data => { 
        console.log( "got this data for courses for user logged in  " + JSON.stringify( data )) ;

        this.nav.setRoot('MenuPage');
        });

     // this.nav.setRoot('MenuPage');

    }
    else console.log( " not logged in ") ; 
   }
  public createAccount() {
    this.nav.push('RegisterPage');
  }

  public login() {
    if ( this.network.type == 'none')  { 
      alert("Not connected to internet, some features may not work ") ; 
      return; 
     }
    console.log( "got credentials " + JSON.stringify( this.registerCredentials)) ; 
    this.showLoading()
    this.auth.login(this.registerCredentials).subscribe(loginMessage => {
      console.log ( "allowed is  " + loginMessage ) ; 
     // next: value => console.log("next vvalue" + value  ) ; 
  
      //console.log ( " back here allowed is" + allowed )
      if (loginMessage == "Login successful") {        
        console.log( "set logged in user as " + localStorage.getItem("loggedUser")) ; 
        //console.log( " calling courses") ; 
      this.courses.getCoursesForUser(this.registerCredentials.username).subscribe( data => { 
      console.log( "got this data  " + JSON.stringify( data )) ; 
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
      title: 'Invalid userid or Password. ',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(alert);
  }
}