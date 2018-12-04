import { SanitizeHtmlPipe } from './../../components/sanitizehtml-pipe/sanitizehtml-pipe';
import { QuizService } from './../../providers/quiz-service/quiz-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer' ; 

 
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
public caller : any ; 
public base64Image : any ; 


  constructor(public navCtrl: NavController, public navParams: NavParams , public alertCtrl: AlertController,public quizService : QuizService) {
  
    this.caller = navParams.get("caller") ; 
    console.log ( "called from " + this.caller ) ; 
    if (( this.caller == 'summary') || (  this.caller == 'results')) {

     
      this.currentQuestionNo = navParams.get( "questionNo")-1; 
      this.questions = navParams.get("questions"); 
      console.log ( "called from summary . got questions " + JSON.stringify(this.questions)) ; 
    } else { 
  console.log ( " showing questions for quiz "  + navParams.get('testid')) ; 

  this.testid = navParams.get('testid') ; 
    } 


 
}

ngOnInit() {

  if (( this.caller != 'summary') && (  this.caller != 'results')) { 
  this.quizService.getQuestionsForQuiz(this.testid).subscribe( data => { 
    console.log( "got this data " + JSON.stringify( data )) ; 
    this.questions = this.quizService.questions; 
    ; 

  });
  } 
  else {  console.log( "chill....") ; }
}

public prevQuestion()  {

  this.currentQuestionNo -- ; 
  console.log( "showing question "+ this.currentQuestionNo) ; 
}

public nextQuestion(){

  this.currentQuestionNo ++ ;  
  console.log( "showing question "+ this.currentQuestionNo) ; 
}

showConfirmAlert() {
  let confirmAlert = this.alertCtrl.create({
    title: 'Are you Sure?',
    message: 'Are you sure you want to submit this test?',
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
          this.navCtrl.setRoot('TestSummaryPage', { questions : this.questions} );

          // Your Imagination should go here
        }
      }
    ]
  });
  confirmAlert.present();
}

public  transformQuesdtion(questions) { 

  
let matchStr = /<img src=....*?.gif>/g;
let match;
/*
while (match = matchStr.exec(question)) {
  console.log("Found", match[0], "at", match.index);
}
*/
console.log( questions[0].replace(/<img src=...*?.gif>/g, this.replaceImage)) ;
//console.log( "stock is " + stock ) ;
//console.log(stock.replace(/(\d+) (\w+)/g, minusOne));
// ? no lemon, 1 cabbage, and 100 eggs
}


public  toDataUrl(url, callback) {
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


public  replaceImage( match , url) {

//console.log( "match is " + match  + "url is " + url) ;

URL  = match.substring(9,match.length-1) ; 
console.log ( "finding data url for " + URL ); 

//return ( "<img src=something else>") ;
this.toDataUrl(URL , function(myBase64) {
    console.log(myBase64); // myBase4 is the base64 string
    return myBase64 ; 
});

}

public flagQuestion() 
{

  this.questions[this.currentQuestionNo].isFlagged = !this.questions[this.currentQuestionNo].isFlagged ;
  console.log( "value for flag toggled ") ; 
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowQuizPage');
  }

}
