import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  CoursesService} from '../../providers/courses-service/courses-service' ; 


/**
 * Generated class for the ShowCoursesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-courses',
  templateUrl: 'show-courses.html',
})
export class ShowCoursesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public CoursesService) {
    console.log( " coursesfor this user are " + JSON.stringify( CoursesService.courses) ) ; 

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowCoursesPage');
  }

}
