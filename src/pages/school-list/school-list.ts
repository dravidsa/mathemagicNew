//import { BuyProductPage } from './../buy-product/buy-product';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GetSchoolsService } from '../../providers/get-schools/get-schools';

import { FilterPipe } from './../../pipes/filter/filter';

/**
 * Generated class for the SchoolListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-school-list',
  templateUrl: 'school-list.html',
})
export class SchoolListPage {
schools : any; 
schoolName : any; 
refGetSchoolService : GetSchoolsService  ; 
schoolMessage : any; 

  constructor(public navCtrl: NavController, public navParams: NavParams, getSchoolsService : GetSchoolsService) {
    this.schoolName = navParams.get("schoolName"); 
    console.log( "got this school in showList" + this.schoolName ) ; 
this.refGetSchoolService = getSchoolsService ; 

    getSchoolsService.getSchools(this.schoolName).subscribe( data => { 
      console.log( "got this data  " + JSON.stringify( data )) ; 
      if ( data == "failed") { 
        this.schoolMessage = "no schools found with this criteria" ; 

        //alert("no schools found with this criteria") ; 
        return; 

      }
      //this.schoolMessage = "showing schools matching the name " ; 
      this.schools = getSchoolsService.schools ; 
      });

  }
 public setSchool( id , schoolName ) { 
 this.refGetSchoolService.selectedSchoolId = id ; 
 this.refGetSchoolService.selectedSchoolName = schoolName ; 
 console.log ( "setting selected schhool name to " + schoolName ); 
 
 


  this.navCtrl.pop(   ) ; 

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SchoolListPage');
  }

}
