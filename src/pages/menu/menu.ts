import { TabsHomePage } from './../tab-home/tab-home';
import { TabProductsPage } from './../tab-products/tab-products';
import { TabTestsPage } from './../tab-tests/tab-tests';
import { TabServicesPage } from './../tab-services/tab-services';

import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Nav } from 'ionic-angular';
 
export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}
 
@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  // Basic root for our content view
  rootPage = 'TabsPage';
  user : any ; 

  // Reference to the app's root nav
  @ViewChild(Nav) nav: Nav;
 
  pages: PageInterface[] = [
    { title: 'Home', pageName: 'TabsHomePage', tabComponent: 'TabsHomePage', index: 0, icon: 'home' },
    { title: 'Buy Products', pageName: 'TabsProductsPage', tabComponent: 'TabProductsPage', index: 1, icon: 'cart' },
    { title: 'Tests', pageName: 'TabsTestPage', tabComponent: 'TabTestsPage', index: 2, icon: 'contacts' },
    { title: 'Services', pageName: 'TabsServicesPage', tabComponent: 'TabServicesPage', index: 3, icon: 'contacts' },
    
  ];
 
  constructor(public navCtrl: NavController) {

    this.user = localStorage.getItem("loggedUser") ; 
    console.log( " user is now " + this.user) ; 

   }

  openPage(page: PageInterface) {
    let params = {};
    this.user = localStorage.getItem("loggedUser") ; 
    console.log( " in open page user is xxx "+ this.user) ; 

    if ( !this.user  ){

      console.log( "user is null  going to Login ") ;
      this.navCtrl.setRoot("LoginPage"); 

    }
 
    // The index is equal to the order of our tabs inside tabs.ts
    if (page.index) {
      params = { tabIndex: page.index };
    }
 
    // The active child nav is our Tabs Navigation
    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    } else {
      // Tabs are not active, so reset the root page 
      // In this case: moving to or from SpecialPage
      this.nav.setRoot(page.pageName, params);
    }
  }


  isActive(page: PageInterface) {
    // Again the Tabs Navigation
    let childNav = this.nav.getActiveChildNav();
 
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }
 
    // Fallback needed when there is no active childnav (tabs not active)
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
    return;
  }
 
}