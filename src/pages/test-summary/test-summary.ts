import { ShowQuizPage } from './../show-quiz/show-quiz';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the TestSummaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test-summary',
  templateUrl: 'test-summary.html',
})
export class TestSummaryPage {

  questions : any ;
  user : any;  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.questions = navParams.get("questions") ; 
  this.user = localStorage.getItem("loggedUser") ; 
  console.log( "got questions " + JSON.stringify(this.questions)) ; 

  }

  public  logout()  {
   
  
    localStorage.removeItem("loggedUser") ; 
  
    this.navCtrl.setRoot('LoginPage');
  
    }
  public gotoQuestion( questionNo) { 
    
   
    this.navCtrl.setRoot('ShowQuizPage' , { questionNo : questionNo , caller : 'summary', questions : this.questions });
    
  
  }

  public submitTest() {

    this.navCtrl.setRoot('TestResultsPage', { questions : this.questions});
  }
  ionViewDidLoad() {
  //  console.log('ionViewDidLoad TestSummaryPage');
  }

}
