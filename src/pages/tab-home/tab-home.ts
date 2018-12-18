import { MessagesService } from './../../providers/messages-service/messages-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams , public messagesService : MessagesService) {

    this.messagesService.getMessages().subscribe( data => { 
      console.log( "got this  data  " + JSON.stringify( data )) ; 
      this.messages = this.messagesService.messages; 
      
      ; 
  
    });



  }

  public  logout()  {
   
  
  localStorage.removeItem("loggedUser") ; 

  this.navCtrl.setRoot('LoginPage');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsHomePage');
  }

}
