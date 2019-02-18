import { GetBase64ImageService } from './../../providers/get-base64-image/get-base64-image';
import { SanitizeHtmlPipe } from './../../components/sanitizehtml-pipe/sanitizehtml-pipe';
import { QuizService } from './../../providers/quiz-service/quiz-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer' ; 
import { Config, Nav, Platform } from 'ionic-angular';


 
/**
 * Generated class for the ShowQuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-quiz',
  templateUrl: 'show-quiz.html',
})
export class ShowQuizPage {
public questions : any ; 
public currentQuestionNo = 0 ; 
public currentQuestion : any ;  
public option1  : any ;
public option2 :any ; 
public option3 :any ; 
public option4 :any ; 
public testid : any ; 
public testName : any ; 
public caller : any ; 
public base64Image : any ; 
public matchList = []; 

user : any; 

  constructor(public navCtrl: NavController, public navParams: NavParams , private platform: Platform,public alertCtrl: AlertController,public getBase64Image : GetBase64ImageService , public quizService : QuizService) {
    this.user = localStorage.getItem("loggedUser") ; 

    this.caller = navParams.get("caller") ; 
   // console.log ( "called from " + this.caller ) ; 
    if (( this.caller == 'summary') || (  this.caller == 'results')) {

     
      this.currentQuestionNo = navParams.get( "questionNo")-1; 
      this.questions = navParams.get("questions"); 
    //  console.log ( "called from summary . got questions " + JSON.stringify(this.questions)) ; 
    } else { 
 // console.log ( " showing questions for quiz "  + navParams.get('testid')) ; 

  this.testid = navParams.get('testid') ; 
  this.testName = navParams.get('testName') ; 
    } 

 
}

ngOnInit() {



  if (( this.caller != 'summary') && (  this.caller != 'results')) { 

   /*for removal of localstorage  
      
    if ( localStorage.getItem("quizid"+this.testid)) {
      //console.log( " getting JSON from local for "  + this.testid  +JSON.parse(localStorage.getItem("quizid"+this.testid)) ) ; 
      this.questions = JSON.parse(localStorage.getItem("quizid"+this.testid) ); 
     // console.log( "questions from local is " + this.questions[0].text) ; 
    }

    else { 
    */

  this.quizService.getQuestionsForQuiz(this.testid).subscribe( data => { 
    //console.log( "got this data " + JSON.stringify( data )) ; 
    this.questions = this.quizService.questions; 
    ; 
    // console.log( " fininding base64 ") ; 
    //this.transformQuestion(this.questions , this.getBase64Image);

        });
   // } for removal of localstorage 
  } 
  else {  //console.log( "chill....") ;
 }

 

}

public prevQuestion()  {

  this.currentQuestionNo -- ; 
  //console.log( "showing question  "+ this.currentQuestionNo) ; 
}

public nextQuestion(){

  this.currentQuestionNo ++ ;  
  //console.log( "showing question "+ this.currentQuestionNo) ; 
}

showConfirmAlert(option) {
   var showMessage =  ""; 
   var nextPage = ""; 

  if ( option == "submit") { 
  showMessage = 'Are you sure you want to submit this test?' ; 
  nextPage = "TestSummaryPage" ; 

  }
  if ( option == "back")
  {
  showMessage = "Are you sure to exit and go to back to test List? "
  nextPage = "TestsListPage" ; 
  }
  if ( option == "logout")
  {
  showMessage = "Are you sure that you want to logout of the app ? "
  nextPage = "login" ; 
  }

  let confirmAlert = this.alertCtrl.create({
    title: 'Are you Sure?',
    message: showMessage ,
    buttons: [
      {
        text: 'No',
        handler: () => {
          console.log('Disagree clicked');
        }
      },
      {
        text: 'Yes',
        handler: () => {
          console.log('Agree clicked'); 
           if ( option == 'logout') {
             this.logout(); 
           }
           if ( option == "submit") {
            nextPage = "TestSummaryPage" 
          } if ( option == 'back')
          { nextPage = "TestsListPage" ; } 
         
          var courseid = localStorage.getItem("currentCourse") ; 
          console.log( " taking to summary page " + courseid ) ; 
          
          this.navCtrl.setRoot(  nextPage , { courseid : courseid , questions : this.questions } );
          

          // Your Imagination should go here
        }
      }
    ]
  });
  confirmAlert.present();
}

