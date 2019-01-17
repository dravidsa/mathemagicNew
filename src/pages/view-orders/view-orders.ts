import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GetOrdersProvider } from '../../providers/get-orders/get-orders';

/**
 * Generated class for the ViewOrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-orders',
  templateUrl: 'view-orders.html',
})




export class ViewOrdersPage {
  currentUserId : any; 
  orders : any ; 

  constructor(public navCtrl: NavController, public navParams: NavParams , public getOrders : GetOrdersProvider) {
    this.orders = navParams.get("orders") ; 
    
 }



  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewOrdersPage');
  }

}
