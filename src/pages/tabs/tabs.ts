import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 
@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
 
  tab1Root: any = 'TabsHomePage';
  tab2Root: any = 'TabProductsPage';
  tab3Root: any = 'TabTestsPage';
  tab4Root: any = 'TabServicesPage';

  myIndex: number;

  user : any ; 
 

 
  constructor(navParams: NavParams) {
    // Set the active tab based on the passed index from menu.ts

    this.user = localStorage.getItem("loggedUser") ; 
    console.log ( "user in tabs is "  + this.user) ; 

    this.myIndex = navParams.data.tabIndex || 0;
  }
}