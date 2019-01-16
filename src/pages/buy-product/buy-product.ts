import { SaveOrderService } from './../../providers/save-order/save-order';
import { AuthService } from './../../providers/auth-service/auth-service';
import { GetSchoolsService } from './../../providers/get-schools/get-schools';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController , Loading   } from 'ionic-angular';
 import { GetBillingService } from '../../providers/get-billing/get-billing';
import { cordovaWarn, Cordova } from '../../../node_modules/@ionic-native/core';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { USE_DEFAULT_LANG } from '../../../node_modules/@ngx-translate/core';

import { md5 } from './md5';
import { Network } from '@ionic-native/network';

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
  public schoolName =""; 
  public schoolCode = 0 ; 
  refgetSchoolsService : GetSchoolsService ; 

  studentName ="" ; 
  standard = ""; 
  billingName =""; 
 
  billingAddress ='' ; 
  billingCity ="" 
  billingPincode =""; 
  billingState = 428 
  billingPhone : any ; 
  errorMessage : any ; 

  shippingCharges = 125 ; 
  totalCharges = this.productPrice  ; 
  outOfMHCharges = 0 ; 

  email : any ; 
  userid : any; 
  username : any ; 
  billingData : any ; 
  img_src : any ; 
  loading : Loading ; 



  schoolMatched  = false; 
 
  orderData : any ; 
  orderNo = ""  ; 


  states = [ 
		    {
      id: "AP",
      state:"Andhra Pradesh"
    },
    {
      id: "AR",
      state:"Arunachal Pradesh"
    },
    {
      id: "AS",
      state:"Assam"
    },
    {
      id: "BR",
      state:"Bihar"
    },
    {
      id: "CG",
      state:"Chattisgarh"
    },
    {
      id: "DN",
      state:"Dadra Nagar and Haveli"
    },
    {
      id: "GA",
      state:"GOA"
    },
    {
      id: "GJ",
      state:"Gujrat"
    },
    {	id: "HR",
      state:"Haryana"
    },
    {   id: "HP",
      state:"Himachal Pradesh"
    },
    {   id: "JK",
      state:"Jammu and Kashmir"
    },
    { 	id: "JH",
      state:"Jharkhand"
    },
    {   id: "KA",
      state:"Karnataka"
    },
    {
      id: "KL",
      state:"Kerala"
    },
    {	id: "MP",
      state:"Madhya Pradesh"
    },
    {   id: "MN",
      state:"Manipur"
    },
    {   id: "ML",
      state:"Meghalaya"
    },
    {   id: "MZ",
      state:"Mizoram"
    },
    {   id: "NL",
      state:"Nagaland"
    },
    {   id: "OR",
      state:"ORISSA"
    },
    {   id: "PB",
      state:"Punjab"
    },
    {
      id: "PY",
      state:"Pondecherry"
    },
    {   id: "RJ",
      state:"Rajashtan"
    },
    {   id: "SK",
      state:"Sikkim"
    },
    {   id: "TN",
      state:"Tamilnadu"
    },
    {   id: "TR",
      state:"Tripura"
    },
    {   id: "UP",
      state:"Uttar Pradesh"
    },
    {   id: "WB",
      state:"West Bengal"
    } 
    
    ] ; 
  constructor(public navCtrl: NavController,  public loadingCtrl : LoadingController , public network : Network , public theBrowser : InAppBrowser, public navParams: NavParams,public getSchoolsService : GetSchoolsService, authService : AuthService ,public saveOrder : SaveOrderService , public getBilling : GetBillingService , public iab : InAppBrowser ) {

    this.productId =  navParams.get("productId");
    this.productName =  navParams.get("productName");
    this.productPrice =  navParams.get("productPrice");
    this.totalCharges = this.productPrice  ; 
    this.img_src = navParams.get("img_src") ; 
    alert( "net connection is " + this.network.type); 
    
    if ( this.network.type == 'none')  { 

      alert("Not connected to internet, some features may not work ") ; 
      return; 

     } 
    
   

    this.refgetSchoolsService = getSchoolsService   ; 
        console.log ( " in constructo r" + this.productPrice ) ; 
    
    if ( localStorage.getItem("loggedUser") == null ) { 

    this.email = authService.currentUser.email  ; 
    this.userid = authService.currentUser.id ; 
    this.username = authService.currentUser.name ; 
    }
    else 
    {
      console.log( "getting from localstorage") ; 

      this.username = localStorage.getItem("loggedUser") ; 
      this.userid = localStorage.getItem("loggedUserId") ; 
      this.email = localStorage.getItem("loggedUserEmail") ; 
    }
    console.log( "current user name lis " + this.username); 
     getBilling.getBillingAddress( this.username ).subscribe( data => { 
      console.log( "got  this  billing  data   " + JSON.stringify( data )) ; 
      if ( data != "no data") {
        this.billingData = getBilling.billingData  ; 
        console.log( "billing data is " + JSON.stringify(this.billingData)); 
        
        this.billingName = this.billingData[0].name;  
        this.billingAddress = this.billingData[0].address ; 
        this.billingCity = this.billingData[0].city ; 
        this.billingPincode = this.billingData[0].pinCode; 
        this.billingState = this.billingData[0].stateId; 
        this.billingPhone = this.billingData[0].phone ; 
        
      }
      else {
        this.errorMessage = "Error in Saving   Order " ;
        return ; 
      }

     });

    
  }

  public showSchools( schoolName) {

    console.log( " Showing schools with name " + this.schoolName ) ; 
    /*
    this.getSchoolsService.getSchools(this.schoolName).subscribe( data => { 
      console.log( "got this data " + JSON.stringify( data )) ; 
    
    }); 
    */
   this.navCtrl.push('SchoolListPage', { schoolName : this.schoolName} );

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyProductPage'); 

  }
  ionViewWillEnter( ) {
    console.log('ionViewDidLoad BuyProductPage'); 

    if ( (this.productName == 'IPM Book Set ') &&  ( this.productName == 'Online Test') ) { 
    if ( this.refgetSchoolsService != undefined ) {
    this.schoolName  = this.refgetSchoolsService.selectedSchoolName ;
    if ( this.schoolName == undefined ) { 

      this.errorMessage = "Did not  find your school Name , cant continue " ; 
      this.schoolMatched = false ; 
      return ; 

    } 
    
    this.schoolMatched = true;
    this.schoolCode = this.refgetSchoolsService.selectedSchoolId ; 
    this.errorMessage = "" ; 
    console.log ( "lets see  if we enter this  "+ this.schoolName + "code is " + this.schoolCode) ; 
    
    } 
    //console.log ( "coming for the 1st time ");
  } 
  else { console.log( "no need of  school name ") ; }
  }

  public goForPayment() { 
  //this.errorMessage = this.standard+'-'+this.billingAddress+'-'+this.billingCity+'-'+ this.billingPincode+'-'+this.billingName+'-' ; 
    if ( this.standard == '' ||  this.billingName ==''   || this.billingAddress =='' ||  this.billingCity == '' || this.billingPincode == '' || this.billingPhone =='' ) { 
      this.errorMessage = "All Fields are mandatory  " ;  
      return; 
    }

      if ( ( this.productName == 'Supreme') || ( this.productName == 'IPM 2019 Exam Enrollment') || ( this.productName == 'Elearning'))
      { 
          if (( this.studentName =='' ) || ( this.standard == '' ) || ( this.schoolName =='')) { 
           
          this.errorMessage = "All student  details are mandatory for this product" ; 
          return ; 

      }  else {    
           if ( this.schoolMatched == false ) { 

            this.errorMessage = "Your school name was not found , cant continue " ;
            return; 

        }
  }
}

this.showLoading() ;  
//alert( "wait ... Taking to Payment gatway ") ; 

    this.orderData  = { prodname : this.productName , userid : this.userid , student_name : this.studentName , email: this.email, standard : this.standard  , medium : "English" , gender : "F" , birthDate : "01-01-2000" , school_code  : this.schoolCode , amount : this.totalCharges , 
                        billingname : this.billingName , address : this.billingAddress , city : this.billingCity,phone: this.billingPhone, pincode : this.billingPincode, state : 428  } 
                        console.log( " sending  thid data for save  " + JSON.stringify( this.orderData)) ; 

                         this.saveOrder.process(this.orderData).subscribe( data => { 
                          console.log( "got this data   " + JSON.stringify( data )) ; 
                          if ( data != "failed") {
                            this.orderNo = data;  
                            console.log( "order  no generated is --" + this.orderNo) ; 
                            if  ( this.orderNo == null ) {
                              this.errorMessage = "Error in Saving Order Information " ; 
                              return ; 
                            }
                         
                            this.showEBS() ; 
                            this.loading.dismissAll();
                            this.navCtrl.setRoot('MenuPage') ; 

                          }
                          else {
                            this.errorMessage = "Error in Saving Order " ;
                            return ; 
                          }

                         });
    } 


