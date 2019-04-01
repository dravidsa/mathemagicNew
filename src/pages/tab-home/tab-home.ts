import { MessagesService } from './../../providers/messages-service/messages-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController} from 'ionic-angular';
import { Network } from '@ionic-native/network';

/**
 * Generated class for the TabHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab-home',
  templateUrl: 'tab-home.html',
})
export class TabsHomePage {

  messages : any ; 
  user : any ; 
  constructor(public navCtrl: NavController,  public alertCtrl : AlertController , public network : Network , public navParams: NavParams , public messagesService : MessagesService) {

    if ( this.network.type == 'none')  { 

      alert("Not connected to internet, some features may not work ") ; 
      return; 

     }


    this.messagesService.getMessages().subscribe( data => { 
     // console.log( "got this  data  " + JSON.stringify( data )) ; 
      this.messages = this.messagesService.messages; 
      this.user = localStorage.getItem("loggedUser") ;  console.log( " User is " + this.user );
      if ( this.user == null ) { console.log ( "null user go to loing ") ;
        this.navCtrl.setRoot("LoginPage") ; 
    }
      ; 
  
    });



  }

  public  logout()  {
        
     let confirmAlert = this.alertCtrl.create({
       title: 'Are you Sure?',
       message: "This will log you out of the app " ,
       buttons: [
         {
           text: 'No',
           handler: () => {
             console.log('Disagree clicked');
           }
         },
         {
           text: 'Yes',
           handler: () => {
             console.log('Agree clicked');
             localStorage.removeItem("loggedUser") ; 
             this.navCtrl.setRoot('LoginPage');
           
             // Your Imagination should go here
           }
         }
       ]
     });
     confirmAlert.present();
   }

  

  ionViewDidLoad() {
   //console.log('ionViewDidLoad TabsHomePage');
  }

}
