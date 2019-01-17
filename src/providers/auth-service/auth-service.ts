import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Api } from '../api/api';
import { Network } from '@ionic-native/network';

export class User {
  name: string;
  email: string;
  id : string  ; 

 
  constructor(name: string, email: string , id : string  ) {
    this.name = name;
    this.email = email;
    this.id = id ; 
  }
}
 
@Injectable()
export class AuthService {
  currentUser: User;
  
 
  constructor( public api: Api, public network : Network) {} 


  public login(credentials) {

    if ( this.network.type == 'none')  { 

      alert("Not connected to internet, some features may not work ") ; 
      return; 

     }


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
    .subscribe( ( data :any ) =>  { 
      console.log("user obj  is " + JSON.stringify(data));  console.log( " login message " + data.Msg) ; 

      if ( JSON.stringify(data)!= "-1" ) { 
         if ( data.Msg !="Login failed") { 
      //console.log( " username " + data.username + "email is "  + data.email)  ; 
      access = true; 
      this.currentUser = new User(data.username , data.email , data.id  );

        localStorage.setItem("loggedUser",this.currentUser.name) ; 
        localStorage.setItem("loggedUserId",this.currentUser.id) ; 
        localStorage.setItem("loggedUserEmail",this.currentUser.email) ; 
        //console.log( " set user in local " + this.currentUser.name + "-" + this.currentUser.id + "-"+ this.currentUser.email ) ; 
        
      //console.log( "name " + data.username + "Mesg"  + data.Msg) ; 

         observer.next("Login successful"); 
       }
         else { observer.next("failed"); console.log(" Login failed" ) ; } 
      }
      else {  observer.next("failed"); console.log(" Login failed" ) ; } 
      /*
      if ( data.Msg == "Login successful")
      observer.next("Login successful");
      else 
      observer.next("Login failed");
      observer.complete();
    */
   
     

     }, error => {
      console.log("got some error  " + JSON.stringify(error));
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