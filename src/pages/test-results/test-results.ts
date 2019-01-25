import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TestResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test-results',
  templateUrl: 'test-results.html',
})
export class TestResultsPage {
questions : any ; 
totalMarks : number   ; 
outOfMarks : number ; 
correctQuestions : number ; 
user : any ; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = localStorage.getItem("loggedUser") ; 
  this.questions = navParams.get("questions") ; 

 // console.log ( "got questions in results " + this.questions ) ; 
  this.calculateMarks() ; 

  }

  public  logout()  {
   
  
    localStorage.removeItem("loggedUser") ; 
  
    this.navCtrl.setRoot('LoginPage');
  
    }

  public gotoQuestion( questionNo) { 
    
  // console.log( " reviewing question  in results " + questionNo); 

    this.navCtrl.setRoot('ShowQuizPage' , { questionNo : questionNo , caller : 'results', questions : this.questions });
    
  }
  

  private calculateMarks ( ) { 
    this.correctQuestions = 0 ; 
    this.outOfMarks = 0 ; 
    this.totalMarks =  0 ; 

     for ( var i = 0 ; i < this.questions.length ; i ++ ){
      if ( this.questions[i].userSelection == this.questions[i].correct)  {
          this.correctQuestions ++; 
          this.totalMarks = this.totalMarks + Number.parseInt(this.questions[i].marks) ; 
          

            } 
      this.outOfMarks = this.outOfMarks + Number.parseInt(this.questions[i].marks ); 
       }
    // console.log( "correct questions = " + this.correctQuestions+ " total marks " + this.totalMarks + "out of "+ this.outOfMarks) ; 

  }

  public back() 
  {

    this.navCtrl.setRoot('TabTestsPage'); 

  }
  ionViewDidLoad() {
   // console.log('ionViewDidLoad TestResultsPage');
  }

}
