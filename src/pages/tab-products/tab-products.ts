import { BuyProductPage } from './../buy-product/buy-product';
import { ProductsService } from './../../providers/products-service/products-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TabProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab-products',
  templateUrl: 'tab-products.html',
})
export class TabProductsPage {
products : any ; 

  constructor(public navCtrl: NavController, public navParams: NavParams, public productsService : ProductsService) {

    this.productsService.getProducts().subscribe( data => { 
      console.log( "got this data " + JSON.stringify( data )) ; 
      this.products = this.productsService.products; 
      
      ; 
  
    });

  }

  public  buyProduct( productName , productId, productPrice , productImage   ) { 

   console.log( "going to   buy" + productName ) ; 

   this.navCtrl.setRoot('BuyProductPage' , { productId : productId , productName : productName, productPrice : productPrice , img_src : productImage  });



  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TabProductsPage');
  }

}
