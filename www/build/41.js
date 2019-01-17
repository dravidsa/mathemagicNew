webpackJsonp([41],{

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabTestsPageModule", function() { return TabTestsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab_tests__ = __webpack_require__(395);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabTestsPageModule = /** @class */ (function () {
    function TabTestsPageModule() {
    }
    TabTestsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tab_tests__["a" /* TabTestsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tab_tests__["a" /* TabTestsPage */]),
            ],
        })
    ], TabTestsPageModule);
    return TabTestsPageModule;
}());

//# sourceMappingURL=tab-tests.module.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabTestsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_courses_service_courses_service__ = __webpack_require__(227);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { RouterModule,Routes } from '@angular/router';
/**
 * Generated class for the TabTestsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabTestsPage = /** @class */ (function () {
    function TabTestsPage(navCtrl, navParams, coursesService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.coursesService = coursesService;
        if (coursesService.courses == undefined) {
            var userName = localStorage.getItem("loggedUser");
            this.coursesService.getCoursesForUser(userName).subscribe(function (data) {
                //  console.log( "got this course data for logged in user " + JSON.stringify( data )) ; 
                _this.userCourses = coursesService.courses;
            });
        }
        else {
            // console.log( " coursesfor  this  user are " + JSON.stringify(coursesService.courses ) ) ; 
            this.userCourses = coursesService.courses;
            //console.log( " coursesfor this user are " + JSON.stringify( CoursesService.courses) ) ; 
        }
    }
    TabTestsPage_1 = TabTestsPage;
    TabTestsPage.prototype.logout = function () {
        localStorage.removeItem("loggedUser");
        this.navCtrl.setRoot('LoginPage');
    };
    TabTestsPage.prototype.goBack = function () {
    };
    TabTestsPage.prototype.goToTest = function (courseid) {
        // console.log( " goging to  test " + courseid ) ; 
        this.navCtrl.push(TabTestsPage_1);
        this.navCtrl.setRoot('TestsListPage', { 'courseid': courseid });
    };
    TabTestsPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad TabTestsPage');
    };
    TabTestsPage = TabTestsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tab-tests',template:/*ion-inline-start:"C:\sandeep\apps\mathemagicNew\src\pages\tab-tests\tab-tests.html"*/'<!--\n  Generated template for the TabTestsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="blue">\n      <ion-title>\n        My Tests\n      </ion-title>\n      <ion-buttons end>\n        <button ion-button (click)="logout()">\n          <ion-icon name="log-out"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content class="tabtests-content" padding>\n\n    <ion-card *ngFor="let course of usercourses" (click)="test($event, course)">\n        <!--CONTENT HERE-->\n        </ion-card>\n\n        <button ion-item *ngFor="let course of userCourses" (click)="goToTest(course.id)">\n          {{course.name}}  </button>  \n\n\n   \n         \n</ion-content>\n'/*ion-inline-end:"C:\sandeep\apps\mathemagicNew\src\pages\tab-tests\tab-tests.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_courses_service_courses_service__["a" /* CoursesService */]])
    ], TabTestsPage);
    return TabTestsPage;
    var TabTestsPage_1;
}());

//# sourceMappingURL=tab-tests.js.map

/***/ })

});
//# sourceMappingURL=41.js.map