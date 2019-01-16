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


  constructor(public navCtrl: NavController, public navParams: NavParams , public testsService:  TestsService , public quizService : QuizService  , public getImage : GetBase64ImageService, private loadingCtrl: LoadingController) {
    console.log( "showing tests for courseid  " + navParams.get('courseid'));

   this.getBase64Image =getImage ; 


   testsService.getTestsForCourse(navParams.get('courseid')).subscribe( data => { 
   console.log( "got this data " + JSON.stringify( data )) ; 
   this.tests = testsService.tests; 

   }); 

   console.log( "got these tests for course" + JSON.stringify( this.tests)) ; 
  

  }

  
  public  logout()  {
   
  
    localStorage.removeItem("loggedUser") ; 
  
    this.navCtrl.setRoot('LoginPage');
  
    }


  public goBack() {
    console.log( "going back 1 level ") ; 
    this.navCtrl.setRoot('TabTestsPage'); 
    //this.navCtrl.pop(); 

  }
  public solveTest( testid ,testName ) { 
  console.log ( " going to test " + testid ) ; 

  this.navCtrl.setRoot('ShowQuizPage',{ 'testid' : testid , 'testName' : testName  } );
  }
 
  public showDownloadStatus ( testid ) { 
    if  ( localStorage.getItem("quiz" + testid+ "status") == undefined ) { 
            return "this test is not downloaded on this device "  ; 
    }
    else 
      return ( localStorage.getItem(  "quiz" + testid+ "status"  )) ; 
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



    

  public downloadTest( testid) { 

    console.log( "downloading test " + testid ) ; 

    this.quizService.getQuestionsForQuiz(testid).subscribe( data => { 
      console.log( "got this data " + JSON.stringify( data )) ; 
      this.questions = this.quizService.questions; 
      ; 
      //alert("starting the donwload ...please wait  ") ; 
      this.showLoading() ; 

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
       console.log( " looking in " + text ) ; 
       //if  ( text.match(/<img src=...*?.gif[ ]*...*\/>/g))  { 
        if  ( text.match(/<img src=...*?.gif[ ]*...*/g))  { 
      
        console.log( " find match in q "  + i+ text.match(/<img src=...*?.gif[ ]*/g) + "XXX"  ) ; 
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
            else { console.log( "no image in questions no "+ i ) ;  }
  
      

       text = questions[i].ans1.replace('\'','')  ; 

        if  ( text.match(/<img src=...*?.gif[ ]*...*\/>/g))  { 
        
          console.log( " find match in q ans1 "  + i+ text.match(/<img src=...*?.gif[ ]*/g) + "XXX"  ) ; 
          var matches =  text.match(/<img src=...*?.gif[ ]*...*\/>/g).toString().split(',') ;
          //console.log( "matches are " + matches.length + matches[0]  ) ; 
          strMatch = matches[0] ; 
          gifoffset = strMatch.indexOf( ".gif") ; 
          imgURL  = strMatch.substring(9,gifoffset + 4 );
          console.log( "Image is " + imgURL) ;  
          console.log ( "waiting " ) ; 
          base64data  = await this.getData(imgURL) ; 
          text= text.replace (matches[0], base64data);
          console.log( " replaced img with " + text ) ; 
          //return text;
          questions[i].ans1 = text ; 
  
              }
              else { console.log( "no image in questions no  for ans1 "+ i ) ; ;  }
    
        


         text = questions[i].ans2.replace('\'','')  ;   ; 
        //if  ( text.match(/<img src=...*?.gif[ ]*\/>/g))  { 
        if  ( text.match(/<img src=...*?.gif[ ]*...*\/>/g))  { 
        
          console.log( " find match in q "  + i+ text.match(/<img src=...*?.gif[ ]*/g) + "XXX"  ) ; 
          var matches =  text.match(/<img src=...*?.gif[ ]*...*\/>/g).toString().split(',') ;
          //console.log( "matches are " + matches.length + matches[0]  ) ; 
          strMatch = matches[0] ; 
          gifoffset = strMatch.indexOf( ".gif") ; 
          imgURL  = strMatch.substring(9,gifoffset + 4 );
          console.log( "Image is " + imgURL) ;  
          console.log ( "waiting " ) ; 
          base64data  = await this.getData(imgURL) ; 
          text= text.replace (matches[0], base64data);
          console.log( " replaced img with " + text ) ; 
          //return text;
          questions[i].ans2 = text ; 
  
              }
              else { console.log( "no image in questions no  for ans2 "+ i ) ; ;  }
    
        

         text = questions[i].ans3.replace('\'','')  ;   ; 

        if  ( text.match(/<img src=...*?.gif[ ]*...*\/>/g))  { 
        
          console.log( " find match in q "  + i+ text.match(/<img src=...*?.gif[ ]*/g) + "XXX"  ) ; 
          var matches =  text.match(/<img src=...*?.gif[ ]*...*\/>/g).toString().split(',') ;
          //console.log( "matches are " + matches.length + matches[0]  ) ; 
          strMatch = matches[0] ; 
          gifoffset = strMatch.indexOf( ".gif") ; 
          imgURL  = strMatch.substring(9,gifoffset + 4 );
          console.log( "Image is " + imgURL) ;  
          console.log ( "waiting " ) ; 
          base64data  = await this.getData(imgURL) ; 
          text= text.replace (matches[0], base64data);
          console.log( " replaced img with " + text ) ; 
          //return text;
          questions[i].ans3 = text ; 
  
              }
              else { //console.log( "no image in questions no  for ans1 "+ i ) ; ;  
            }
    
       text = questions[i].ans4.replace('\'','')  ;   ; 

        if  ( text.match(/<img src=...*?.gif[ ]*...*\/>/g))  { 
        
          console.log( " find match in q "  + i+ text.match(/<img src=...*?.gif[ ]*/g) + "XXX"  ) ; 
          var matches =  text.match(/<img src=...*?.gif[ ]*...*\/>/g).toString().split(',') ;
          //console.log( "matches are " + matches.length + matches[0]  ) ; 
          strMatch = matches[0] ; 
          gifoffset = strMatch.indexOf( ".gif") ; 
          imgURL  = strMatch.substring(9,gifoffset + 4 );
          console.log( "Image is " + imgURL) ;  
          console.log ( "waiting " ) ; 
          base64data  = await this.getData(imgURL) ; 
          text= text.replace (matches[0], base64data);
          console.log( " replaced img with " + text ) ; 
          //return text;
          questions[i].ans4 = text ; 
  
              }
              else { console.log( "no image in questions no  for ans1 "+ i ) ; ;  }
     }
    
  console.log( " imgURL arre is now " + JSON.stringify(questions)   ); 
  localStorage.setItem("quizid" + testid, JSON.stringify(questions) ); 
  this.loading.dismissAll();
  //alert("donwload complete ") ; 
  var d = new Date();
  var n = d.toDateString(); 
  this.downloadStatus  = "Test downloaded on device on " +  n ; 
  localStorage.setItem("quiz"+testid+"status" , this.downloadStatus) ; 


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
