import { TestsService } from './../../providers/tests-service/tests-service';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { TestsService } from '../../providers/tests-service/tests-service' ; 

/**
 * Generated class for the TestsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tests-list',
  templateUrl: 'tests-list.html',
})
export class TestsListPage {
tests : any ; 

  constructor(public navCtrl: NavController, public navParams: NavParams , public testsService:  TestsService ) {
    console.log( "showing tests for courseid " + navParams.get('courseid'));

   


   testsService.getTestsForCourse(navParams.get('courseid')).subscribe( data => { 
   console.log( "got this data " + JSON.stringify( data )) ; 
   this.tests = testsService.tests; 

   }); 

   console.log( "got these tests for course" + JSON.stringify( this.tests)) ; 
  

  }
  public solveTest( testid ,testName ) { 
  console.log ( " going to test " + testid ) ; 

  this.navCtrl.setRoot('ShowQuizPage',{ 'testid' : testid , 'testName' : testName  } );
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TestsListPage');
  }

}
