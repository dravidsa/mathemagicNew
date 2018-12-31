webpackJsonp([29],{

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyProductPageModule", function() { return BuyProductPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buy_product__ = __webpack_require__(400);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BuyProductPageModule = /** @class */ (function () {
    function BuyProductPageModule() {
    }
    BuyProductPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__buy_product__["a" /* BuyProductPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__buy_product__["a" /* BuyProductPage */]),
            ],
        })
    ], BuyProductPageModule);
    return BuyProductPageModule;
}());

//# sourceMappingURL=buy-product.module.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_save_order_save_order__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_service_auth_service__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_get_schools_get_schools__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_get_billing_get_billing__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(237);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the BuyProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BuyProductPage = /** @class */ (function () {
    function BuyProductPage(navCtrl, navParams, getSchoolsService, authService, saveOrder, getBilling, iab) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.getSchoolsService = getSchoolsService;
        this.saveOrder = saveOrder;
        this.getBilling = getBilling;
        this.iab = iab;
        this.schoolName = "";
        this.schoolCode = 0;
        this.studentName = "";
        this.standard = "";
        this.billingName = "";
        this.billingAddress = '';
        this.billingCity = "";
        this.billingPincode = "";
        this.billingState = 428;
        this.shippingCharges = 125;
        this.totalCharges = this.productPrice;
        this.outOfMHCharges = 0;
        this.schoolMatched = false;
        this.orderNo = "";
        this.states = [
            {
                id: "AP",
                state: "Andhra Pradesh"
            },
            {
                id: "AR",
                state: "Arunachal Pradesh"
            },
            {
                id: "AS",
                state: "Assam"
            },
            {
                id: "BR",
                state: "Bihar"
            },
            {
                id: "CG",
                state: "Chattisgarh"
            },
            {
                id: "DN",
                state: "Dadra Nagar and Haveli"
            },
            {
                id: "GA",
                state: "GOA"
            },
            {
                id: "GJ",
                state: "Gujrat"
            },
            { id: "HR",
                state: "Haryana"
            },
            { id: "HP",
                state: "Himachal Pradesh"
            },
            { id: "JK",
                state: "Jammu and Kashmir"
            },
            { id: "JH",
                state: "Jharkhand"
            },
            { id: "KA",
                state: "Karnataka"
            },
            {
                id: "KL",
                state: "Kerala"
            },
            { id: "MP",
                state: "Madhya Pradesh"
            },
            { id: "MN",
                state: "Manipur"
            },
            { id: "ML",
                state: "Meghalaya"
            },
            { id: "MZ",
                state: "Mizoram"
            },
            { id: "NL",
                state: "Nagaland"
            },
            { id: "OR",
                state: "ORISSA"
            },
            { id: "PB",
                state: "Punjab"
            },
            {
                id: "PY",
                state: "Pondecherry"
            },
            { id: "RJ",
                state: "Rajashtan"
            },
            { id: "SK",
                state: "Sikkim"
            },
            { id: "TN",
                state: "Tamilnadu"
            },
            { id: "TR",
                state: "Tripura"
            },
            { id: "UP",
                state: "Uttar Pradesh"
            },
            { id: "WB",
                state: "West Bengal"
            }
        ];
        this.productId = navParams.get("productId");
        this.productName = navParams.get("productName");
        this.productPrice = navParams.get("productPrice");
        this.totalCharges = this.productPrice;
        this.img_src = navParams.get("img_src");
        this.refgetSchoolsService = getSchoolsService;
        console.log(" in constructor" + this.productPrice);
        if (localStorage.getItem("loggedUser") == null) {
            this.email = authService.currentUser.email;
            this.userid = authService.currentUser.id;
            this.username = authService.currentUser.name;
        }
        else {
            console.log("getting from localstorage");
            this.username = localStorage.getItem("loggedUser");
            this.userid = localStorage.getItem("loggedUserId");
            this.email = localStorage.getItem("loggedUserEmail");
        }
        console.log("current user name lis " + this.username);
        getBilling.getBillingAddress(this.username).subscribe(function (data) {
            console.log("got  this  billing  data   " + JSON.stringify(data));
            if (data != "no data") {
                _this.billingData = getBilling.billingData;
                console.log("billing data is " + JSON.stringify(_this.billingData));
                _this.billingName = _this.billingData[0].name;
                _this.billingAddress = _this.billingData[0].address;
                _this.billingCity = _this.billingData[0].city;
                _this.billingPincode = _this.billingData[0].pinCode;
                _this.billingState = _this.billingData[0].stateId;
                _this.billingPhone = _this.billingData[0].phone;
            }
            else {
                _this.errorMessage = "Error in Saving   Order ";
                return;
            }
        });
    }
    BuyProductPage.prototype.showSchools = function (schoolName) {
        console.log(" Showing schools with name " + this.schoolName);
        /*
        this.getSchoolsService.getSchools(this.schoolName).subscribe( data => {
          console.log( "got this data " + JSON.stringify( data )) ;
        
        });
        */
        this.navCtrl.push('SchoolListPage', { schoolName: this.schoolName });
    };
    BuyProductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BuyProductPage');
    };
    BuyProductPage.prototype.ionViewWillEnter = function () {
        console.log('ionViewDidLoad BuyProductPage');
        if ((this.productName == 'IPM Book Set ') && (this.productName == 'Online Test')) {
            if (this.refgetSchoolsService != undefined) {
                this.schoolName = this.refgetSchoolsService.selectedSchoolName;
                if (this.schoolName == undefined) {
                    this.errorMessage = "Did not  find your school Name , cant continue ";
                    this.schoolMatched = false;
                    return;
                }
                this.schoolMatched = true;
                this.schoolCode = this.refgetSchoolsService.selectedSchoolId;
                this.errorMessage = "";
                console.log("lets see  if we enter this  " + this.schoolName + "code is " + this.schoolCode);
            }
            //console.log ( "coming for the 1st time ");
        }
        else {
            console.log("no need of school name ");
        }
    };
    BuyProductPage.prototype.goForPayment = function () {
        var _this = this;
        //this.errorMessage = this.standard+'-'+this.billingAddress+'-'+this.billingCity+'-'+ this.billingPincode+'-'+this.billingName+'-' ; 
        if (this.standard == '' || this.billingName == '' || this.billingAddress == '' || this.billingCity == '' || this.billingPincode == '' || this.billingPhone == '') {
            this.errorMessage = "All Fields are mandatory  ";
            return;
        }
        if ((this.productName == 'Supreme') || (this.productName == 'IPM 2019 Exam Enrollment') || (this.productName == 'Elearning')) {
            if ((this.studentName == '') || (this.standard == '') || (this.schoolName == '')) {
                this.errorMessage = "All student  details are mandatory for this product";
                return;
            }
            else {
                if (this.schoolMatched == false) {
                    this.errorMessage = "Your school name was not found , cant continue ";
                    return;
                }
            }
        }
        this.orderData = { prodname: this.productName, userid: this.userid, student_name: this.studentName, email: this.email, standard: this.standard, medium: "English", gender: "F", birthDate: "01-01-2000", school_code: this.schoolCode, amount: this.totalCharges,
            billingname: this.billingName, address: this.billingAddress, city: this.billingCity, phone: this.billingPhone, pincode: this.billingPincode, state: 428 };
        console.log(" sending  thid data for save  " + JSON.stringify(this.orderData));
        this.saveOrder.process(this.orderData).subscribe(function (data) {
            console.log("got this data   " + JSON.stringify(data));
            if (data != "failed") {
                _this.orderNo = data;
                console.log("order no generated is --" + _this.orderNo);
                if (_this.orderNo == null) {
                    _this.errorMessage = "Error in Saving Order Information ";
                    return;
                }
                _this.showEBS();
            }
            else {
                _this.errorMessage = "Error in Saving Order ";
                return;
            }
        });
    };
    BuyProductPage.prototype.showEBS = function () {
        var winName = "_self";
        var key = "e918f92d41508857288b020b3c70dfac";
        var account_id = 10532;
        var mode = "LIVE";
        var return_url = 'http://ipm-mathemagic.com/api/ebs/response_app.php?DR={DR}';
        console.log(" order no is " + this.orderNo);
        console.log(" amount is " + this.totalCharges);
        //orderData.amount=100; 
        //order_no = 123456 ; 
        var ref;
        var URL = "http://ipm-mathemagic.com/new/payment.html?amount=" + this.totalCharges + "&order_no=" + this.orderNo + "&name=" + this.billingName + "&address=" + this.billingAddress + "&city=" + this.billingCity + "&postal_code=" + this.billingPincode + "&email=" + this.email + "&phone=" + this.billingPhone;
        console.log("opening URL  " + URL);
        ref = window.open(URL, '_blank ', "location=no");
        // const ref = this.iab.create(URL, '_blank', 'location=no') ; 
        ref.addEventListener('loadstart', function () { alert('in loadstart'); });
        //if (ref) { 
        ref.addEventListener('loadstop', function () {
            ref.executeScript({ code: "document.body.innerHTML" }, function (values) {
                //  alert( values[ 0 ] );
                var responseText = values[0];
                alert("exitting with>" + responseText + "<");
                if (responseText.includes("Thanks for your order . Your order is confirmed")) {
                    //alert ( responseText ) ;
                    alert(" Thank You for your order. Your order is confirmed.");
                    ref.close();
                    // $state.go('tab.orders') ; 
                }
                else if (responseText.includes("Your order  could not be processed")) {
                    alert("Eror in processing your order . Your order has failed.");
                    ref.close();
                    // $state.go('tab.home') ; 
                }
            });
        });
        ref.addEventListener('loadloaderror', function () { alert('Got some Error '); ; });
        ref.addEventListener('exit', function () { });
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
    };
    BuyProductPage.prototype.calcShipping = function () {
        console.log("in change event ");
        if (this.productName != 'IPM Book Set') {
            this.shippingCharges = 0;
            if (this.billingState != 428) {
                this.outOfMHCharges = 200;
            }
            else {
                this.outOfMHCharges = 0;
            }
        }
        else {
            if (this.billingState != 428) {
                this.shippingCharges = 175;
                // this.outOfMHCharges = 200 ; 
            }
            else
                this.shippingCharges = 125;
        }
        this.totalCharges = Number.parseInt(this.productPrice) + this.shippingCharges + this.outOfMHCharges;
    };
    BuyProductPage.prototype.ngOnInit = function () {
        console.log(" in ngOninit ");
    };
    BuyProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-buy-product',template:/*ion-inline-start:"C:\sandeep\apps\mathemagicNew\src\pages\buy-product\buy-product.html"*/'<!--\n  Generated template for the BuyProductPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Buy Products</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="buyproducts-content" padding>\n\n    <ion-card>\n\n        <ion-row>\n          <ion-col> \n\n          \n        <ion-item>\n          <ion-avatar item-start>\n            <img src={{img_src}} >\n          </ion-avatar>\n          <h2>Product Selected : {{ productName }} </h2>\n          <p> <b>Price {{ productPrice}} </b></p>\n          \n        </ion-item>\n      </ion-col>\n      <ion-col>\n          <ion-item>\n              <ion-label>Standard</ion-label>\n              <ion-select [(ngModel)]="standard">\n                <ion-option value="2">2</ion-option>\n                <ion-option value="3">3</ion-option>\n                <ion-option value="4">4</ion-option>\n                <ion-option value="5">5</ion-option>\n                <ion-option value="6">6</ion-option>\n                <ion-option value="7">7</ion-option>\n                <ion-option value="8">8</ion-option>\n                <ion-option value="9">9</ion-option>\n              </ion-select>\n              </ion-item>\n              \n\n\n      </ion-col>\n\n\n      </ion-row>\n     \n\n      </ion-card>\n      <BR/>\n      <ion-card *ngIf="productName ==\'Supreme\' || productName==\'Elearning\' || productName ==\'IPM 2019 Exam Enrollment\'" > \n          <ion-card-header>\n            Student Details\n            </ion-card-header>\n      \n        <ion-list  >\n            <ion-item>\n              <ion-label stacked>Student Name </ion-label>\n              <ion-input type="text" [(ngModel)]="studentName" ></ion-input>\n            </ion-item>\n              <ion-item>\n                    <ion-label stacked>Enter part of school Name and click search </ion-label>\n                    <ion-input type="text" [(ngModel)]="schoolName"></ion-input>\n                  </ion-item>\n                  <button ion-button color="secondary" (click)="showSchools(schoolName)" >Search School</button>\n\n          </ion-list>\n        </ion-card>\n<BR/>\n\n        <ion-card> \n            <ion-card-header>\n              Billing and Shipping Details \n              </ion-card-header>\n        \n          <ion-list>\n              <ion-item>\n                  <ion-label stacked>Billing Name </ion-label>\n                  <ion-input type="text" [(ngModel)]="billingName" ></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>Billing Address </ion-label>\n                    <ion-input type="text"  [(ngModel)]="billingAddress" ></ion-input>\n                  </ion-item>\n\n                  <ion-item>\n                      <ion-label stacked>Billing Phone </ion-label>\n                      <ion-input type="text"  [(ngModel)]="billingPhone"></ion-input>\n                    </ion-item>\n\n                    <ion-item>\n                        <ion-label stacked>Billing City  </ion-label>\n                        <ion-input type="text"  [(ngModel)]="billingCity" ></ion-input>\n                      </ion-item>\n                      <ion-row>\n                        <ion-col>\n\n                        \n                      \n                      <ion-item>\n                          <ion-label stacked>Pin code </ion-label>\n                          <ion-input type="text"  [(ngModel)]="billingPincode" ></ion-input>\n                        </ion-item>\n                      </ion-col>\n                      <ion-col>\n                        <ion-item>\n                          <ion-label>State</ion-label>\n                          \n\n                          <ion-select [(ngModel)]="billingState" (ionChange)="calcShipping()">\n                              <ion-option value="428">Maharashtra</ion-option>\n                              \n                                  <ion-option *ngFor="let state of states" [value]="state.id"  >\n                                    {{state.state}}\n                                  </ion-option>\n\n                           \n                          \n                          </ion-select>\n                        </ion-item>\n\n                      </ion-col>\n                      </ion-row>\n                </ion-list>\n              </ion-card> \n\n\n              <ion-card  *ngIf="(productName ==\'Supreme\' || productName==\'Elearning\' || productName ==\'IPM 2019 Exam Enrollment\') && ( billingState !=\'MH\')" > \n                  <ion-card-header>\n                   Out Of Maharashtra  Charges  \n                    </ion-card-header>\n              \n                <ion-list  >\n                    <ion-item>\n                      <p>Out Of Maharashtra  Charges  : {{outOfMHCharges }} </p> \n                  \n                     </ion-item>\n                     </ion-list>\n\n\n\n                    </ion-card>\n\n                    <ion-card *ngIf="productName ==\'IPM Book Set\'" > \n                        <ion-card-header>\n                          Shipping Charges : \n                          </ion-card-header>\n                    \n                      <ion-list  >\n                          <ion-item>\n                            <p>Shiiping Charges  : {{shippingCharges}} </p> \n                        \n                           </ion-item>\n                           </ion-list>\n      \n      \n      \n                          </ion-card>\n\n                    \n\n              <ion-card> \n                  <ion-card-header>\n                    Total Charges\n                    </ion-card-header>\n              \n                <ion-list>\n                    <ion-item>\n                      <p> Total Charges :  {{ totalCharges}} </p> \n                  \n                     </ion-item>\n                     </ion-list>\n\n\n                    </ion-card>\n\n\n              <p color="danger" >  {{errorMessage }} </p>  \n              <p>\n                  <button ion-button ion-button full=true color="primary" (click)="goForPayment()" >Go For Payment</button>\n\n                </p>\n\n</ion-content>\n'/*ion-inline-end:"C:\sandeep\apps\mathemagicNew\src\pages\buy-product\buy-product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_get_schools_get_schools__["a" /* GetSchoolsService */], __WEBPACK_IMPORTED_MODULE_1__providers_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_0__providers_save_order_save_order__["a" /* SaveOrderService */], __WEBPACK_IMPORTED_MODULE_5__providers_get_billing_get_billing__["a" /* GetBillingService */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], BuyProductPage);
    return BuyProductPage;
}());

//# sourceMappingURL=buy-product.js.map

/***/ })

});
//# sourceMappingURL=29.js.map