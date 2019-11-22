webpackJsonp([22],{

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageModule", function() { return PaymentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment__ = __webpack_require__(374);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PaymentPageModule = /** @class */ (function () {
    function PaymentPageModule() {
    }
    PaymentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__payment__["a" /* PaymentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__payment__["a" /* PaymentPage */]),
            ],
        })
    ], PaymentPageModule);
    return PaymentPageModule;
}());

//# sourceMappingURL=payment.module.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(121);
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
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaymentPage = /** @class */ (function () {
    function PaymentPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PaymentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad   PaymentPage');
    };
    PaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-payment',template:/*ion-inline-start:"C:\sandeep\apps\mathemagicNew\src\pages\payment\payment.html"*/'<!--\n  Generated template for the PaymentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>payment</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n    Wait .......Taking you to payment gateway. \n    <button onclick="payment()" disabled >Go to Payment </button>\n    </center>\n    \n    <script type="text/javascript">\n    \n    payment() ; \n    \n     \n   function getParamValuesByName (querystring) {\n     var qstring = window.location.href.slice(window.location.href.indexOf(\'?\') + 1).split(\'&\');\n     for (var i = 0; i < qstring.length; i++) {\n       var urlparam = qstring[i].split(\'=\');\n       if (urlparam[0] == querystring) {\n          return urlparam[1];\n       }\n     }\n   }\n        function payment() {\n           var winName = \'_self\';\n   console.log( " in here ") ; \n   var key ="e918f92d41508857288b020b3c70dfac";\n   var account_id = 10532 ; \n   var mode = "LIVE" ; \n   var return_url =    \'http://ipm-mathemagic.com/api/ebs/response_app.php?DR={DR}\'  ; \n   //var order_no = 1221212 ; \n   var secured_hash = \'\' ;  \n   console.log ( "hash str is -" + hash_str + "- hash is -" + secured_hash +"-") ; \n   var amount = getParamValuesByName(\'amount\') ; \n   var order_no = getParamValuesByName(\'order_no\') ; \n   var name = getParamValuesByName(\'name\') ; \n   var city = getParamValuesByName(\'city\') ; \n   var postal_code = getParamValuesByName(\'postal_code\') ; \n   var email = getParamValuesByName(\'email\') ; \n   var address = getParamValuesByName(\'address\') ; \n   var phone = getParamValuesByName(\'phone\') ; \n   var hash_str =  key + "|" +  account_id + "|" + amount + "|" + order_no + "|" + return_url + "|" + mode  ;\n   var secured_hash = md5(hash_str) ; \n   console.log(  "amount is " + amount + "order is " + order_no ) ; \n       var params = {\n   \'account_id\' :  account_id  ,  \n   \'reference_no\' : order_no ,  \n   \'amount\'  : amount ,  \n   \'mode\' :  mode ,  \n           \'currency\'  : \'INR\' ,  \n           \'description\' : \'For Ipm\' , \n           \'return_url\' :  return_url , \n           \'name\' :  name   , \n   \'address\'  : address    , \n   \'city\' :  city   , \n   \'country\' : \'Ind\' ,\n   \'postal_code\' : postal_code , \n   \'email\' :  email   , \n   \'secure_hash\' : secured_hash   , \n      \'phone\' : phone  , \n   \'channel\' : \'0\',\n   \'page_id\' : 1 \n       };\n   console.log ( "params are " + JSON.stringify(params)  ) ; \n       var form = document.createElement("form");\n       form.setAttribute("method", "post");\n       form.setAttribute("action", \'https://secure.ebs.in/pg/ma/payment/request\');\n       form.setAttribute("target", \'_self\');\n       for (var i in params) {\n           if (params.hasOwnProperty(i)) {\n               var input = document.createElement(\'input\');\n               input.type = \'hidden\';\n               input.name = i;\n               input.value = params[i];\n               form.appendChild(input);\n           }\n        }\n       document.body.appendChild(form);\n       // window.open(\'\', winName,windowoption);\n       form.target = \'_self\';\n       console.log(form.action);\n      \n     \n     \n    \n        form.submit();\n         \n       }\n    \n   var uid = getParamValuesByName(\'uid\');\n   var uname = getParamValuesByName(\'uname\');\n       \n       \n    </script>\n   </body>\n   </html>\n\n   \n\n\n</ion-content>\n'/*ion-inline-end:"C:\sandeep\apps\mathemagicNew\src\pages\payment\payment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], PaymentPage);
    return PaymentPage;
}());

//# sourceMappingURL=payment.js.map

/***/ })

});
//# sourceMappingURL=22.js.map