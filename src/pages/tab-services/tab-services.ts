import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GetOrdersProvider } from '../../providers/get-orders/get-orders';

/**
 * Generated class for the TabServicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab-services',
  templateUrl: 'tab-services.html',
})
export class TabServicesPage {
currentUserId : any ; 
orders : any ; 
user : any ; 
  constructor(public navCtrl: NavController, public navParams: NavParams , public getOrders : GetOrdersProvider) {
    this.user = localStorage.getItem("loggedUser") ;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabServicesPage');
  }
  public viewOrders( ) {

    this.currentUserId = localStorage.getItem("loggedUserId") ; 

    this.getOrders.getOrders(this.currentUserId).subscribe( data => { 
      //console.log( "got this data " + JSON.stringify( data )) ; 
      this.orders = this.getOrders.orders ;  
      this.navCtrl.setRoot('ViewOrdersPage'  ,{ 'orders' : this.orders } ) ; 
      
      ; 
  
    });
 
  }
  public  logout()  {
   
  
    localStorage.removeItem("loggedUser") ; 
  
    this.navCtrl.setRoot('LoginPage');
  
    }
    
  public viewTests(){ 
  this.navCtrl.setRoot('TestsListPage', { calledFrom : 'services' }   ) ; 

    

  } 
}
