import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BuyProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buy-product',
  templateUrl: 'buy-product.html',
})
export class BuyProductPage {

  productId : any  ; 
  productName : any ; 

  productPrice : any ; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.productId =  navParams.get("productId");
    this.productName =  navParams.get("productName");
    this.productPrice =  navParams.get("productPrice");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyProductPage');
  }

}
