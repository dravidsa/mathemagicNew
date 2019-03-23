webpackJsonp([7],{

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestResultsPageModule", function() { return TestResultsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__test_results__ = __webpack_require__(392);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TestResultsPageModule = /** @class */ (function () {
    function TestResultsPageModule() {
    }
    TestResultsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__test_results__["a" /* TestResultsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__test_results__["a" /* TestResultsPage */]),
            ],
        })
    ], TestResultsPageModule);
    return TestResultsPageModule;
}());

//# sourceMappingURL=test-results.module.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestResultsPage; });
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
 * Generated class for the TestResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TestResultsPage = /** @class */ (function () {
    function TestResultsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = localStorage.getItem("loggedUser");
        this.questions = navParams.get("questions");
        // console.log ( "got questions in results " + this.questions ) ; 
        this.calculateMarks();
    }
    TestResultsPage.prototype.logout = function () {
        localStorage.removeItem("loggedUser");
        this.navCtrl.setRoot('LoginPage');
    };
    TestResultsPage.prototype.gotoQuestion = function (questionNo) {
        // console.log( " reviewing question  in results " + questionNo); 
        this.navCtrl.setRoot('ShowQuizPage', { questionNo: questionNo, caller: 'results', questions: this.questions });
    };
    TestResultsPage.prototype.calculateMarks = function () {
        this.correctQuestions = 0;
        this.outOfMarks = 0;
        this.totalMarks = 0;
        for (var i = 0; i < this.questions.length; i++) {
            if (this.questions[i].userSelection == this.questions[i].correct) {
                this.correctQuestions++;
                this.totalMarks = this.totalMarks + Number.parseInt(this.questions[i].marks);
            }
            this.outOfMarks = this.outOfMarks + Number.parseInt(this.questions[i].marks);
        }
        // console.log( "correct questions = " + this.correctQuestions+ " total marks " + this.totalMarks + "out of "+ this.outOfMarks) ; 
    };
    TestResultsPage.prototype.back = function () {
        this.navCtrl.setRoot('TabTestsPage');
    };
    TestResultsPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad TestResultsPage');
    };
    TestResultsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-test-results',template:/*ion-inline-start:"C:\sandeep\apps\mathemagicNew\src\pages\test-results\test-results.html"*/'<!--\n  Generated template for the TestResultsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="blue">\n      <ion-title>\n        Test Results \n      </ion-title>\n      <ion-buttons end>\n        <button ion-button (click)="logout()">\n          <ion-icon name="log-out"> {{user}}</ion-icon>\n        </button>\n        <button menuToggle="left">\n            <ion-icon name="menu"></ion-icon>\n          </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content class="testresults-content" padding>\n\n    <ion-card>\n        <ion-card-header>\n          Test Results \n        </ion-card-header>\n      \n        <ion-list>\n          <button ion-item>\n            <ion-icon name="list-box" item-start></ion-icon>\n            Total Questions : {{ questions.length}}\n          </button>\n      \n        \n      \n          <button ion-item>\n            <ion-icon name="checkbox" item-start></ion-icon>\n            Correct Questions : {{correctQuestions}}\n\n          </button>\n          <button ion-item>\n              <ion-icon name="close" item-start></ion-icon>\n              In-Correct  Questions : {{questions.length - correctQuestions}}\n              \n            </button>\n            <button ion-item>\n                <ion-icon name="ribbon" item-start></ion-icon>\n                Marks Obtained  : {{totalMarks}} / {{outOfMarks}}\n                \n              </button>\n              </ion-list>\n\n    </ion-card>\n\n    <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n           Question #\n          </ion-item>\n          </ion-col>\n          <ion-col>\n              <ion-item>\n            Status\n          </ion-item>\n          </ion-col>\n          <ion-col>\n              <ion-item>\n            Marks\n          </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-list>\n          <button ion-item *ngFor="let question of questions" (click)="gotoQuestion(question.question_no)">\n          <ion-row>\n          <ion-col>\n              <ion-item>\n              {{ question.question_no }}\n              </ion-item>\n          </ion-col>\n          \n          <ion-col *ngIf="question.userSelection == question.correct" ion-text color="primary">\n              <ion-item>\n            <ion-icon name="checkbox" item-start></ion-icon>\n              </ion-item> </ion-col>\n\n          <ion-col *ngIf="question.userSelection != question.correct" ion-text color="danger" >\n              <ion-item>\n            <ion-icon name="close" item-start></ion-icon> \n          </ion-item></ion-col>\n        \n          <ion-col  *ngIf="question.userSelection == question.correct" ion-text color="primary" > <ion-item>{{question.marks }}</ion-item></ion-col>\n          <ion-col  *ngIf="question.userSelection != question.correct" ion-text color="primary" ><ion-item>0</ion-item></ion-col>\n        \n        </ion-row>\n        \n          </button>\n\n        </ion-list> \n\n\n\n\n   \n  \n      <button   ion-button full=true color="danger" round (click)="back()"  >Back to my Tests</button>\n</ion-content>\n'/*ion-inline-end:"C:\sandeep\apps\mathemagicNew\src\pages\test-results\test-results.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], TestResultsPage);
    return TestResultsPage;
}());

//# sourceMappingURL=test-results.js.map

/***/ })

});
//# sourceMappingURL=7.js.map