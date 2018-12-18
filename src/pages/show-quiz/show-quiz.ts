import { GetBase64ImageService } from './../../providers/get-base64-image/get-base64-image';
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
public testName : any ; 
public caller : any ; 
public base64Image : any ; 
public matchList = []; 



  constructor(public navCtrl: NavController, public navParams: NavParams , public alertCtrl: AlertController,public getBase64Image : GetBase64ImageService , public quizService : QuizService) {
  
    this.caller = navParams.get("caller") ; 
    console.log ( "called from " + this.caller ) ; 
    if (( this.caller == 'summary') || (  this.caller == 'results')) {

     
      this.currentQuestionNo = navParams.get( "questionNo")-1; 
      this.questions = navParams.get("questions"); 
      console.log ( "called from summary . got questions " + JSON.stringify(this.questions)) ; 
    } else { 
  console.log ( " showing questions for quiz "  + navParams.get('testid')) ; 

  this.testid = navParams.get('testid') ; 
  this.testName = navParams.get('testName') ; 
    } 


 
}

ngOnInit() {

  if (( this.caller != 'summary') && (  this.caller != 'results')) { 
  this.quizService.getQuestionsForQuiz(this.testid).subscribe( data => { 
    console.log( "got this data " + JSON.stringify( data )) ; 
    this.questions = this.quizService.questions; 
    ; 
    console.log( " fininding base64 ") ; 
    this.transformQuestion(this.questions , this.getBase64Image);

  });
  } 
  else {  console.log( "chill....") ; }
}

public prevQuestion()  {

  this.currentQuestionNo -- ; 
  console.log( "showing question  "+ this.currentQuestionNo) ; 
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

console.log( "finding match in " + questions[i].text) ; 
var imgURL ; 
//console.log( questions[i].text.replace(/<img src=...*?.gif>/g,    function( match, offset ){   
  console.log( questions[i].text.replace(/<img src=...*?.gif..*>/g,    function( match, offset ){ 
                                        
  strMatch = match ; 


    matchCount++ ; 
  console.log( "match is  " + match  + "url is " + offset) ;
  
  gifoffset = strMatch.indexOf( ".gif") ; 
  console.log ( "got offset for gif " +  gifoffset   + ">" + strMatch  + "<" + match.length) ; 
  imgURL  = match.substring(9,gifoffset + 4 );
  //imgURL  = match.substring(9,match.length-1-offset );
  console.log( "get for " + i + "-" +  imgURL ) ;
   ; 

  getImage.getBase64Image(imgURL ).subscribe( data => {
  serviceCounter ++ ; 
  console.log( " sericce counter now is " + serviceCounter ) ; 
  console.log( " set base64 image for "  + data + "to " + getImage.base64Image );
  ImageMap.set( data, getImage.base64Image) ; 

  //imageURLArr.push( imgURL + '-' + getImage.base64Image  ) ; 
  if ( serviceCounter == matchCount ) { 
    console.log( "ImageMap is " + ImageMap.get(imgURL) ) ; 

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
    console.log( "replaced question Arr  is " + JSON.stringify(questions) )  ; 


    }

   
  }) ; 


}) );



// console.log( "image Map is    " + ImageMap  ) ; 

//console.log( questions[i].text.replace(/<img src=...*?.gif>/g,  this.getURL) );
//console.log( questions[i].text.replace(/<img src=...*?.gif>/g, await this.replaceImage)) ;
//console.log( "question now is "+questions[1].text ) ; 
//console.log( "stock is " + stock ) ;
//console.log(stock.replace(/(\d+) (\w+)/g, minusOne));
// ? no lemon, 1 cabbage, and 100 eggs
  }
  //console.log ( " match Array is " + ShowQuizPage.matchList) ; 
  console.log( " imgURL arre is now " + imageURLArr.length + imageURLArr   ); 

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


/*
public  replaceImage( match , url) {

console.log( "match is  " + match  + "url is " + url) ;

URL  = match.substring(9,match.length-1) ; 
console.log ( "finding data url for " + URL ); 
//console.log( " this is good " + this.questions); 

ShowQuizPage.toDataUrl(URL , function(myBase64) {
    console.log(myBase64); // myBase4 is the base64 string
    
    return myBase64 ; 
});


}
*/

public flagQuestion() 
{

  this.questions[this.currentQuestionNo].isFlagged = !this.questions[this.currentQuestionNo].isFlagged ;
  console.log( "value for flag   toggled ") ; 
}




  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowQuizPage');
  }

}
