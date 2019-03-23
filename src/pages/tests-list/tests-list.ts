import { GetBase64ImageService } from './../../providers/get-base64-image/get-base64-image';
import { QuizService } from './../../providers/quiz-service/quiz-service';
import { TestsService } from './../../providers/tests-service/tests-service';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  LoadingController, Loading, } from 'ionic-angular';
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
questions : any ; 
getBase64Image  : any ;
loading : Loading ; 
downloadStatus : any ; 
mode : any ;
user : any ; 



  constructor(public navCtrl: NavController, public navParams: NavParams , public testsService:  TestsService , public quizService : QuizService  , public getImage : GetBase64ImageService, private loadingCtrl: LoadingController) {
   // console.log( "showing tests for courseid  " + navParams.get('courseid'));
   this.user = localStorage.getItem("loggedUser") ; 
   this.getBase64Image =getImage ; 

   var calledFrom = navParams.get("calledFrom") ; 
   if ( calledFrom == 'services' ) {
   //alert( "called from services ") ;
   //alert("downloaded tests are " + localStorage.getItem("downloadedTests"));  
   console.log( "tests for user are " +localStorage.getItem("TestsForUser") ) ; 
   if ( localStorage.getItem("TestsForUser") != null )
   this.tests = JSON.parse(localStorage.getItem("TestsForUser")) ; 
   
   
   this.mode = "downloaded" ; 

   } 
   else { 
   testsService.getTestsForCourse(navParams.get('courseid')).subscribe( data => { 
  // console.log( "got this data " + JSON.stringify( data )) ; 
   this.tests = testsService.tests; 
   this.mode = "all" ; 
   localStorage.setItem("TestsForUser", JSON.stringify( this.tests)) ; 

    }); 
  }
   //console.log( "got these tests for course" + JSON.stringify( this.tests)) ; 
  }
  
  public checkIfDownloaded( testid ) {
  console.log( " checking if downlaoded " + testid ) ; 
  if (localStorage.getItem("downloadedTests") == null ) return false; 

  var downloadedTests = localStorage.getItem("downloadedTests").split(",") ; 
 
  for ( var i = 0  ; i < downloadedTests.length ; i ++ )  { 

    if ( downloadedTests[i] == testid ) 
      return true; 
  }
  return false; 

  } 
  
  public  logout()  {
      localStorage.removeItem("loggedUser") ; 
      this.navCtrl.setRoot('LoginPage');
  }


  public goBack() {
  //  console.log( "going back 1 level ") ; 
    this.navCtrl.setRoot('TabTestsPage'); 
    //this.navCtrl.pop(); 

  }
  public solveTest( testid ,testName ) { 
  //console.log ( " going to test " + testid ) ; 

  this.navCtrl.setRoot('ShowQuizPage',{ 'testid' : testid , 'testName' : testName  } );
  }
 
  public showDownloadStatus ( testid ) { 
    if  ( localStorage.getItem("quiz" + testid+ "status") == undefined ) { 
            return "This test has not been downloaded on this device "  ; 
    }
    else 
      return ( "This test has been downloaded on - "+ localStorage.getItem(  "quiz" + testid+ "status"  )) ; 
  }
 
  public   toDataUrl(url, callback) {
    console.log( " getting base for " + url)  ; 
      var xhr = new XMLHttpRequest();
      xhr.onload = function() {
          var reader = new FileReader();
          reader.onloadend = function() {
              callback(reader.result);
          }
          reader.readAsDataURL(xhr.response);
      };
      xhr.open('GET', url);
      xhr.responseType = 'blob';
      xhr.send();
    }

   public   getData(url) {
    //console.log( " in get data ") ; 
      return( new Promise((resolve, reject ) => {
       //console.log( 'promise create for ' + url) ; 
       this.toDataUrl( url, function(myBase64) {
       // console.log( " for" + url + myBase64); // myBase4 is the base64 string
       resolve("<img src="+ myBase64 + " />" ) ; 
      
      }); 
       
       
        
      })) ;
      
    }

  public deleteTest( testid ) {
  console.log ( "going to delete the test" + testid ) ; 

  localStorage.removeItem("quiz"+testid) ; 
  localStorage.removeItem("quiz"+testid+"status"); 
  if  ( localStorage.getItem("downloadedTests")  != null ) { 
  var downloadedTests = localStorage.getItem("downloadedTests").split(",") ; 
  console.log( " tests arr is " + downloadedTests  + " index is "+ downloadedTests.indexOf(testid)) ; 
  downloadedTests.splice( downloadedTests.indexOf(testid),1) ; 
  console.log( "now the test arr is " +  downloadedTests.join() )
  localStorage.setItem("downloadedTests", downloadedTests.join()) ; 
  
  }



  }  
  public downloadTest( testid) { 

    //console.log( "downloading test " + testid ) ; 
    this.showLoading() ; 

    this.quizService.getQuestionsForQuiz(testid).subscribe( data => { 
      //console.log( "got this data " + JSON.stringify( data )) ; 
      this.questions = this.quizService.questions; 
      ; 
      //alert("starting the donwload ...please wait  ") ; 
    

      this.transformQuestion(this.questions , this.getBase64Image , testid , this.navCtrl , this.loading);
      //alert(" Test download Complete ") ; 
    
      
    });

  }

  public  async   transformQuestion(questions , getImage : GetBase64ImageService , testid , nav , loading  ) { 

    let ImageMap : Map< string , string> = new Map<string, string>  () ; 
    let imageURLArr = [] ; 
      
    var serviceCounter = 0 ; 
    var matchCount = 0 ; 
    var  strMatch  = new String() ; 
    var imgURL ; 
    var gifoffset = 0 ; 
    var base64data  ; 

    for ( var i = 0 ; i < questions.length ; i++ ) { 
      var text = questions[i].text  ; 
      // console.log( " looking in " + text ) ; 
       //if  ( text.match(/<img src=...*?.gif[ ]*...*\/>/g))  { 
        if  ( text.match(/<img src=...*?.gif[ ]*...*/g))  { 
      
     //   console.log( " find match in q "  + i+ text.match(/<img src=...*?.gif[ ]*/g) + "XXX"  ) ; 
        var matches =  text.match(/<img src=...*?.gif[ ]*...*/g).toString().split(',') ;
        //console.log( "matches are " + matches.length + matches[0]  ) ; 
        strMatch = matches[0] ; 
        gifoffset = strMatch.indexOf( ".gif") ; 
        imgURL  = strMatch.substring(9,gifoffset + 4 );
        console.log( "Image is " + imgURL) ;  
        console.log ( "waiting " ) ; 
        base64data  = await this.getData(imgURL) ; 
        text= text.replace (matches[0], base64data);
        console.log( " replaced img with  " + text ) ; 
        //return text;
        questions[i].text = text ; 

            }
            else { //console.log( "no image in questions no "+ i ) ; 
           }
  
      

       text = questions[i].ans1.replace('\'','')  ; 

        if  ( text.match(/<img src=...*?.gif[ ]*...*\/>/g))  { 
        
         // console.log( " find match in q ans1 "  + i+ text.match(/<img src=...*?.gif[ ]*/g) + "XXX"  ) ; 
          var matches =  text.match(/<img src=...*?.gif[ ]*...*\/>/g).toString().split(',') ;
          //console.log( "matches are " + matches.length + matches[0]  ) ; 
          strMatch = matches[0] ; 
          gifoffset = strMatch.indexOf( ".gif") ; 
          imgURL  = strMatch.substring(9,gifoffset + 4 );
         // console.log( "Image is " + imgURL) ;  
         // console.log ( "waiting " ) ; 
          base64data  = await this.getData(imgURL) ; 
          text= text.replace (matches[0], base64data);
          //console.log( " replaced img with " + text ) ; 
          //return text;
          questions[i].ans1 = text ; 
  
              }
              else { //console.log( "no image in questions no  for ans1 "+ i ) ;
               ;  }
    
        


         text = questions[i].ans2.replace('\'','')  ;   ; 
        //if  ( text.match(/<img src=...*?.gif[ ]*\/>/g))  { 
        if  ( text.match(/<img src=...*?.gif[ ]*...*\/>/g))  { 
        
         // console.log( " find match in q "  + i+ text.match(/<img src=...*?.gif[ ]*/g) + "XXX"  ) ; 
          var matches =  text.match(/<img src=...*?.gif[ ]*...*\/>/g).toString().split(',') ;
          //console.log( "matches are " + matches.length + matches[0]  ) ; 
          strMatch = matches[0] ; 
          gifoffset = strMatch.indexOf( ".gif") ; 
          imgURL  = strMatch.substring(9,gifoffset + 4 );
         // console.log( "Image is " + imgURL) ;  
          //console.log ( "waiting " ) ; 
          base64data  = await this.getData(imgURL) ; 
          text= text.replace (matches[0], base64data);
          //console.log( " replaced img with " + text ) ; 
          //return text;
          questions[i].ans2 = text ; 
  
              }
              else { //console.log( "no image in questions no  for ans2 "+ i ) ;
               ;  }
    
        

         text = questions[i].ans3.replace('\'','')  ;   ; 

        if  ( text.match(/<img src=...*?.gif[ ]*...*\/>/g))  { 
        
         // console.log( " find match in q "  + i+ text.match(/<img src=...*?.gif[ ]*/g) + "XXX"  ) ; 
          var matches =  text.match(/<img src=...*?.gif[ ]*...*\/>/g).toString().split(',') ;
          //console.log( "matches are " + matches.length + matches[0]  ) ; 
          strMatch = matches[0] ; 
          gifoffset = strMatch.indexOf( ".gif") ; 
          imgURL  = strMatch.substring(9,gifoffset + 4 );
         // console.log( "Image is " + imgURL) ;  
         // console.log ( "waiting " ) ; 
          base64data  = await this.getData(imgURL) ; 
          text= text.replace (matches[0], base64data);
         // console.log( " replaced img with " + text ) ; 
          //return text;
          questions[i].ans3 = text ; 
  
              }
              else { //console.log( "no image in questions no  for ans1 "+ i ) ; ;  
            }
    
       text = questions[i].ans4.replace('\'','')  ;   ; 

        if  ( text.match(/<img src=...*?.gif[ ]*...*\/>/g))  { 
        
          //console.log( " find match in q "  + i+ text.match(/<img src=...*?.gif[ ]*/g) + "XXX"  ) ; 
          var matches =  text.match(/<img src=...*?.gif[ ]*...*\/>/g).toString().split(',') ;
          //console.log( "matches are " + matches.length + matches[0]  ) ; 
          strMatch = matches[0] ; 
          gifoffset = strMatch.indexOf( ".gif") ; 
          imgURL  = strMatch.substring(9,gifoffset + 4 );
         //console.log( "Image is " + imgURL) ;  
          //console.log ( "waiting " ) ; 
          base64data  = await this.getData(imgURL) ; 
          text= text.replace (matches[0], base64data);
          console.log( " replaced img with " + text ) ; 
          //return text;
          questions[i].ans4 = text ; 
  
              }
              else {// console.log( "no image in questions no  for ans1 "+ i ) ; 
              ;  }
     }
    
 // console.log( " imgURL arre is now " + JSON.stringify(questions)   ); 
  console.log( "length of quiz is " + JSON.stringify(questions).length) ; 
  try { 
  localStorage.setItem("quiz" + testid, JSON.stringify(questions) ); 
  } catch (e )  { 

    alert( "Eror while downloading the test . Short of local storage , delete some tests " ) ; 
    
    this.loading.dismissAll();
    return; 
  }

  this.loading.dismissAll();
  //alert("donwload complete ") ; 
  var d = new Date();
  var n = d.toDateString(); 
  this.downloadStatus  =   n ; 
  localStorage.setItem("quiz"+testid+"status" , this.downloadStatus) ; 
  /*
  console.log( "current value is " + JSON.stringify(this.tests[ testid]))  ; 
  console.log( "index of the test is " + this.tests.findIndex(x => x.id== testid )) ;
  */
  this.tests[this.tests.findIndex(x => x.id== testid )].downloaded = "Y" ; 
  var  downloadedTests = localStorage.getItem("downloadedTests");
  if ( downloadedTests == null ) { downloadedTests = "" } ; 
  downloadedTests = downloadedTests+ "," + testid ; 
  localStorage.setItem( "downloadedTests" , downloadedTests ) ; 

  //console.log ( "not tests are " + JSON.stringify(this.tests) ); 
  /*
  

  if  (localStorage.getItem("downloadedTests")  == null )   {  
  downloadedTests =""; } 
  else { 
  downloadedTests = localStorage.getItem("downloadedTests")  + JSON.stringify(this.tests);   } 

  
  console.log ( " downloaded tests are " + downloadedTests ) ; 


  localStorage.setItem("downloadedTests" , this.tests) ; 
     */

  //this.navCtrl.setRoot('TestsListPage') ; 

    
}


    public async transformText( text   ) { 
      var  strMatch  = new String() ; 
      var imgURL ; 
      var gifoffset = 0 ; 
      var base64data  ; 

      if  ( text.match(/<img src=...*?.gif[ ]*/g))  { 
      
      console.log( " find match in q "  + text.match(/<img src=...*?.gif[ ]*/g) + "XXX"  ) ; 
      var matches =  text.match(/<img src=...*?.gif[ ]*/g).toString().split(',') ;
      //console.log( "matches are " + matches.length + matches[0]  ) ; 
      strMatch = matches[0] ; 
      gifoffset = strMatch.indexOf( ".gif") ; 
      imgURL  = strMatch.substring(9,gifoffset + 4 );
      console.log( "Image is " + imgURL) ;  
      console.log ( "waiting " ) ; 
      base64data  = await this.getData(imgURL) ; 
      text= text.replace (matches[0], base64data);
      console.log( " replaced img with " + text ) ; 
      return text; 
          }
          else { console.log( "no image  in questions no ") ;return text ;  }

    }
    



     
    showLoading() {
      this.loading = this.loadingCtrl.create({
        content: 'Please wait while this test is getting downloaded ...',
        dismissOnPageChange: true
      });
      this.loading.present();
    }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TestsListPage');
  }

}
