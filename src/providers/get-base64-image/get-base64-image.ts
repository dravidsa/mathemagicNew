import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Api } from '../api/api';

/*
  Generated class for the TestsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GetBase64ImageService{

  public base64Image:  any ; 


  constructor( public api: Api) {
    console.log('Hello GetBase64Image Provider');
  }

  public getBase64Image( img_url) { 
 
      return Observable.create(observer => {
        // At this point make a request to your backend to make a real check!
        //console.log(  "getting courses for user" + username ); 
        var headers = new Headers();
        headers.append("Access-Control-Allow-Origin","'*'") ; 
        headers.append("Accept", 'application/json');
       // headers.append('Content-Type',  'application/json' );
        //headers.append('Response-Type', 'Blob') ; 
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
        /*
        let myParams = new URLSearchParams();
        myParams.append('username',username);	
    let options = new RequestOptions({ headers: headers, params: myParams });
         */

  console.log(  "getting base64 for url" +img_url ); 
  const params = new HttpParams ( ) ; 
  //params.append ( 'responseType ' , 'blob' ) ; 

   const requestOptions = new RequestOptions({ headers: headers}  ) 
  this.api.get("http://ipm-mathemagic.com/newlearning/api/getBase64Image1/?img_url="+ img_url,null ,  {responseType : 'text'}  ) 
    .subscribe(data => { 
      //console.log(JSON.stringify(data));  
      this.base64Image = data ; 

      observer.next ( img_url) ; 
      observer.complete(); 
  
      
     }, error => {
      console.log("got some error  " + JSON.stringify(error));
     
       observer.next("failed");
       observer.complete();
    });

     })
    }
  }