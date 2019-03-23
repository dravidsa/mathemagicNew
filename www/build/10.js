webpackJsonp([10],{

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabServicesPageModule", function() { return TabServicesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab_services__ = __webpack_require__(389);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabServicesPageModule = /** @class */ (function () {
    function TabServicesPageModule() {
    }
    TabServicesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tab_services__["a" /* TabServicesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tab_services__["a" /* TabServicesPage */]),
            ],
        })
    ], TabServicesPageModule);
    return TabServicesPageModule;
}());

//# sourceMappingURL=tab-services.module.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabServicesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_get_orders_get_orders__ = __webpack_require__(124);
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
 * Generated class for the TabServicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabServicesPage = /** @class */ (function () {
    function TabServicesPage(navCtrl, navParams, getOrders) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.getOrders = getOrders;
        this.user = localStorage.getItem("loggedUser");
    }
    TabServicesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabServicesPage');
    };
    TabServicesPage.prototype.viewOrders = function () {
        var _this = this;
        this.currentUserId = localStorage.getItem("loggedUserId");
        this.getOrders.getOrders(this.currentUserId).subscribe(function (data) {
            //console.log( "got this data " + JSON.stringify( data )) ; 
            _this.orders = _this.getOrders.orders;
            _this.navCtrl.setRoot('ViewOrdersPage', { 'orders': _this.orders });
            ;
        });
    };
    TabServicesPage.prototype.logout = function () {
        localStorage.removeItem("loggedUser");
        this.navCtrl.setRoot('LoginPage');
    };
    TabServicesPage.prototype.viewTests = function () {
        this.navCtrl.setRoot('TestsListPage', { calledFrom: 'services' });
    };
    TabServicesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tab-services',template:/*ion-inline-start:"C:\sandeep\apps\mathemagicNew\src\pages\tab-services\tab-services.html"*/'<!--\n  Generated template for the TabServicesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="blue">\n      <ion-title>\n        Services\n      </ion-title>\n      <ion-buttons end>\n        <button ion-button (click)="logout()">\n          <ion-icon name="log-out"> {{user}}</ion-icon>\n        </button>\n        <button menuToggle="left">\n            <ion-icon name="menu"></ion-icon>\n          </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n\n \n\n\n<ion-content class="tabservices-content" padding>\n\n  \n  <ion-card>\n    <ion-item>\n      \n      <h2>Downloaded Tests</h2>\n      <p> </p>\n    </ion-item>\n  \n\n    \n    <ion-grid> \n      <ion-row> \n       \n        <ion-col width-25>   \n            <img src="http://ipm-mathemagic.com/new/images/app/orders.jpg">                 \n                \n        </ion-col>\n                        \n     <ion-col>\n      <p text-wrap>\n          You can see all the tests you have downloaded earlier.\n      </p> \n      <BR/>               \n      <p>\n          <button ion-button color="secondary" (click)="viewTests()" >Downloaded Tests</button>\n\n        </p>  \n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-card>\n   \n  <ion-card>\n      <ion-item>\n        \n        <h2>My Orders</h2>\n        <p> </p>\n      </ion-item>\n    \n\n      \n      <ion-grid> \n        <ion-row> \n         \n          <ion-col width-25>   \n              <img src="http://ipm-mathemagic.com/new/images/app/orders.jpg">                 \n                  \n          </ion-col>\n                          \n       <ion-col>\n        <p text-wrap>\n            You can see all orders you placed on ipm-mathemagic.com from this id\n        </p> \n        <BR/>               \n        <p>\n            <button ion-button color="secondary" (click)="viewOrders()" >View Orders</button>\n\n          </p>  \n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n  <ion-card>\n        <ion-item>\n        \n            <h2>My Hall Ticket</h2>\n            <p> </p>\n          </ion-item>\n    \n     \n      <ion-grid> \n          <ion-row> \n           \n            <ion-col width-25>   \n                <img src="http://ipm-mathemagic.com/new/images/app/orders.jpg">                 \n                    \n            </ion-col>\n                            \n         <ion-col>\n          <p text-wrap>\n              You can see your hall ticket here. ( comming soon.... )\n          </p>          \n              \n          </ion-col>\n  \n          </ion-row>\n        </ion-grid>\n      </ion-card>\n      <ion-card>\n        <ion-item>\n        \n            <h2>My Result</h2>\n            <p> </p>\n          </ion-item>\n\n          \n        <ion-grid> \n            <ion-row> \n             \n              <ion-col width-25>   \n                  <img src="http://ipm-mathemagic.com/new/images/app/results.jpg">                 \n                      \n              </ion-col>\n                              \n           <ion-col>\n            <p text-wrap>\n                You can see your result of IPM exam here ( comming soon.... )\n            </p>                  \n            </ion-col>\n    \n            </ion-row>\n          </ion-grid>\n        </ion-card>\n\n  \n     \n   \n  \n  \n  \n\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\sandeep\apps\mathemagicNew\src\pages\tab-services\tab-services.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_get_orders_get_orders__["a" /* GetOrdersProvider */]])
    ], TabServicesPage);
    return TabServicesPage;
}());

//# sourceMappingURL=tab-services.js.map

/***/ })

});
//# sourceMappingURL=10.js.map