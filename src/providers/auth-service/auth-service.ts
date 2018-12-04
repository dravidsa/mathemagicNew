import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Api } from '../api/api';

export class User {
  name: string;
  email: string;
 
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}
 
@Injectable()
export class AuthService {
  currentUser: User;
 
  constructor( public api: Api) {} 


  public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        // At this point make a request to your backend to make a real check!

        var headers = new Headers();
       // headers.append("Accept", 'application/json');
        headers.append('Content-Type',  'application/json' );
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
      

      
        let postData = credentials;  

  const requestOptions = new RequestOptions({ headers: headers} )
  let access ; 
  this.api.post("http://ipm-mathemagic.com/api/userlogin/", postData, requestOptions) 
    .subscribe(data => { 
      console.log(JSON.stringify(data));  
      access = true; 
      this.currentUser = new User("XXX", "YYY");
      //console.log( "name " + data.username + "Mesg"  + data.Msg) ; 

      observer.next("Login successful");
      /*
      if ( data.Msg == "Login successful")
      observer.next("Login successful");
      else 
      observer.next("Login failed");
      observer.complete();
    */
   
     

     }, error => {
      console.log("got some error " + JSON.stringify(error));
      access = false;
       observer.next("failed");
       observer.complete();
    });




        /*
        access = (credentials.password === "pass" && credentials.email === "email");
        this.currentUser = new User('Simon', 'saimon@devdactic.com');
        observer.next(access);
        observer.complete();
        */

      });
    }
  }
 
  public register(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      // At this point store the credentials to your backend!
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }
 
  public getUserInfo() : User {
    return this.currentUser;
  }
 
  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}