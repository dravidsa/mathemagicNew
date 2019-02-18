webpackJsonp([30],{

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyProductPageModule", function() { return BuyProductPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buy_product__ = __webpack_require__(404);
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

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_save_order_save_order__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_service_auth_service__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_get_schools_get_schools__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_get_billing_get_billing__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__md5__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__ = __webpack_require__(60);
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
    function BuyProductPage(navCtrl, loadingCtrl, network, theBrowser, navParams, getSchoolsService, authService, saveOrder, getBilling, iab) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.network = network;
        this.theBrowser = theBrowser;
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
        // alert( "net connection is " + this.network.type); 
        if (this.network.type == 'none') {
            alert("Not connected to internet, some features may not work ");
            return;
        }
        this.refgetSchoolsService = getSchoolsService;
        console.log(" in constructo r" + this.productPrice);
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
        if ((this.productName != 'IPM Book Set') && (this.productName != 'Online Tests')) {
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
            console.log("no need of  school name ");
        }
    };
    BuyProductPage.prototype.goForPayment = function () {
        var _this = this;
        //this.errorMessage = this.standard+'-'+this.billingAddress+'-'+this.billingCity+'-'+ this.billingPincode+'-'+this.billingName+'-' ; 
        if (this.standard == '' || this.billingName == '' || this.billingAddress == '' || this.billingCity == '' || this.billingPincode == '' || this.billingPhone == '') {
            this.errorMessage = "All Fields are mandatory  ";
            return;
        }
        if ((this.productName == 'Supreme') || (this.productName == 'IPM 2019 Exam Enrollment') || (this.productName == 'E-Learning')) {
            if ((this.studentName == '') || (this.standard == '') || (this.schoolName == '')) {
                this.errorMessage = "All student  details are mandatory for this product";
                return;
            }
            else {
                if (this.schoolMatched == false) {
                    this.errorMessage = "**Your school name was not found , cant continue ";
                    return;
                }
            }
        }
        this.showLoading();
        //alert( "wait ... Taking to Payment gatway ") ; 
        this.orderData = { prodname: this.productName, userid: this.userid, student_name: this.studentName, email: this.email, standard: this.standard, medium: "English", gender: "F", birthDate: "01-01-2000", school_code: this.schoolCode, amount: this.totalCharges,
            billingname: this.billingName, address: this.billingAddress, city: this.billingCity, phone: this.billingPhone, pincode: this.billingPincode, state: 428 };
        console.log(" sending  thid data for save  " + JSON.stringify(this.orderData));
        this.saveOrder.process(this.orderData).subscribe(function (data) {
            console.log("got this data   " + JSON.stringify(data));
            if (data != "failed") {
                _this.orderNo = data;
                console.log("order  no generated is --" + _this.orderNo);
                if (_this.orderNo == null) {
                    _this.errorMessage = "Error in Saving Order Information ";
                    return;
                }
                _this.showEBS();
                _this.loading.dismissAll();
                _this.navCtrl.setRoot('MenuPage');
            }
            else {
                _this.errorMessage = "Error in Saving Order ";
                return;
            }
        });
    };
    BuyProductPage.prototype.showEBS = function () {
        var key = "ebskey";
        var account_id = 28506;
        var mode = "TEST";
        var return_url = 'http://ipm-mathemagic.com/api/ebs/response_app.php?DR={DR}';
        var page_id = 1;
        var currency = "INR";
        var description = "For IPM";
        var country = "Ind";
        var channel = 0;
        var hash_str = key + "|" + account_id + "|" +
            this.billingAddress + "|" +
            this.totalCharges + "|" +
            channel + "|" +
            this.billingCity + "|" +
            country + "|" +
            currency + "|" +
            description + "|" +
            this.email + "|" +
            mode + "|" +
            this.billingName + "|" +
            page_id + "|" +
            this.billingPhone + "|" +
            this.billingPincode + "|" +
            this.orderNo + "|" +
            return_url + "|" +
            this.billingState;
        var sec_hash = Object(__WEBPACK_IMPORTED_MODULE_7__md5__["a" /* md5 */])(hash_str).toString().toUpperCase();
        console.log("hash str is -" + hash_str + "- hash is -" + sec_hash + "-");
        console.log("amount is  " + this.totalCharges + "order is " + this.orderNo);
        var options = {
            account_id: account_id,
            amount: this.totalCharges,
            reference_no: this.orderNo,
            name: this.billingName,
            city: this.billingCity,
            email: this.email,
            address: this.billingAddress,
            phone: this.billingPhone,
            postal_code: this.billingPincode,
            state: this.billingState,
            mode: mode,
            return_url: return_url,
            page_id: page_id,
            currency: currency,
            description: description,
            country: country,
            channel: channel,
            secure_hash: sec_hash
        };
        var winName = "_self";
        //var key ="e918f92d41508857288b020b3c70dfac";
        var key = "ebskey";
        //var account_id = 10532 ; 
        var account_id = 28506;
        var mode = "TEST";
        var return_url = 'http://ipm-mathemagic.com/api/ebs/response_app.php?DR={DR}';
        console.log(" order no is " + this.orderNo);
        console.log(" amount is " + this.totalCharges);
        //orderData.amount=100; 
        //order_no = 123456 ; 
        var ref;
        var URL = "http://ipm-mathemagic.com/new/payment.php?&order_no=" + this.orderNo;
        //var URL = "http://ipm-mathemagic.com/new/payment.html?amount="+ this.totalCharges+"&order_no=" + this.orderNo + "&name="+this.billingName+"&address="+this.billingAddress+"&city=" +this.billingCity+"&postal_code="+this.billingPincode +"&email="+this.email +"&phone="+this.billingPhone ; 
        console.log("opening URL  " + URL);
        ref = window.open(URL, '_self ', "location=no");
        ref.addEventListener('loadstart', function () {
        });
        //if (ref) { 
        ref.addEventListener('loadstop', function () {
            ref.executeScript({ code: "document.body.innerHTML" }, function (values) {
                //  alert( values[ 0 ] );
                var responseText = values[0];
                //alert ( "exitting with>" + responseText+"<" ) ; 
                if (responseText.includes("Thanks for your order . Your order is confirmed")) {
                    //alert ( responseText ) ;
                    alert(" Thank You for your order. Your order is confirmed.");
                    ref.close();
                    this.loading.dismissAll();
                    this.navCtrl.setRoot('MenuPage');
                }
                else if (responseText.includes("Your order  could not be processed")) {
                    alert("Eror in processing your order . Your order has failed.");
                    ref.close();
                    this.loading.dismissAll();
                    this.navCtrl.setRoot('MenuPage');
                    // $state.go('tab.home') ; 
                }
            });
        });
        ref.addEventListener('loadloaderror', function () { alert('Got some Error '); ; });
        ref.addEventListener('exit', function () { });
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
    BuyProductPage.prototype.showLoading = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: 'Taking to payment gateway  ...',
            dismissOnPageChange: true
        });
        console.log(" in loading ");
        setTimeout(function () {
            _this.loading.dismiss();
        }, 3000);
        this.loading.present();
    };
    BuyProductPage.prototype.ngOnInit = function () {
    };
    BuyProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-buy-product',template:/*ion-inline-start:"C:\sandeep\apps\mathemagicNew\src\pages\buy-product\buy-product.html"*/'<!--\n  Generated template for the BuyProductPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Buy Products</ion-title>\n    <ion-buttons end>\n        <button ion-button (click)="logout()">\n          <ion-icon name="log-out"> {{user}}</ion-icon>\n        </button>\n        <button menuToggle="left">\n            <ion-icon name="menu"></ion-icon>\n          </button>\n      </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="buyproducts-content" padding>\n\n    <ion-card>\n\n        <ion-row>\n          <ion-col> \n\n          \n        <ion-item>\n          <ion-avatar item-start>\n            <img src={{img_src}} >\n          </ion-avatar>\n          <h2 style="white-space: normal;" >Product Selected : {{ productName }} </h2>\n          <p> <b>Price {{ productPrice}} </b></p>\n          \n        </ion-item>\n      </ion-col>\n      <ion-col>\n          <ion-item>\n              <ion-label>Standard </ion-label>\n              <ion-select [(ngModel)]="standard">\n                <ion-option value="2">2</ion-option>\n                <ion-option value="3">3</ion-option>\n                <ion-option value="4">4</ion-option>\n                <ion-option value="5">5</ion-option>\n                <ion-option value="6">6</ion-option>\n                <ion-option value="7">7</ion-option>\n                <ion-option value="8">8</ion-option>\n                <ion-option value="9">9</ion-option>\n              </ion-select>\n              </ion-item>\n              \n\n\n      </ion-col>\n\n\n      </ion-row>\n     \n\n      </ion-card>\n      <BR/>\n     \n      <ion-card *ngIf="productName ==\'Supreme\' || productName==\'E-Learning\' || productName ==\'IPM 2019 Exam Enrollment\'" > \n          <ion-card-header>\n            Student Details\n            </ion-card-header>\n      \n        <ion-list  >\n            <ion-item>\n              <ion-label stacked>Student Name </ion-label>\n              <ion-input type="text" required=true [(ngModel)]="studentName" style="Border-style: inset" ></ion-input>\n            </ion-item>\n              <ion-item>\n                    <ion-label stacked>Enter part of school Name and click search </ion-label>\n                    <ion-input type="text" [(ngModel)]="schoolName"></ion-input>\n                  </ion-item>\n                  <button ion-button color="secondary" (click)="showSchools(schoolName)" >Search School</button>\n\n          </ion-list>\n        </ion-card>\n<BR/>\n\n        <ion-card> \n            <ion-card-header>\n              Billing and Shipping Details \n              </ion-card-header>\n        \n          <ion-list>\n              <ion-item>\n                  <ion-label stacked>Billing Name </ion-label>\n                  <ion-input type="text" [(ngModel)]="billingName" ></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>Billing Address </ion-label>\n                    <ion-input type="text"  [(ngModel)]="billingAddress" ></ion-input>\n                  </ion-item>\n\n                  <ion-item>\n                      <ion-label stacked>Billing Phone </ion-label>\n                      <ion-input type="text"  [(ngModel)]="billingPhone"></ion-input>\n                    </ion-item>\n\n                    <ion-item>\n                        <ion-label stacked>Billing City  </ion-label>\n                        <ion-input type="text"  [(ngModel)]="billingCity" ></ion-input>\n                      </ion-item>\n                      <ion-row>\n                        <ion-col>\n\n                        \n                      \n                      <ion-item>\n                          <ion-label stacked>Pin code </ion-label>\n                          <ion-input type="text"  [(ngModel)]="billingPincode" ></ion-input>\n                        </ion-item>\n                      </ion-col>\n                      <ion-col>\n                        <ion-item>\n                          <ion-label>State</ion-label>\n                          \n\n                          <ion-select [(ngModel)]="billingState" (ionChange)="calcShipping()">\n                              <ion-option value="428">Maharashtra</ion-option>\n                              \n                                  <ion-option *ngFor="let state of states" [value]="state.id"  >\n                                    {{state.state}}\n                                  </ion-option>\n\n                           \n                          \n                          </ion-select>\n                        </ion-item>\n\n                      </ion-col>\n                      </ion-row>\n                </ion-list>\n              </ion-card> \n\n\n              <ion-card  *ngIf="(productName ==\'Supreme\' || productName==\'E-Learning\' || productName ==\'IPM 2019 Exam Enrollment\') && ( billingState !=\'MH\')" > \n                  <ion-card-header>\n                   Out Of Maharashtra  Charges  \n                    </ion-card-header>\n              \n                <ion-list  >\n                    <ion-item>\n                      <p>Out Of Maharashtra  Charges  : {{outOfMHCharges }} </p> \n                  \n                     </ion-item>\n                     </ion-list>\n\n\n\n                    </ion-card>\n\n                    <ion-card *ngIf="productName ==\'IPM Book Set\'" > \n                        <ion-card-header>\n                          Shipping Charges : \n                          </ion-card-header>\n                    \n                      <ion-list  >\n                          <ion-item>\n                            <p>Shiiping Charges  : {{shippingCharges}} </p> \n                        \n                           </ion-item>\n                           </ion-list>\n      \n      \n      \n                          </ion-card>\n\n                    \n\n              <ion-card> \n                  <ion-card-header>\n                    Total Charges\n                    </ion-card-header>\n              \n                <ion-list>\n                    <ion-item>\n                      <p> Total Charges :  {{ totalCharges}} </p> \n                  \n                     </ion-item>\n                     </ion-list>\n\n\n                    </ion-card>\n\n              <ion-label color="danger" align="center"> \n              <p>  {{errorMessage }} </p>    </ion-label> \n              <p>\n                  <button ion-button ion-button full=true color="primary" (click)="goForPayment()" >Go For Payment</button>\n\n                </p>\n\n</ion-content>\n'/*ion-inline-end:"C:\sandeep\apps\mathemagicNew\src\pages\buy-product\buy-product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_get_schools_get_schools__["a" /* GetSchoolsService */], __WEBPACK_IMPORTED_MODULE_1__providers_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_0__providers_save_order_save_order__["a" /* SaveOrderService */], __WEBPACK_IMPORTED_MODULE_5__providers_get_billing_get_billing__["a" /* GetBillingService */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], BuyProductPage);
    return BuyProductPage;
}());

