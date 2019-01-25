webpackJsonp([14],{

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowQuizPageModule", function() { return ShowQuizPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_sanitizehtml_pipe_sanitizehtml_pipe__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__show_quiz__ = __webpack_require__(390);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ShowQuizPageModule = /** @class */ (function () {
    function ShowQuizPageModule() {
    }
    ShowQuizPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__show_quiz__["a" /* ShowQuizPage */], __WEBPACK_IMPORTED_MODULE_0__components_sanitizehtml_pipe_sanitizehtml_pipe__["a" /* SanitizeHtmlPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__show_quiz__["a" /* ShowQuizPage */]),
            ],
        })
    ], ShowQuizPageModule);
    return ShowQuizPageModule;
}());

//# sourceMappingURL=show-quiz.module.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowQuizPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_get_base64_image_get_base64_image__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_quiz_service_quiz_service__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(121);
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
 * Generated class for the ShowQuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ShowQuizPage = /** @class */ (function () {
    function ShowQuizPage(navCtrl, navParams, platform, alertCtrl, getBase64Image, quizService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.getBase64Image = getBase64Image;
        this.quizService = quizService;
        this.currentQuestionNo = 0;
        this.matchList = [];
        this.caller = navParams.get("caller");
        // console.log ( "called from " + this.caller ) ; 
        if ((this.caller == 'summary') || (this.caller == 'results')) {
            this.currentQuestionNo = navParams.get("questionNo") - 1;
            this.questions = navParams.get("questions");
            //  console.log ( "called from summary . got questions " + JSON.stringify(this.questions)) ; 
        }
        else {
            // console.log ( " showing questions for quiz "  + navParams.get('testid')) ; 
            this.testid = navParams.get('testid');
            this.testName = navParams.get('testName');
        }
    }
    ShowQuizPage.prototype.ngOnInit = function () {
        var _this = this;
        if ((this.caller != 'summary') && (this.caller != 'results')) {
            if (localStorage.getItem("quizid" + this.testid)) {
                //console.log( " getting JSON from local for "  + this.testid  +JSON.parse(localStorage.getItem("quizid"+this.testid)) ) ; 
                this.questions = JSON.parse(localStorage.getItem("quizid" + this.testid));
                // console.log( "questions from local is " + this.questions[0].text) ; 
            }
            else {
                this.quizService.getQuestionsForQuiz(this.testid).subscribe(function (data) {
                    //console.log( "got this data " + JSON.stringify( data )) ; 
                    _this.questions = _this.quizService.questions;
                    ;
                    // console.log( " fininding base64 ") ; 
                    //this.transformQuestion(this.questions , this.getBase64Image);
                });
            }
        }
        else {
        }
    };
    ShowQuizPage.prototype.prevQuestion = function () {
        this.currentQuestionNo--;
        //console.log( "showing question  "+ this.currentQuestionNo) ; 
    };
    ShowQuizPage.prototype.nextQuestion = function () {
        this.currentQuestionNo++;
        //console.log( "showing question "+ this.currentQuestionNo) ; 
    };
    ShowQuizPage.prototype.showConfirmAlert = function (option) {
        var _this = this;
        var showMessage = "";
        var nextPage = "";
        if (option == "submit") {
            showMessage = 'Are you sure you want to submit this test?';
            nextPage = "TestSummaryPage";
        }
        else {
            showMessage = "Are you sure to exit and go to back to test List? ";
            nextPage = "TestsListPage";
        }
        var confirmAlert = this.alertCtrl.create({
            title: 'Are you Sure?',
            message: showMessage,
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
                        if (option == "submit") {
                            nextPage = "TestSummaryPage";
                        }
                        else
                            nextPage = "TestsListPage";
                        var courseid = localStorage.getItem("currentCourse");
                        _this.navCtrl.setRoot(nextPage, { courseid: courseid });
                        // Your Imagination should go here
                    }
                }
            ]
        });
        confirmAlert.present();
    };
    ShowQuizPage.prototype.transformQuestion = function (questions, getImage) {
        var matchStr = /<img src=....*?.gif>/g;
        var strMatch = new String();
        /*
        while (match = matchStr.exec(question)) {
          console.log("Found", match[0], "at", match.index);
        }
        */
        var ImageMap = new Map();
        var imageURLArr = [];
        var serviceCounter = 0;
        var matchCount = 0;
        var gifoffset = 0;
        for (var i = 0; i < questions.length; i++) {
            //console.log( "finding match in " + questions[i].text) ; 
            var imgURL;
            //console.log( questions[i].text.replace(/<img src=...*?.gif>/g,    function( match, offset ){   
            console.log(questions[i].text.replace(/<img src=...*?.gif..*>/g, function (match, offset) {
                strMatch = match;
                matchCount++;
                //  console.log( "match is  " + match  + "url is " + offset) ;
                gifoffset = strMatch.indexOf(".gif");
                // console.log ( "got offset for gif " +  gifoffset   + ">" + strMatch  + "<" + match.length) ; 
                imgURL = match.substring(9, gifoffset + 4);
                //imgURL  = match.substring(9,match.length-1-offset );
                //console.log( "get for " + i + "-" +  imgURL ) ;
                ;
                getImage.getBase64Image(imgURL).subscribe(function (data) {
                    serviceCounter++;
                    console.log(" sericce counter now is " + serviceCounter);
                    console.log(" set base64 image for " + data + "to " + getImage.base64Image);
                    ImageMap.set(data, getImage.base64Image);
                    //imageURLArr.push( imgURL + '-' + getImage.base64Image  ) ; 
                    if (serviceCounter == matchCount) {
                        // console.log( "ImageMap is " + ImageMap.get(imgURL) ) ; 
                        for (var i = 0; i < questions.length; i++) {
                            var replaceURL;
                            questions[i].text = questions[i].text.replace(/<img src=...*?.gif..*>/g, function (match, offset) {
                                gifoffset = strMatch.indexOf(".gif");
                                imgURL = match.substring(9, gifoffset + 4);
                                replaceURL = "<img src=data:image/jpg;base64," + ImageMap.get(imgURL) + " />";
                                //console.log( " replacing " + imgURL + "with " + replaceURL) ;
                                return replaceURL;
                            });
                        }
                        //console.log( "replaced question Arr  is " + JSON.stringify(questions) )  ; 
                    }
                });
            }));
        }
        //console.log ( " match Array is " + ShowQuizPage.matchList) ; 
        // console.log( " imgURL arre is now " + imageURLArr.length + imageURLArr   ); 
    };
    ShowQuizPage.prototype.toDataUrl = function (url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            var reader = new FileReader();
            reader.onloadend = function () {
                callback(reader.result);
            };
            reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.send();
    };
    ShowQuizPage.prototype.logout = function () {
        localStorage.removeItem("loggedUser");
        this.navCtrl.setRoot('LoginPage');
    };
    ShowQuizPage.prototype.flagQuestion = function () {
        this.questions[this.currentQuestionNo].isFlagged = !this.questions[this.currentQuestionNo].isFlagged;
        // console.log( "value for flag   toggled ") ; 
    };
    ShowQuizPage.prototype.ionViewDidLoad = function () {
        //  console.log('ionViewDidLoad ShowQuizPage');
    };
    ShowQuizPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-show-quiz',template:/*ion-inline-start:"C:\sandeep\apps\mathemagicNew\src\pages\show-quiz\show-quiz.html"*/'<!--\n  Generated template for the ShowQuizPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="blue">\n      <ion-title>\n        Solve Test \n      </ion-title>\n      <ion-buttons end>\n        <button ion-button (click)="logout()">\n          <ion-icon name="log-out"> {{user}}</ion-icon>\n        </button>\n        <button menuToggle="left">\n            <ion-icon name="menu"></ion-icon>\n          </button>\n      </ion-buttons>\n      </ion-navbar>\n\n  </ion-header>\n\n\n    \n \n<ion-content class="showquiz-content" padding >\n    <font size= 6> \n        <p align="center" ><B><U> {{testName}}</U> </B> </p>  \n\n    <ion-list *ngIf="questions">\n       \n           \n         <B>Question No : {{ questions[currentQuestionNo].question_no}}</B>   <div *ngIf="questions[currentQuestionNo].userSelection!=questions[currentQuestionNo].correct && caller ==\'results\'" ion-text color="danger"  > <ion-icon name="close"></ion-icon></div>  <div *ngIf="questions[currentQuestionNo].userSelection==questions[currentQuestionNo].correct && caller ==\'results\' " ion-text color="secondary" ><ion-icon name="checkbox-outline"></ion-icon></div>\n          <BR/> \n\n          <span [innerHTML]=" questions[currentQuestionNo].text | sanitizeHtml "></span>\n          <ion-list radio-group [(ngModel)]="questions[currentQuestionNo].userSelection">\n           \n            \n              <ion-item>\n                <ion-label><span [innerHTML]=" questions[currentQuestionNo].ans1 | sanitizeHtml "></span></ion-label>\n                <ion-radio checked="false"  name="options"  value="1"></ion-radio>\n              </ion-item>\n              <ion-item>\n                  <ion-label><span [innerHTML]="questions[currentQuestionNo].ans2 | sanitizeHtml "></span></ion-label>\n                  <ion-radio checked="false"   name="options"  value="2"></ion-radio>\n                </ion-item>\n                <ion-item>\n                    <ion-label><span [innerHTML]="questions[currentQuestionNo].ans3 | sanitizeHtml "></span></ion-label>\n                    <ion-radio checked="false"  name="options"   value="3"></ion-radio>\n                  </ion-item>\n                <ion-item>\n                <ion-label><span [innerHTML]=" questions[currentQuestionNo].ans4 | sanitizeHtml "></span></ion-label>\n                      <ion-radio checked="false"  name="options"   value="4"></ion-radio>\n                </ion-item>\n          </ion-list>\n\n          <div *ngIf="caller==\'results\'">\n          <div *ngIf="questions[currentQuestionNo].userSelection==questions[currentQuestionNo].correct" ion-text color="secondary" >Correct </div>\n          <div *ngIf="questions[currentQuestionNo].userSelection!=questions[currentQuestionNo].correct" ion-text color="danger"  >Incorrect, correct Answer is {{questions[currentQuestionNo].correct}} </div> \n          </div>\n          <table>\n            <tr><td align="left"> \n          <button  [disabled]="currentQuestionNo == 0" ion-button color="Secondary" round (click)="prevQuestion()" >Prev</button></td>          \n          <td align="center" *ngIf="!questions[currentQuestionNo].isFlagged" ><button  ion-button color="danger" round (click)="flagQuestion()" (check)="questions[currentQuestionNo].isFlagged=true" >Flag</button></td>\n          <td align="center"  *ngIf="questions[currentQuestionNo].isFlagged" ><button  ion-button color="royal" round (click)="flagQuestion()" (check)="questions[currentQuestionNo].isFlagged=false" >UnFlag</button></td>\n          <td align="right" ><button  [disabled]="currentQuestionNo ==39" ion-button color="Secondary" round (click)="nextQuestion()" >Next</button></td>\n           </tr>\n\n            </table>\n\n        <div *ngIf="questions[currentQuestionNo].isFlagged" text-center > This question is Flagged </div> <BR/> \n\n      </ion-list>\n <button  *ngIf="caller!=\'results\'" ion-button full=true color="default" round (click)="showConfirmAlert(\'submit\')"  >Submit Test</button>\n <BR/>\n \n <button  *ngIf="caller!=\'results\'" ion-button full=true color="danger" round (click)="showConfirmAlert(\'back\')"  >Back to Test List</button>\n\n    </font>  \n</ion-content>\n'/*ion-inline-end:"C:\sandeep\apps\mathemagicNew\src\pages\show-quiz\show-quiz.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_0__providers_get_base64_image_get_base64_image__["a" /* GetBase64ImageService */], __WEBPACK_IMPORTED_MODULE_1__providers_quiz_service_quiz_service__["a" /* QuizService */]])
    ], ShowQuizPage);
    return ShowQuizPage;
}());

//# sourceMappingURL=show-quiz.js.map

/***/ })

});
//# sourceMappingURL=14.js.map