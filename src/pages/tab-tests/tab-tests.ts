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

    if ( coursesService.courses == undefined )  {
      var userName = localStorage.getItem("loggedUser") ; 

      this.coursesService.getCoursesForUser(userName).subscribe( data => { 
      console.log( "got this course data for logged in user " + JSON.stringify( data )) ; 
        this.userCourses = coursesService.courses  ; 
        });

 

    } 
    else { 
   // console.log( " coursesfor  this  user are " + JSON.stringify(coursesService.courses ) ) ; 
    this.userCourses = coursesService.courses  ; 
    //console.log( " coursesfor this user are " + JSON.stringify( CoursesService.courses) ) ; 
    } 
  }
  
  
  public  logout()  {
   
  
    localStorage.removeItem("loggedUser") ; 
  
    this.navCtrl.setRoot('LoginPage');
  
    }
    
  public goBack() { 



  }
  public goToTest(courseid ) {

  // console.log( " goging to  test " + courseid ) ; 
   this.navCtrl.push(TabTestsPage);
   this.navCtrl.setRoot('TestsListPage',{ 'courseid' : courseid } );
   localStorage.setItem("currentCourse", courseid) ; 


  }

  ionViewDidLoad() {
   // console.log('ionViewDidLoad TabTestsPage');
  }

}
