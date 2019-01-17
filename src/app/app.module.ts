import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Camera } from '@ionic-native/camera';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { Items } from '../providers/items/items';
//import { Items } from '../mocks/providers/items';
import { Settings, User, Api } from '../providers';
import { MyApp } from './app.component';


import { AuthService } from '../providers/auth-service/auth-service';
import { QuizService } from '../providers/quiz-service/quiz-service';
import { TestsService } from '../providers/tests-service/tests-service';
import { ProductsService } from '../providers/products-service/products-service';
import { MessagesService } from '../providers/messages-service/messages-service';
import { CoursesService } from '../providers/courses-service/courses-service';
import { SanitizeHtmlPipe } from '../components/sanitizehtml-pipe/sanitizehtml-pipe';
import { GetSchoolsService } from '../providers/get-schools/get-schools';
import { SaveOrderService } from '../providers/save-order/save-order';
import { GetBillingService } from '../providers/get-billing/get-billing';
import { GetBase64ImageService } from '../providers/get-base64-image/get-base64-image';
import { InAppBrowser } from '../../node_modules/@ionic-native/in-app-browser';
import { Network } from '@ionic-native/network';
import { GetOrdersProvider } from '../providers/get-orders/get-orders';

//import {  RouterModule,  Routes} from '@angular/router'

// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function provideSettings(storage: Storage) {
  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
  return new Settings(storage, {
    option1: true,
    option2: 'Ionitron J. Framework',
    option3: '3',
    option4: 'Hello'
  });
}

@NgModule({
  declarations: [
    MyApp , 
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    Api,
    Items,
    User,
    Camera,
    SplashScreen,
    StatusBar,
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthService,
    QuizService,
    TestsService,
    ProductsService,
    MessagesService,
    TestsService,
    CoursesService , 
    SanitizeHtmlPipe,
    GetSchoolsService,
    SaveOrderService,
    GetBillingService,
    GetBase64ImageService,
    InAppBrowser,
    Network,
    GetOrdersProvider 

  ]
})
export class AppModule { }
