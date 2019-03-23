webpackJsonp([3],{

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewOrdersPageModule", function() { return ViewOrdersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_orders__ = __webpack_require__(396);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ViewOrdersPageModule = /** @class */ (function () {
    function ViewOrdersPageModule() {
    }
    ViewOrdersPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__view_orders__["a" /* ViewOrdersPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__view_orders__["a" /* ViewOrdersPage */]),
            ],
        })
    ], ViewOrdersPageModule);
    return ViewOrdersPageModule;
}());

//# sourceMappingURL=view-orders.module.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewOrdersPage; });
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
 * Generated class for the ViewOrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewOrdersPage = /** @class */ (function () {
    function ViewOrdersPage(navCtrl, navParams, getOrders) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.getOrders = getOrders;
        this.orders = navParams.get("orders");
        this.user = localStorage.getItem("loggedUser");
        this.user = localStorage.getItem("loggedUser");
    }
    ViewOrdersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewOrdersPage');
    };
    ViewOrdersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-view-orders',template:/*ion-inline-start:"C:\sandeep\apps\mathemagicNew\src\pages\view-orders\view-orders.html"*/'<!--\n  Generated template for the ViewOrdersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>My Orders</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="logout()">\n        <ion-icon name="log-out"> {{user}}</ion-icon>\n      </button>\n      <button menuToggle="left">\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class=vieworders-content padding>\n\n  \n    <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n           Order #\n          </ion-item>\n          </ion-col>\n          <ion-col>\n              <ion-item>\n            Status\n          </ion-item>\n          </ion-col>\n         \n        </ion-row>\n      </ion-grid>\n\n      <ion-list>\n          <button ion-item *ngFor="let order of orders">\n          <ion-row>\n          <ion-col>\n              <ion-item>\n              {{ order.ipm_orderId }}\n              </ion-item>\n          </ion-col>\n          \n          <ion-col *ngIf="order.status == \'Pending\'" ion-text color="primary">\n              <ion-item>\n              <p> Pending </p>            \n              </ion-item> </ion-col>\n\n          <ion-col *ngIf="order.status == \'Confirmed\' "  ion-text color="danger" >\n              <ion-item>\n              <p> Confirmed </p>\n          </ion-item></ion-col>\n        \n        \n          \n        \n        </ion-row>\n        \n          </button>\n\n        </ion-list> \n\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\sandeep\apps\mathemagicNew\src\pages\view-orders\view-orders.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_get_orders_get_orders__["a" /* GetOrdersProvider */]])
    ], ViewOrdersPage);
    return ViewOrdersPage;
}());

//# sourceMappingURL=view-orders.js.map

/***/ })

});
//# sourceMappingURL=3.js.map