import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from './../api/api';
import {Observable} from 'rxjs/Observable';


/*
  Generated class for the GetOrdersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GetOrdersProvider {
orders : any ; 


  constructor(public http: HttpClient , public api : Api ) {
    console.log('Hello GetOrdersProvider Provider');
  }

  public getOrders(userid ) { 
  
  return Observable.create(observer => {
   
    var headers = new Headers();
  
    headers.append('Content-Type',  'application/json' );
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');


    console.log(  "getting orders" ); 
 this.api.get("http://ipm-mathemagic.com/newlearning/api/ipm_my_orders/?userid=" +userid )  
.subscribe(data => { 
  console.log(JSON.stringify(data));  
  this.orders = data ; 

  observer.next ( "got orders") ; 
  observer.complete(); 

  
 }, error => {
  console.log("got some error " + JSON.stringify(error));
 
   observer.next("failed");
   observer.complete();
});

 })
}
} 

