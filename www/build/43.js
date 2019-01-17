webpackJsonp([43],{

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabProductsPageModule", function() { return TabProductsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab_products__ = __webpack_require__(393);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabProductsPageModule = /** @class */ (function () {
    function TabProductsPageModule() {
    }
    TabProductsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tab_products__["a" /* TabProductsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tab_products__["a" /* TabProductsPage */]),
            ],
        })
    ], TabProductsPageModule);
    return TabProductsPageModule;
}());

//# sourceMappingURL=tab-products.module.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabProductsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_products_service_products_service__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(121);
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
 * Generated class for the TabProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabProductsPage = /** @class */ (function () {
    function TabProductsPage(navCtrl, navParams, productsService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.productsService = productsService;
        this.productsService.getProducts().subscribe(function (data) {
            //console.log( "got this data " + JSON.stringify( data )) ; 
            _this.products = _this.productsService.products;
            ;
        });
    }
    TabProductsPage.prototype.logout = function () {
        localStorage.removeItem("loggedUser");
        this.navCtrl.setRoot('LoginPage');
    };
    TabProductsPage.prototype.buyProduct = function (productName, productId, productPrice, productImage) {
        // console.log( "going to   buy" + productName ) ; 
        this.navCtrl.setRoot('BuyProductPage', { productId: productId, productName: productName, productPrice: productPrice, img_src: productImage });
    };
    TabProductsPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad TabProductsPage');
    };
    TabProductsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-tab-products',template:/*ion-inline-start:"C:\sandeep\apps\mathemagicNew\src\pages\tab-products\tab-products.html"*/'<!--\n  Generated template for the TabProductsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>tab_products</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<style>\n\n.img{ \n\n  max-width: 25% ; \n\n}\n\n\n</style>\n\n<ion-content padding>\n\n</ion-content>\n<ion-header>\n    <ion-navbar color="blue">\n      <ion-title>\n        Buy Products \n      </ion-title>\n      <ion-buttons end>\n        <button ion-button (click)="logout()">\n          <ion-icon name="log-out"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content class="products-content" padding>\n\n        <ion-card-header>\n    \n        </ion-card-header>\n\n        <font size= 6> \n\n        <div *ngIf="products"> \n        <button ion-item *ngFor="let product of products" (click)="buyProduct(product.product_name,product.product_id,product.price,product.img_src)" >\n\n            <ion-card>\n                \n                 \n                <ion-card-content>\n                   \n                  <ion-card-title>\n                   {{product.product_name}}  \n                    </ion-card-title>\n                    <ion-grid> \n                    <ion-row> \n                      \n                      <ion-col width-25>\n\n                         \n                              <img src={{product.img_src}} />\n                           \n                    </ion-col>\n                  \n                  \n                   <ion-col>\n                    <p text-wrap>\n                    {{product.product_desc}}   \n                  </p>\n\n                  <p>\n                      <b>Price : Rs.{{product.price}}   </b>\n                    </p>\n                    <p>\n                        <button ion-button color="secondary" (click)="buyProduct()" >Buy This</button>\n\n                      </p>\n                    </ion-col>\n\n                    </ion-row>\n                  </ion-grid>\n                </ion-card-content>\n              </ion-card>\n          </button>\n        </div>\n\n\n\n</font>\n          \n          \n   \n\n    \n</ion-content>'/*ion-inline-end:"C:\sandeep\apps\mathemagicNew\src\pages\tab-products\tab-products.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_products_service_products_service__["a" /* ProductsService */]])
    ], TabProductsPage);
    return TabProductsPage;
}());

//# sourceMappingURL=tab-products.js.map

/***/ })

});
//# sourceMappingURL=43.js.map