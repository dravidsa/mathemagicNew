import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  CoursesService} from '../../providers/courses-service/courses-service' 
//import { RouterModule,Routes } from '@angular/router';

/**
 * Generated class for the TabTestsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({


  selector: 'page-tab-tests',
  templateUrl: 'tab-tests.html'

})
export class TabTestsPage {

  public userCourses ; 

  constructor(public navCtrl: NavController, public navParams: NavParams , public coursesService : CoursesService  ) {
    console.log( " coursesfor this user are " + JSON.stringify(coursesService.courses ) ) ; 
    this.userCourses = coursesService.courses  ; 
    //console.log( " coursesfor this user are " + JSON.stringify( CoursesService.courses) ) ; 

  }

  public goToTest(courseid ) {

   console.log( " goging to test " + courseid ) ; 
   this.navCtrl.setRoot('TestsListPage',{ 'courseid' : courseid } );


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabTestsPage');
  }

}
