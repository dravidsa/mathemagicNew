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
export class TestsService{

  public tests : any  ; 


  constructor( public api: Api) {
    console.log('Hello TestsServiceProvider Provider');
  }

  public getTestsForCourse( courseid) { 
  console.log( " called me " + courseid ) ; 
    return Observable.create(observer => {
      // At this point make a request to your backend to make a real check!
      //console.log(  "getting courses for user" + username ); 
      var headers = new Headers();
     // headers.append("Accept", 'application/json');
      headers.append('Content-Type',  'application/json' );
      headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
      /*
      let myParams = new URLSearchParams();
      myParams.append('username',username);	
  let options = new RequestOptions({ headers: headers, params: myParams });
       */

console.log(  "getting tests  for courses" + courseid ); 

// const requestOptions = new RequestOptions({ headers: headers} )
this.api.get("http://ipm-mathemagic.com/newlearning/api/getTests/?courseid="+courseid) 
  .subscribe(data => { 
    console.log(JSON.stringify(data));  
    this.tests = data ; 

    observer.next ( "got tests") ; 
    observer.complete(); 

    
   }, error => {
    console.log("got some error " + JSON.stringify(error));
   
     observer.next("failed");
     observer.complete();
  });

   })
  }



}
