webpackJsonp([5],{

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestsListPageModule", function() { return TestsListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tests_list__ = __webpack_require__(406);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TestsListPageModule = /** @class */ (function () {
    function TestsListPageModule() {
    }
    TestsListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tests_list__["a" /* TestsListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tests_list__["a" /* TestsListPage */]),
            ],
        })
    ], TestsListPageModule);
    return TestsListPageModule;
}());

//# sourceMappingURL=tests-list.module.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestsListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_get_base64_image_get_base64_image__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_quiz_service_quiz_service__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_tests_service_tests_service__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(121);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





//import { TestsService } from '../../providers/tests-service/tests-service' ; 
/**
 * Generated class for the TestsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TestsListPage = /** @class */ (function () {
    function TestsListPage(navCtrl, navParams, testsService, quizService, getImage, loadingCtrl) {
        // console.log( "showing tests for courseid  " + navParams.get('courseid'));
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.testsService = testsService;
        this.quizService = quizService;
        this.getImage = getImage;
        this.loadingCtrl = loadingCtrl;
        this.getBase64Image = getImage;
        var calledFrom = navParams.get("calledFrom");
        if (calledFrom == 'services') {
            //alert( "called from services ") ;
            //alert("downloaded tests are " + localStorage.getItem("downloadedTests"));  
            this.tests = JSON.parse(localStorage.getItem("TestsForUser"));
            this.mode = "downloaded";
        }
        else {
            testsService.getTestsForCourse(navParams.get('courseid')).subscribe(function (data) {
                // console.log( "got this data " + JSON.stringify( data )) ; 
                _this.tests = testsService.tests;
                _this.mode = "all";
                localStorage.setItem("TestsForUser", JSON.stringify(_this.tests));
            });
        }
        //console.log( "got these tests for course" + JSON.stringify( this.tests)) ; 
    }
    TestsListPage.prototype.checkIfDownloaded = function (testid) {
        //console.log( " checking if downlaoded " + testid ) ; 
        if (localStorage.getItem("downloadedTests") == null)
            return false;
        var downloadedTests = localStorage.getItem("downloadedTests").split(",");
        for (var i = 0; i < downloadedTests.length; i++) {
            if (downloadedTests[i] == testid)
                return true;
        }
        return false;
    };
    TestsListPage.prototype.logout = function () {
        localStorage.removeItem("loggedUser");
        this.navCtrl.setRoot('LoginPage');
    };
    TestsListPage.prototype.goBack = function () {
        //  console.log( "going back 1 level ") ; 
        this.navCtrl.setRoot('TabTestsPage');
        //this.navCtrl.pop(); 
    };
    TestsListPage.prototype.solveTest = function (testid, testName) {
        //console.log ( " going to test " + testid ) ; 
        this.navCtrl.setRoot('ShowQuizPage', { 'testid': testid, 'testName': testName });
    };
    TestsListPage.prototype.showDownloadStatus = function (testid) {
        if (localStorage.getItem("quiz" + testid + "status") == undefined) {
            return "this test is not downloaded on this device ";
        }
        else
            return (localStorage.getItem("quiz" + testid + "status"));
    };
    TestsListPage.prototype.toDataUrl = function (url, callback) {
        console.log(" getting base for " + url);
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
    TestsListPage.prototype.getData = function (url) {
        var _this = this;
        //console.log( " in get data ") ; 
        return (new Promise(function (resolve, reject) {
            //console.log( 'promise create for ' + url) ; 
            _this.toDataUrl(url, function (myBase64) {
                // console.log( " for" + url + myBase64); // myBase4 is the base64 string
                resolve("<img src=" + myBase64 + " />");
            });
        }));
    };
    TestsListPage.prototype.deleteTest = function (testid) {
        console.log("going to delete the test" + testid);
        localStorage.removeItem("quiz" + testid);
        localStorage.removeItem("quiz" + testid + "status");
        if (localStorage.getItem("downloadedTests") != null) {
            var downloadedTests = localStorage.getItem("downloadedTests").split(",");
            console.log(" tests arr is " + downloadedTests + " index is " + downloadedTests.indexOf(testid));
            downloadedTests.splice(downloadedTests.indexOf(testid), 1);
            console.log("now the test arr is " + downloadedTests.join());
            localStorage.setItem("downloadedTests", downloadedTests.join());
        }
    };
    TestsListPage.prototype.downloadTest = function (testid) {
        //console.log( "downloading test " + testid ) ; 
        var _this = this;
        this.quizService.getQuestionsForQuiz(testid).subscribe(function (data) {
            //console.log( "got this data " + JSON.stringify( data )) ; 
            _this.questions = _this.quizService.questions;
            ;
            //alert("starting the donwload ...please wait  ") ; 
            _this.showLoading();
            _this.transformQuestion(_this.questions, _this.getBase64Image, testid, _this.navCtrl, _this.loading);
            //alert(" Test download Complete ") ; 
        });
    };
    TestsListPage.prototype.transformQuestion = function (questions, getImage, testid, nav, loading) {
        return __awaiter(this, void 0, void 0, function () {
            var ImageMap, imageURLArr, serviceCounter, matchCount, strMatch, imgURL, gifoffset, base64data, i, text, matches, matches, matches, matches, matches, d, n, downloadedTests;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ImageMap = new Map();
                        imageURLArr = [];
                        serviceCounter = 0;
                        matchCount = 0;
                        strMatch = new String();
                        gifoffset = 0;
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < questions.length)) return [3 /*break*/, 15];
                        text = questions[i].text;
                        if (!text.match(/<img src=...*?.gif[ ]*...*/g)) return [3 /*break*/, 3];
                        matches = text.match(/<img src=...*?.gif[ ]*...*/g).toString().split(',');
                        //console.log( "matches are " + matches.length + matches[0]  ) ; 
                        strMatch = matches[0];
                        gifoffset = strMatch.indexOf(".gif");
                        imgURL = strMatch.substring(9, gifoffset + 4);
                        console.log("Image is " + imgURL);
                        console.log("waiting ");
                        return [4 /*yield*/, this.getData(imgURL)];
                    case 2:
                        base64data = _a.sent();
                        text = text.replace(matches[0], base64data);
                        console.log(" replaced img with  " + text);
                        //return text;
                        questions[i].text = text;
                        return [3 /*break*/, 3];
                    case 3:
                        text = questions[i].ans1.replace('\'', '');
                        if (!text.match(/<img src=...*?.gif[ ]*...*\/>/g)) return [3 /*break*/, 5];
                        matches = text.match(/<img src=...*?.gif[ ]*...*\/>/g).toString().split(',');
                        //console.log( "matches are " + matches.length + matches[0]  ) ; 
                        strMatch = matches[0];
                        gifoffset = strMatch.indexOf(".gif");
                        imgURL = strMatch.substring(9, gifoffset + 4);
                        return [4 /*yield*/, this.getData(imgURL)];
                    case 4:
                        // console.log( "Image is " + imgURL) ;  
                        // console.log ( "waiting " ) ; 
                        base64data = _a.sent();
                        text = text.replace(matches[0], base64data);
                        //console.log( " replaced img with " + text ) ; 
                        //return text;
                        questions[i].ans1 = text;
                        return [3 /*break*/, 6];
                    case 5:
                        ;
                        _a.label = 6;
                    case 6:
                        text = questions[i].ans2.replace('\'', '');
                        ;
                        if (!text.match(/<img src=...*?.gif[ ]*...*\/>/g)) return [3 /*break*/, 8];
                        matches = text.match(/<img src=...*?.gif[ ]*...*\/>/g).toString().split(',');
                        //console.log( "matches are " + matches.length + matches[0]  ) ; 
                        strMatch = matches[0];
                        gifoffset = strMatch.indexOf(".gif");
                        imgURL = strMatch.substring(9, gifoffset + 4);
                        return [4 /*yield*/, this.getData(imgURL)];
                    case 7:
                        // console.log( "Image is " + imgURL) ;  
                        //console.log ( "waiting " ) ; 
                        base64data = _a.sent();
                        text = text.replace(matches[0], base64data);
                        //console.log( " replaced img with " + text ) ; 
                        //return text;
                        questions[i].ans2 = text;
                        return [3 /*break*/, 9];
                    case 8:
                        ;
                        _a.label = 9;
                    case 9:
                        text = questions[i].ans3.replace('\'', '');
                        ;
                        if (!text.match(/<img src=...*?.gif[ ]*...*\/>/g)) return [3 /*break*/, 11];
                        matches = text.match(/<img src=...*?.gif[ ]*...*\/>/g).toString().split(',');
                        //console.log( "matches are " + matches.length + matches[0]  ) ; 
                        strMatch = matches[0];
                        gifoffset = strMatch.indexOf(".gif");
                        imgURL = strMatch.substring(9, gifoffset + 4);
                        return [4 /*yield*/, this.getData(imgURL)];
                    case 10:
                        // console.log( "Image is " + imgURL) ;  
                        // console.log ( "waiting " ) ; 
                        base64data = _a.sent();
                        text = text.replace(matches[0], base64data);
                        // console.log( " replaced img with " + text ) ; 
                        //return text;
                        questions[i].ans3 = text;
                        return [3 /*break*/, 11];
                    case 11:
                        text = questions[i].ans4.replace('\'', '');
                        ;
                        if (!text.match(/<img src=...*?.gif[ ]*...*\/>/g)) return [3 /*break*/, 13];
                        matches = text.match(/<img src=...*?.gif[ ]*...*\/>/g).toString().split(',');
                        //console.log( "matches are " + matches.length + matches[0]  ) ; 
                        strMatch = matches[0];
                        gifoffset = strMatch.indexOf(".gif");
                        imgURL = strMatch.substring(9, gifoffset + 4);
                        return [4 /*yield*/, this.getData(imgURL)];
                    case 12:
                        //console.log( "Image is " + imgURL) ;  
                        //console.log ( "waiting " ) ; 
                        base64data = _a.sent();
                        text = text.replace(matches[0], base64data);
                        console.log(" replaced img with " + text);
                        //return text;
                        questions[i].ans4 = text;
                        return [3 /*break*/, 14];
                    case 13:
                        ;
                        _a.label = 14;
                    case 14:
                        i++;
                        return [3 /*break*/, 1];
                    case 15:
                        // console.log( " imgURL arre is now " + JSON.stringify(questions)   ); 
                        console.log("length of quiz is " + JSON.stringify(questions).length);
                        try {
                            localStorage.setItem("quiz" + testid, JSON.stringify(questions));
                        }
                        catch (e) {
                            alert("Eror while downloading the test . Short of local storage , delete some tests ");
                        }
                        this.loading.dismissAll();
                        d = new Date();
                        n = d.toDateString();
                        this.downloadStatus = n;
                        localStorage.setItem("quiz" + testid + "status", this.downloadStatus);
                        /*
                        console.log( "current value is " + JSON.stringify(this.tests[ testid]))  ;
                        console.log( "index of the test is " + this.tests.findIndex(x => x.id== testid )) ;
                        */
                        this.tests[this.tests.findIndex(function (x) { return x.id == testid; })].downloaded = "Y";
                        downloadedTests = localStorage.getItem("downloadedTests");
                        if (downloadedTests == null) {
                            downloadedTests = "";
                        }
                        ;
                        downloadedTests = downloadedTests + "," + testid;
                        localStorage.setItem("downloadedTests", downloadedTests);
                        return [2 /*return*/];
                }
            });
        });
    };
    TestsListPage.prototype.transformText = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var strMatch, imgURL, gifoffset, base64data, matches;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        strMatch = new String();
                        gifoffset = 0;
                        if (!text.match(/<img src=...*?.gif[ ]*/g)) return [3 /*break*/, 2];
                        console.log(" find match in q " + text.match(/<img src=...*?.gif[ ]*/g) + "XXX");
                        matches = text.match(/<img src=...*?.gif[ ]*/g).toString().split(',');
                        //console.log( "matches are " + matches.length + matches[0]  ) ; 
                        strMatch = matches[0];
                        gifoffset = strMatch.indexOf(".gif");
                        imgURL = strMatch.substring(9, gifoffset + 4);
                        console.log("Image is " + imgURL);
                        console.log("waiting ");
                        return [4 /*yield*/, this.getData(imgURL)];
                    case 1:
                        base64data = _a.sent();
                        text = text.replace(matches[0], base64data);
                        console.log(" replaced img with " + text);
                        return [2 /*return*/, text];
                    case 2:
                        console.log("no image  in questions no ");
                        return [2 /*return*/, text];
                }
            });
        });
    };
    TestsListPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait while this test is getting downloaded ...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    TestsListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TestsListPage');
    };
    TestsListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-tests-list',template:/*ion-inline-start:"C:\sandeep\apps\mathemagicNew\src\pages\tests-list\tests-list.html"*/'<!--\n  Generated template for the TestsListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="blue">\n      <ion-title>\n        Test List\n      </ion-title>\n      <ion-buttons end>\n        <button ion-button (click)="logout()">\n          <ion-icon name="log-out"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n\n\n\n<ion-content class="testlist-content" padding>                 \n    <div *ngIf="tests" >\n\n    <div *ngFor="let test  of tests" > \n            <div *ngIf="((mode==\'downloaded\')&&( checkIfDownloaded(test.id)== true )) || ( mode==\'all\') ">\n            <ion-card >                           \n              <ion-card-content>\n                   <ion-card-title>\n                   {{test.name }}  \n                    </ion-card-title>\n                   \n                                      \n                  \n                   \n                        <button ion-button  color="secondary" (click)= "solveTest(test.id , test.name)">Solve</button>  \n                        <button ion-button  *ngIf="mode == \'all\'" color="default" (click)= "downloadTest(test.id )">Download</button>  \n                        <button ion-button  *ngIf="mode == \'downloaded\'" color="danger" (click)= "deleteTest(test.id )">Delete</button>  \n                        \n                        <BR/> \n                        {{showDownloadStatus(test.id) }}\n                                    \n              \n\n                 \n              \n                </ion-card-content>\n                \n              </ion-card>\n\n            </div>\n              </div> \n\n        </div>\n        <button ion-button full=true color="danger" round (click)="goBack()"  >Back</button>\n\n</ion-content>\n\n\n'/*ion-inline-end:"C:\sandeep\apps\mathemagicNew\src\pages\tests-list\tests-list.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_tests_service_tests_service__["a" /* TestsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_tests_service_tests_service__["a" /* TestsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__providers_quiz_service_quiz_service__["a" /* QuizService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_quiz_service_quiz_service__["a" /* QuizService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__providers_get_base64_image_get_base64_image__["a" /* GetBase64ImageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__providers_get_base64_image_get_base64_image__["a" /* GetBase64ImageService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* LoadingController */]) === "function" && _f || Object])
    ], TestsListPage);
    return TestsListPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=tests-list.js.map

/***/ })

});
//# sourceMappingURL=5.js.map