public showEBS()  { 


var key = "ebskey" ; 
var account_id = 28506 ; 
var mode =  "TEST" ;  
var return_url =     'http://ipm-mathemagic.com/api/ebs/response_app.php?DR={DR}'  ; 
var page_id  =  1  ;  
var currency =   "INR" ; 
var description = "For IPM" ;  
var country  =  "Ind"  ; 
var channel =   0  ; 

var hash_str = key + "|" + account_id + "|" + 
this.billingAddress +  "|" + 
this.totalCharges +  "|" + 
channel +  "|" + 
this.billingCity +  "|" + 
country +  "|" + 
currency +  "|" + 
description +  "|" + 
this.email +  "|" + 
mode +  "|" + 
this.billingName +  "|" + 
page_id +  "|" + 
this.billingPhone +  "|" + 
this.billingPincode +  "|" + 
this.orderNo +  "|" + 
return_url +  "|" + 
this.billingState  ; 

var sec_hash = md5(hash_str).toString().toUpperCase() ;

console.log ( "hash str is -" + hash_str + "- hash is -" + sec_hash +"-") ;
console.log(  "amount is  " + this.totalCharges + "order is " + this.orderNo ) ;

var options = {
account_id : account_id , 
amount  : this.totalCharges  , 
reference_no  :  this.orderNo , 
name :  this.billingName , 
city  :  this.billingCity , 
email :  this.email , 
address : this.billingAddress , 
phone : this.billingPhone , 
postal_code :  this.billingPincode ,
state :   this.billingState , 
mode : mode , 
return_url :    return_url  , 
page_id  : page_id  , 
currency :  currency ,
description : description  , 
country  : country  , 
channel : channel  ,
secure_hash : sec_hash 
};







//var url = "http://ipm-mathemagic.com/new";
/*
var ref = window.open("" , "_blank" , "location=no" ) ; 
var doc = window.document ; 
var form = doc.createElement("form");
 */

 
/*

ref.addEventListener('loadstart', function(event) { alert('start: ' ); });
         ref.addEventListener('loadstop', function(event) { alert('stop: ' ); });
         ref.addEventListener('loaderror', function(event) { alert('error: '); });
         ref.addEventListener('exit', function(event) { alert(event.type); });
*/  
/*
          
  ref.addEventListener('loadstop', function(event) { 
  
    ref.executeScript(
         { code: "document.body.innerHTML" },
         function( values ) {
           //  alert( values[ 0 ] );
       var responseText = values[0] ; 
       alert ( "exitting with>" + responseText+"<" ) ; 
       if ( responseText.includes("Thanks for your order . Your order is confirmed")) { 
       //alert ( responseText ) ;
       alert( " Thank You for your order. Your order is confirmed.") ; 
       ref.close()		  ;
  
       // $state.go('tab.orders') ; 
       
       }
     else if ( responseText.includes("Your order  could not be processed") ) { 
       
          alert( "Eror in processing your order . Your order has failed.") ; 
          ref.close(); 
          // $state.go('tab.home') ; 
       }
      
  
       
         }
  
  
  
    )
    });


*/




/*


         

console.log ( "params are " + JSON.stringify(options)  ) ;
var form = doc.createElement("form");
form.setAttribute("method", "post");
form.setAttribute("action", 'https://sandbox.secure.ebs.in/pg/ma/payment/request');
//form.setAttribute("target", '_self');
for (var i in options) {
    if (options.hasOwnProperty(i)) {
        var input = doc.createElement('input');
        input.type = 'hidden';
        input.name = i;
        input.value = options[i];
        form.appendChild(input);
    }
 }
doc.body.appendChild(form);
// window.open('', winName,windowoption);
form.target = '_blank';
console.log(form.action);
form.submit();
*/

 

  var winName ="_self"; 
  //var key ="e918f92d41508857288b020b3c70dfac";
  var key ="ebskey";
  //var account_id = 10532 ; 
  var account_id = 28506 ; 
	var mode = "TEST" ; 
	var return_url =    'http://ipm-mathemagic.com/api/ebs/response_app.php?DR={DR}'  ; 
	console.log( " order no is " + this.orderNo ) ; 
	console.log( " amount is " + this.totalCharges  ) ; 
	//orderData.amount=100; 
	//order_no = 123456 ; 
  var ref : any ; 
 
  var URL = "http://ipm-mathemagic.com/new/payment.php?&order_no=" + this.orderNo  ; 
  //var URL = "http://ipm-mathemagic.com/new/payment.html?amount="+ this.totalCharges+"&order_no=" + this.orderNo + "&name="+this.billingName+"&address="+this.billingAddress+"&city=" +this.billingCity+"&postal_code="+this.billingPincode +"&email="+this.email +"&phone="+this.billingPhone ; 

  console.log( "opening URL  " + URL ) ; 
  
  ref =  window.open(URL , '_self ', "location=no");
 
 // const ref = this.iab.create(URL, '_blank', 'location=no') ; 
   
  



  ref.addEventListener('loadstart', function() {  //alert ( 'in loadstart') 
  }) ;
  //if (ref) { 
  
  ref.addEventListener('loadstop', function() { 
  ref.executeScript(
       { code: "document.body.innerHTML" },
       function( values ) {
         //  alert( values[ 0 ] );
     var responseText = values[0] ; 
     //alert ( "exitting with>" + responseText+"<" ) ; 
     if ( responseText.includes("Thanks for your order . Your order is confirmed")) { 
     //alert ( responseText ) ;
     alert( " Thank You for your order. Your order is confirmed.") ; 
     ref.close()		  ;
     this.loading.dismissAll()  ;
     this.navCtrl.setRoot('MenuPage') ; 



     // $state.go('tab.orders') ; 
     
     }
   else if ( responseText.includes("Your order  could not be processed") ) { 
     
        alert( "Eror in processing your order . Your order has failed.") ; 
        ref.close(); 
        this.loading.dismissAll();
        this.navCtrl.setRoot('MenuPage') ; 
        // $state.go('tab.home') ; 
     }
    

     
       }



  )
  });

  ref.addEventListener('loadloaderror', function() {  alert ( 'Got some Error '); ;  });
  ref.addEventListener('exit', function() {   });




  

/*
	
	var order_no = 123456 ; 
	console.log( "key:" + key  + "account " + account_id +  "amount "+ 105 + "order no" + order_no + " return " + return_url + "mode " + mode );
	var hash_str =  key + "|" +  account_id + "|" + 105 + "|" + order_no + "|" + return_url + "|" + mode  ;
	var secured_hash = Md5.hashStr(hash_str) ; 
	console.log ( "hash str is -" + hash_str + "- hash is -" + secured_hash +"-") ; 
	
	
    var params = {
		'account_id' :  account_id  ,  
		'reference_no' : order_no ,  
		'amount'  : 105 ,  
		'mode' :  mode ,  
        'currency'  : 'INR' ,  
	
        'description' : 'For Ipm' , 
        'return_url' :  return_url , 
        'name' : this.billingName  , 
		'address' : this.billingAddress  , 
		'city' :  this.billingCity  , 
		'country' : 'Ind' ,
		'postal_code' :  this.billingPincode  , 
		'email' :  'dravidsa@hotmail.com' , 
		'secure_hash' : secured_hash   , 
	    'phone' : 9922955408 , 
		
		'channel' : '0' 
		
    };
	
	console.log ( "params are " + JSON.stringify(params)  ) ; 
	
    var form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", 'https://secure.ebs.in/pg/ma/payment/request');
    form.setAttribute("target", winName);
    for (var i in params) {
        if (params.hasOwnProperty(i)) {
            var input = document.createElement('input');
            input.type = 'hidden';
            input.name = i;
            input.value = params[i];
            form.appendChild(input);
        }
     }
    document.body.appendChild(form);
    // window.open('', winName,windowoption);
    form.target = winName;
    console.log(form.action);
	console.log( "going for submit ") ; 
	
	console.log ( "going for socket ") ; 
	


 
     form.submit();
	console.log ( "form submitted"); 
*/


}

  public calcShipping(){
   console.log ( "in change event ") ; 
   if ( this.productName != 'IPM Book Set') { 

    this.shippingCharges =  0 ;
    if  (this.billingState != 428 )  { 
      this.outOfMHCharges = 200 ; 
    } 
    else { 
      this.outOfMHCharges = 0 ; 
    }

    } 
    else { 

    if  (this.billingState != 428  )  { 
      this.shippingCharges = 175; 
     // this.outOfMHCharges = 200 ; 
      } 
    else       
      this.shippingCharges = 125; 
    } 
      this.totalCharges = Number.parseInt(this.productPrice) + this.shippingCharges  + this.outOfMHCharges  ; 

  }


  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Taking to payment gateway  ...',
      dismissOnPageChange: true
    });
    console.log( " in loading ") ; 

    setTimeout(() => {
      this.loading.dismiss();
    }, 3000);


    this.loading.present();
  }

ngOnInit() { 

  console.log ( " in ngOninit ") ; 

}
}
