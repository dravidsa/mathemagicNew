import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Config, Nav, Platform, AlertController, NavController } from 'ionic-angular';
import { Network } from '@ionic-native/network';
import { FirstRunPage } from '../pages';
import { Settings } from '../providers';
import { CommonModule } from '@angular/common';
import {TabServicesPage} from '../pages/tab-services/tab-services' 
import { GetOrdersProvider } from './../providers/get-orders/get-orders';
 

@Component({
  template: `<ion-menu [content]="content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">
          {{p.title}}
        </button>
      </ion-list>
    </ion-content>

  </ion-menu>
  <ion-nav #content [root]="rootPage"></ion-nav>`
})
export class MyApp {
  public onlineOffline: boolean = navigator.onLine;
  
  rootPage:any = 'LoginPage';
  //rootPage = FirstRunPage;

  @ViewChild(Nav) nav: Nav;
  currentUserId  : any  ; 
  orders : any ; 
  user : any ; 




  pages: any[] = [
  
    { title: 'Home', component: 'MenuPage' },
    { title: 'My Orders', component: 'ViewOrdersPage' },
    { title: 'My Tests', component: 'TestsListPage' },
    { title: 'Enroll For Exam', component: 'TabProductsPage' },
    { title: 'Log Out', component: 'LogoutPage' }
  ]


  
  constructor(private translate: TranslateService, platform: Platform ,  public network: Network  , public getOrders : GetOrdersProvider ,   public alertCtrl : AlertController ,settings: Settings, private config: Config, private statusBar: StatusBar, private splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      if ( this.network.type == 'none')  { 

        alert("Not connected to internet, some features may not work ") ; 

       }
      // alert("checking net "  + this.network.type ); 
      
      let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
        alert('network was disconnected :-(');
      });
      
      // stop disconnect watch
      disconnectSubscription.unsubscribe();
      
      
      // watch network for a connection
      let connectSubscription = this.network.onConnect().subscribe(() => {
        alert('network connected!');
        // We just got a connection but we need to wait briefly
         // before we determine the connection type. Might need to wait.
        // prior to doing any api requests as well.
        setTimeout(() => {
          if (this.network.type === 'wifi') {
            alert('we got a wifi connection, woohoo!');
          }
        }, 3000);
      });
      
      // stop connect watch
      connectSubscription.unsubscribe();
  



    });
    this.initTranslate();
 

 



    var lastTimeBackPress = 0;
    var timePeriodToExit = 2000;
  
    platform.registerBackButtonAction(() => {
      // get current active page
      let view = this.nav.getActive();
      //alert( " view is " + view.component.name) ; 
      if (view.component.name == "MenuPage") {
        //Double check to exit app                  
        if (new Date().getTime() - lastTimeBackPress < timePeriodToExit) {
          platform.exitApp(); //Exit from app
        } else {
          let toast = this.alertCtrl.create({
            message: 'Press back again to exit App'
            
          });
          toast.present();
          lastTimeBackPress = new Date().getTime();
        }
      } else {
        // go to previous page
       // alert("going to prev view") ; 
        this.nav.pop({});
      }
    });


  }

  

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();

    if (browserLang) {
      if (browserLang === 'zh') {
        const browserCultureLang = this.translate.getBrowserCultureLang();

        if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
          this.translate.use('zh-cmn-Hans');
        } else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
          this.translate.use('zh-cmn-Hant');
        }
      } else {
        this.translate.use(this.translate.getBrowserLang());
      }
    } else {
      this.translate.use('en'); // Set your language here
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }









  
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
   // this.nav.setRoot(page.component);
    console.log( "opening page"+ page.component) ; 


    this.user = localStorage.getItem("loggedUser") ; 
    console.log( " in open page user is >"+ this.user+"<") ; 

    if ( this.user == null ){

      console.log( "user is null  going to Login ") ;
      this.nav.setRoot("LoginPage"); 
      return; 

    }
 


   // this.tabservices.viewOrders() ; 

   if ( page.component == "ViewOrdersPage") { 
   this.currentUserId = localStorage.getItem("loggedUserId") ; 

    this.getOrders.getOrders(this.currentUserId).subscribe( data => { 
      //console.log( "got this data " + JSON.stringify( data )) ; 
      this.orders = this.getOrders.orders ;  
      this.nav.setRoot('ViewOrdersPage'  ,{ 'orders' : this.orders } ) ; 
      }); 
    }

    else if ( page.component == "LogoutPage") {  
      localStorage.removeItem("loggedUser") ; 
      this.nav.setRoot('LoginPage');
    }
    else if ( page.component == "TestsListPage") {  
      this.nav.setRoot('TestsListPage',{ 'courseid' : localStorage.getItem("currentCourse" ) });
       }

      else this.nav.setRoot(page.component) ; 

  }

  
}
