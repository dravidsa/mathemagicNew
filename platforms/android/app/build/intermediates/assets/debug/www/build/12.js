webpackJsonp([12],{

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsHomePageModule", function() { return TabsHomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab_home__ = __webpack_require__(394);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsHomePageModule = /** @class */ (function () {
    function TabsHomePageModule() {
    }
    TabsHomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tab_home__["a" /* TabsHomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tab_home__["a" /* TabsHomePage */]),
            ],
        })
    ], TabsHomePageModule);
    return TabsHomePageModule;
}());

//# sourceMappingURL=tab-home.module.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_messages_service_messages_service__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__ = __webpack_require__(60);
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
 * Generated class for the TabHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsHomePage = /** @class */ (function () {
    function TabsHomePage(navCtrl, alertCtrl, network, navParams, messagesService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.network = network;
        this.navParams = navParams;
        this.messagesService = messagesService;
        if (this.network.type == 'none') {
            alert("Not connected to internet, some features may not work ");
            return;
        }
        this.messagesService.getMessages().subscribe(function (data) {
            // console.log( "got this  data  " + JSON.stringify( data )) ; 
            _this.messages = _this.messagesService.messages;
            _this.user = localStorage.getItem("loggedUser");
            console.log(" User is " + _this.user);
            ;
        });
    }
    TabsHomePage.prototype.logout = function () {
        var _this = this;
        var confirmAlert = this.alertCtrl.create({
            title: 'Are you Sure?',
            message: "This will log you out of the app ",
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('Agree clicked');
                        localStorage.removeItem("loggedUser");
                        _this.navCtrl.setRoot('LoginPage');
                        // Your Imagination should go here
                    }
                }
            ]
        });
        confirmAlert.present();
    };
    TabsHomePage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad TabsHomePage');
    };
    TabsHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-tab-home',template:/*ion-inline-start:"C:\sandeep\apps\mathemagicNew\src\pages\tab-home\tab-home.html"*/'<!--\n  Generated template for the TabHomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n \n\n\n<ion-header>\n    <ion-navbar color="blue">\n\n      \n        \n\n      <ion-title>\n       Home              \n      </ion-title>\n      <ion-buttons end>\n        <button ion-button (click)="logout()">\n          <ion-icon name="log-out"> {{user}}</ion-icon>\n        </button>\n        <button menuToggle="left">\n            <ion-icon name="menu"></ion-icon>\n          </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content class="home-content" padding>                 \n            <div *ngIf="messages"> \n                <button ion-item *ngFor="let message of messages" >\n                    <ion-card>                           \n                      <ion-card-content>\n                           <ion-card-title style="white-space: normal;" >\n                           {{message.message_title }}  \n                            </ion-card-title>\n                            <ion-grid> \n                            <ion-row> \n                             \n                              <ion-col width-25>                    \n                                      <img src={{message.message_img}} />\n                              </ion-col>\n                                              \n                           <ion-col>\n                            <p text-wrap>\n                            {{message.message_text}}   \n                            </p>                  \n                            </ion-col>\n        \n                            </ion-row>\n                          </ion-grid>\n                        </ion-card-content>\n                        \n                      </ion-card>\n\n                      </button> \n        \n                </div>\n      \n</ion-content>\n'/*ion-inline-end:"C:\sandeep\apps\mathemagicNew\src\pages\tab-home\tab-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_messages_service_messages_service__["a" /* MessagesService */]])
    ], TabsHomePage);
    return TabsHomePage;
}());

//# sourceMappingURL=tab-home.js.map

/***/ })

});
//# sourceMappingURL=12.js.map