//# sourceMappingURL=buy-product.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return md5; });
// Taken from https://github.com/killmenot/webtoolkit.md5
var md5 = function (string) {
    function RotateLeft(lValue, iShiftBits) {
        return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
    }
    function AddUnsigned(lX, lY) {
        var lX4, lY4, lX8, lY8, lResult;
        lX8 = (lX & 0x80000000);
        lY8 = (lY & 0x80000000);
        lX4 = (lX & 0x40000000);
        lY4 = (lY & 0x40000000);
        lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
        if (lX4 & lY4) {
            return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
        }
        if (lX4 | lY4) {
            if (lResult & 0x40000000) {
                return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
            }
            else {
                return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
            }
        }
        else {
            return (lResult ^ lX8 ^ lY8);
        }
    }
    function F(x, y, z) {
        return (x & y) | ((~x) & z);
    }
    function G(x, y, z) {
        return (x & z) | (y & (~z));
    }
    function H(x, y, z) {
        return (x ^ y ^ z);
    }
    function I(x, y, z) {
        return (y ^ (x | (~z)));
    }
    function FF(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function GG(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function HH(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function II(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function ConvertToWordArray(string) {
        var lWordCount;
        var lMessageLength = string.length;
        var lNumberOfWords_temp1 = lMessageLength + 8;
        var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
        var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
        var lWordArray = Array(lNumberOfWords - 1);
        var lBytePosition = 0;
        var lByteCount = 0;
        while (lByteCount < lMessageLength) {
            lWordCount = (lByteCount - (lByteCount % 4)) / 4;
            lBytePosition = (lByteCount % 4) * 8;
            lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
            lByteCount++;
        }
        lWordCount = (lByteCount - (lByteCount % 4)) / 4;
        lBytePosition = (lByteCount % 4) * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
        return lWordArray;
    }
    ;
    function WordToHex(lValue) {
        var WordToHexValue = "", WordToHexValue_temp = "", lByte, lCount;
        for (lCount = 0; lCount <= 3; lCount++) {
            lByte = (lValue >>> (lCount * 8)) & 255;
            WordToHexValue_temp = "0" + lByte.toString(16);
            WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
        }
        return WordToHexValue;
    }
    ;
    function Utf8Encode(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    }
    ;
    var x = Array();
    var k, AA, BB, CC, DD, a, b, c, d;
    var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
    var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
    var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
    var S41 = 6, S42 = 10, S43 = 15, S44 = 21;
    string = Utf8Encode(string);
    x = ConvertToWordArray(string);
    a = 0x67452301;
    b = 0xEFCDAB89;
    c = 0x98BADCFE;
    d = 0x10325476;
    for (k = 0; k < x.length; k += 16) {
        AA = a;
        BB = b;
        CC = c;
        DD = d;
        a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
        d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
        c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
        b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
        a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
        d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
        c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
        b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
        a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
        d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
        c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
        b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
        a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
        d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
        c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
        b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
        a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
        d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
        c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
        b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
        a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
        d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
        c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
        b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
        a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
        d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
        c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
        b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
        a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
        d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
        c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
        b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
        a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
        d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
        c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
        b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
        a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
        d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
        c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
        b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
        a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
        d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
        c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
        b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
        a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
        d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
        c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
        b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
        a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
        d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
        c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
        b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
        a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
        d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
        c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
        b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
        a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
        d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
        c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
        b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
        a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
        d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
        c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
        b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
        a = AddUnsigned(a, AA);
        b = AddUnsigned(b, BB);
        c = AddUnsigned(c, CC);
        d = AddUnsigned(d, DD);
    }
    var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
    return temp.toLowerCase();
};
//# sourceMappingURL=md5.js.map

/***/ })

});
//# sourceMappingURL=30.js.map