public    transformQuestion(questions , getImage : GetBase64ImageService) { 

  
let matchStr = /<img src=....*?.gif>/g;
var  strMatch  = new String() ; 

/*
while (match = matchStr.exec(question)) {
  console.log("Found", match[0], "at", match.index);
}
*/
 

let ImageMap : Map< string , string> = new Map<string, string>  () ; 

let imageURLArr = [] ; 




var serviceCounter = 0 ; 
var matchCount = 0 ; 
var gifoffset = 0 ; 
for ( var i = 0 ; i < questions.length ; i++ ) { 

//console.log( "finding match in " + questions[i].text) ; 
var imgURL ; 
//console.log( questions[i].text.replace(/<img src=...*?.gif>/g,    function( match, offset ){   
  console.log( questions[i].text.replace(/<img src=...*?.gif..*>/g,    function( match, offset ){ 
                                        
  strMatch = match ; 


    matchCount++ ; 
//  console.log( "match is  " + match  + "url is " + offset) ;
  
  gifoffset = strMatch.indexOf( ".gif") ; 
 // console.log ( "got offset for gif " +  gifoffset   + ">" + strMatch  + "<" + match.length) ; 
  imgURL  = match.substring(9,gifoffset + 4 );
  //imgURL  = match.substring(9,match.length-1-offset );
  //console.log( "get for " + i + "-" +  imgURL ) ;
   ; 

  getImage.getBase64Image(imgURL ).subscribe( data => {
  serviceCounter ++ ; 
  console.log( " sericce counter now is " + serviceCounter ) ; 
  console.log( " set base64 image for "  + data + "to " + getImage.base64Image );
  ImageMap.set( data, getImage.base64Image) ; 

  //imageURLArr.push( imgURL + '-' + getImage.base64Image  ) ; 
  if ( serviceCounter == matchCount ) { 
   // console.log( "ImageMap is " + ImageMap.get(imgURL) ) ; 

    for ( var i = 0 ; i < questions.length ; i++ ) { 
    var replaceURL ; 
    questions[i].text = questions[i].text.replace(/<img src=...*?.gif..*>/g,    function( match, offset ){ 

      gifoffset = strMatch.indexOf( ".gif") ;  
      imgURL  = match.substring(9,gifoffset  + 4 );
      
      replaceURL = "<img src=data:image/jpg;base64," + ImageMap.get(imgURL) + " />" ; 
      //console.log( " replacing " + imgURL + "with " + replaceURL) ;
      return replaceURL ; 

    } ) ; 
  }
    //console.log( "replaced question Arr  is " + JSON.stringify(questions) )  ; 


    }

   
  }) ; 


}) );

  }
  //console.log ( " match Array is " + ShowQuizPage.matchList) ; 
 // console.log( " imgURL arre is now " + imageURLArr.length + imageURLArr   ); 

}





 

public   toDataUrl(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
      var reader = new FileReader();
      reader.onloadend = function() {
          callback(reader.result);
      }
      reader.readAsDataURL(xhr.response);
  };
  xhr.open('GET', url);
  xhr.responseType = 'blob';
  xhr.send();
}
public  logout()  {
   
  
  localStorage.removeItem("loggedUser") ; 

  this.navCtrl.setRoot('LoginPage');

  }


public flagQuestion() 
{

  this.questions[this.currentQuestionNo].isFlagged = !this.questions[this.currentQuestionNo].isFlagged ;
 // console.log( "value for flag   toggled ") ; 
}



  ionViewDidLoad() {
  //  console.log('ionViewDidLoad ShowQuizPage');
  }

}
