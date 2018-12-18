import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Api } from '../api/api';


 
@Injectable()
export class SaveOrderService {
  
 
  constructor( public api: Api) {} 


  public process(orderData) {
    
      return Observable.create(observer => {
        // At this point make a request to your backend to make a real check!

        var headers = new Headers();
       // headers.append("Accept", 'application/json');
        headers.append('Content-Type',  'application/json' );
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
       
  const requestOptions = new RequestOptions({ headers: headers} )
  let access ; 
  this.api.post("http://ipm-mathemagic.com/api/ipm_save_order/", orderData, requestOptions) 
    .subscribe(data => { 
      console.log(JSON.stringify(data));  
      
     
      //console.log( "name " + data.username + "Mesg"  + data.Msg) ; 

      observer.next(data);
    
   
     

     }, error => {
      console.log("got some error " + JSON.stringify(error));
      access = false;
       observer.next("failed");
       observer.complete();
    });



      });
    }
  }
 
  

