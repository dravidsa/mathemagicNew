webpackJsonp([6],{

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestSummaryPageModule", function() { return TestSummaryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__test_summary__ = __webpack_require__(392);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TestSummaryPageModule = /** @class */ (function () {
    function TestSummaryPageModule() {
    }
    TestSummaryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__test_summary__["a" /* TestSummaryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__test_summary__["a" /* TestSummaryPage */]),
            ],
        })
    ], TestSummaryPageModule);
    return TestSummaryPageModule;
}());

//# sourceMappingURL=test-summary.module.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestSummaryPage; });
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
 * Generated class for the TestSummaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TestSummaryPage = /** @class */ (function () {
    function TestSummaryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.questions = navParams.get("questions");
        this.user = localStorage.getItem("loggedUser");
        console.log("got questions " + JSON.stringify(this.questions));
    }
    TestSummaryPage.prototype.logout = function () {
        localStorage.removeItem("loggedUser");
        this.navCtrl.setRoot('LoginPage');
    };
    TestSummaryPage.prototype.gotoQuestion = function (questionNo) {
        this.navCtrl.setRoot('ShowQuizPage', { questionNo: questionNo, caller: 'summary', questions: this.questions });
    };
    TestSummaryPage.prototype.submitTest = function () {
        this.navCtrl.setRoot('TestResultsPage', { questions: this.questions });
    };
    TestSummaryPage.prototype.ionViewDidLoad = function () {
        //  console.log('ionViewDidLoad TestSummaryPage');
    };
    TestSummaryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-test-summary',template:/*ion-inline-start:"C:\sandeep\apps\mathemagicNew\src\pages\test-summary\test-summary.html"*/'<!--\n  Generated template for the TestSummaryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="blue">\n      <ion-title>\n        Test Summary\n      </ion-title>\n      <ion-buttons end>\n        <button ion-button (click)="logout()">\n          <ion-icon name="log-out"> {{user}}</ion-icon>\n        </button>\n        <button menuToggle="left">\n            <ion-icon name="menu"></ion-icon>\n          </button>\n      </ion-buttons>\n      </ion-navbar> \n  </ion-header>>\n\n\n<ion-content class="testsummary-content" padding>\n\n    <ion-grid>\n        <ion-row>\n          <ion-col> <ion-item>\n           Question #</ion-item>\n          </ion-col>\n          <ion-col><ion-item>\n            Status</ion-item>\n          </ion-col>\n          <ion-col><ion-item>\n            Flagged?</ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-list>\n          <button ion-item *ngFor="let question of questions" (click)="gotoQuestion(question.question_no)">\n          <ion-row>\n          <ion-col>\n            <ion-item>\n              {{ question.question_no }}\n            </ion-item>\n          </ion-col>\n          <ion-col *ngIf="question.userSelection" ion-text color="primary"><ion-item>Answered</ion-item></ion-col>\n          <ion-col *ngIf="!question.userSelection" ion-text color="danger" ><ion-item>Not Answered</ion-item></ion-col>\n          <ion-col  *ngIf="!question.isFlagged" ion-text color="primary" ><ion-item>  </ion-item></ion-col>\n          <ion-col  *ngIf="question.isFlagged" ion-text color="primary" ><ion-item> <ion-icon name="flag"></ion-icon></ion-item></ion-col>\n           </ion-row>\n          </button>\n\n        </ion-list> \n\n\n      <button   ion-button full=true color="danger" round (click)="submitTest()"  >Submit Test</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\sandeep\apps\mathemagicNew\src\pages\test-summary\test-summary.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], TestSummaryPage);
    return TestSummaryPage;
}());

//# sourceMappingURL=test-summary.js.map

/***/ })

});
//# sourceMappingURL=6.js.map