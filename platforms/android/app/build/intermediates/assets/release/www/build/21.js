webpackJsonp([21],{

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolListPageModule", function() { return SchoolListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__school_list__ = __webpack_require__(377);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SchoolListPageModule = /** @class */ (function () {
    function SchoolListPageModule() {
    }
    SchoolListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__school_list__["a" /* SchoolListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__school_list__["a" /* SchoolListPage */]),
            ],
        })
    ], SchoolListPageModule);
    return SchoolListPageModule;
}());

//# sourceMappingURL=school-list.module.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchoolListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_get_schools_get_schools__ = __webpack_require__(229);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { BuyProductPage } from './../buy-product/buy-product';



/**
 * Generated class for the SchoolListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SchoolListPage = /** @class */ (function () {
    function SchoolListPage(navCtrl, navParams, getSchoolsService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.schoolName = navParams.get("schoolName");
        console.log("got this school in showList" + this.schoolName);
        this.refGetSchoolService = getSchoolsService;
        getSchoolsService.getSchools(this.schoolName).subscribe(function (data) {
            console.log("got this data  " + JSON.stringify(data));
            if (data == "failed") {
                _this.schoolMessage = "no schools found with this criteria";
                //alert("no schools found with this criteria") ; 
                return;
            }
            //this.schoolMessage = "showing schools matching the name " ; 
            _this.schools = getSchoolsService.schools;
        });
    }
    SchoolListPage.prototype.setSchool = function (id, schoolName) {
        this.refGetSchoolService.selectedSchoolId = id;
        this.refGetSchoolService.selectedSchoolName = schoolName;
        console.log("setting selected schhool name to " + schoolName);
        this.navCtrl.pop();
    };
    SchoolListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SchoolListPage');
    };
    SchoolListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-school-list',template:/*ion-inline-start:"C:\sandeep\apps\mathemagicNew\src\pages\school-list\school-list.html"*/'<!--\n  Generated template for the SchoolListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>schoolList</ion-title>\n    <ion-buttons end>\n        <button ion-button (click)="logout()">\n          <ion-icon name="log-out"> {{user}}</ion-icon>\n        </button>\n        <button menuToggle="left">\n            <ion-icon name="menu"></ion-icon>\n          </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="school-list-content" padding>\n\n\n    <div *ngIf="schools"> \n        <button ion-item *ngFor="let school of schools " (click)="setSchool(school.school_code,school.school_name)" >\n\n            <ion-card>\n                \n                 \n                <ion-card-content>\n                   \n                  <ion-card-title style="white-space: normal;" >\n                   {{school.school_name}}  \n                    </ion-card-title>\n                  <p>\n                    {{school.school_address}}   \n                  </p>\n                  <p>\n                      {{school.school_city}} \n                    </p>\n\n                </ion-card-content>\n              </ion-card>\n          </button>\n        </div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\sandeep\apps\mathemagicNew\src\pages\school-list\school-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_get_schools_get_schools__["a" /* GetSchoolsService */]])
    ], SchoolListPage);
    return SchoolListPage;
}());

//# sourceMappingURL=school-list.js.map

/***/ })

});
//# sourceMappingURL=21.js.map