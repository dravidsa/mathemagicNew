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
testsValidTill : any ; 
downloadedValid : any ; 

  constructor(public navCtrl: NavController, public navParams: NavParams , public getOrders : GetOrdersProvider) {
    this.user = localStorage.getItem("loggedUser") ;
    //this.testsValidTill = new Date("03/25/2019") ; 
    this.testsValidTill =  new Date(Date.parse(localStorage.getItem("testsValidTill")) )  ; 
    //this.testsValidTill =  new Date(Date.parse("30-APR-2019") )  ; 
    console.log ( "Tests are valid till " +   this.testsValidTill  + 'in date ' +  this.testsValidTill )  ; 
    if ( new Date() > this.testsValidTill){

        console.log ( "tests are not valid anymore ") ; 
      this.downloadedValid = false  ; 
      localStorage.setItem("downloadedTests","") ; 

    } 
      else this.downloadedValid  = true ; 
    
      if ( this.user == null ) { console.log ( "null user go to loing ") ;
        this.navCtrl.setRoot("LoginPage") ; 
    }
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
