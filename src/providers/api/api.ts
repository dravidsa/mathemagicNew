import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseType } from '../../../node_modules/@angular/http';

/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class Api {
  url: string = 'https://ipm-mathemagic.com/newlearning/api/';

  constructor(public http: HttpClient) {
    console.log( 'in constructor of api ') ; 
  }

  get(endpoint: string, params?: any, reqOpts?: any ) {
    console.log( " in get ") ; 
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
     
    }

    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
     
      for (let k in params) {
        reqOpts.params = reqOpts.params.set(k, params[k]);
      }
      console.log ( 'param is ' + JSON.stringify(params )  ) ; 
    }
    console.log( " end point is "+ endpoint)
    //return this.http.get(this.url + '/' + endpoint, reqOpts);
    return this.http.get(endpoint, reqOpts);
  }

  post(endpoint: string, body: any, reqOpts?: any) {
    console.log( "got in post " + "end point is " + endpoint , "body is " +JSON.stringify( body )+ "opts are " + JSON.stringify(reqOpts ) ); 
    return this.http.post( endpoint, JSON.stringify(body ) , reqOpts );
    //return this.http.post(this.url + '/' + endpoint, body, reqOpts);
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url + '/' + endpoint, body, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(this.url + '/' + endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.patch(this.url + '/' + endpoint, body, reqOpts);
  }
}
