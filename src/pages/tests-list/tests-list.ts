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


  constructor(public navCtrl: NavController, public navParams: NavParams , public testsService:  TestsService , public quizService : QuizService  , public getImage : GetBase64ImageService, private loadingCtrl: LoadingController) {
    console.log( "showing tests for courseid  " + navParams.get('courseid'));

   this.getBase64Image =getImage ; 


   testsService.getTestsForCourse(navParams.get('courseid')).subscribe( data => { 
   console.log( "got this data " + JSON.stringify( data )) ; 
   this.tests = testsService.tests; 

   }); 

   console.log( "got these tests for course" + JSON.stringify( this.tests)) ; 
  

  }
  public solveTest( testid ,testName ) { 
  console.log ( " going to test " + testid ) ; 

  this.navCtrl.setRoot('ShowQuizPage',{ 'testid' : testid , 'testName' : testName  } );
  }

  public downloadTest( testid) { 

    console.log( "downloading test " + testid ) ; 

    this.quizService.getQuestionsForQuiz(testid).subscribe( data => { 
      console.log( "got this data " + JSON.stringify( data )) ; 
      this.questions = this.quizService.questions; 
      ; 
      console.log( " fininding base64 ") ; 
      // this.showLoading() ; 

      this.transformQuestion(this.questions , this.getBase64Image , testid , this.navCtrl , this.loading);
      this.transformAnswers(this.questions , this.getBase64Image , testid , this.navCtrl , this.loading,"ans1");
      this.transformAnswers(this.questions , this.getBase64Image , testid , this.navCtrl , this.loading,"ans2");
      this.transformAnswers(this.questions , this.getBase64Image , testid , this.navCtrl , this.loading,"ans3");
      this.transformAnswers(this.questions , this.getBase64Image , testid , this.navCtrl , this.loading,"ans4");  

    
      
    });

  }

  public    transformQuestion(questions , getImage : GetBase64ImageService , testid , nav , loading  ) { 

  
    let matchStr = /<img src=....*?.gif>/g;
    var  strMatch  = new String() ; 
    
    /*
    while (match = matchStr.exec(question)) {
      console.log("Found", match[0], "at", match.index);
    }
    */
     
    
    let ImageMap : Map< string , string> = new Map<string, string>  () ; 
    
    let imageURLArr = [] ; 
    
    
    
    
    var serviceCounter = 0 ; 
    var matchCount = 0 ; 
    var gifoffset = 0 ; 
    for ( var i = 0 ; i < questions.length ; i++ ) { 
    
    //console.log( "finding match in " + questions[i].text) ; 
    var imgURL ; 
    //console.log( questions[i].text.replace(/<img src=...*?.gif>/g,    function( match, offset ){   
      console.log( questions[i].text.replace(/<img src=...*?.gif..*>/g,    function( match, offset ){ 
                                            
      strMatch = match ; 
    
    
        matchCount++ ; 
      console.log( "match is  " + match  + "url is " + offset) ;
      
      gifoffset = strMatch.indexOf( ".gif") ; 
     // console.log ( "got offset for gif " +  gifoffset   + ">" + strMatch  + "<" + match.length) ; 
      imgURL  = match.substring(9,gifoffset + 4 );
      //imgURL  = match.substring(9,match.length-1-offset );
     // console.log( "get for " + i + "-" +  imgURL ) ;
       ; 
    
      getImage.getBase64Image(imgURL ).subscribe( data => {
      serviceCounter ++ ; 
     // console.log( " sericce counter now is " + serviceCounter ) ; 
     // console.log( " set base64 image for "  + data + "to " + getImage.base64Image );
      ImageMap.set( data, getImage.base64Image) ; 
    
      //imageURLArr.push( imgURL + '-' + getImage.base64Image  ) ; 
      if ( serviceCounter == matchCount ) { 
      //  console.log( "ImageMap i s " + ImageMap.get(imgURL) ) ; 
    
        for ( var i = 0 ; i < questions.length ; i++ ) { 
        var replaceURL ; 
        questions[i].text = questions[i].text.replace(/<img src=...*?.gif..*>/g,    function( match, offset ){ 
    
          gifoffset = strMatch.indexOf( ".gif") ;  
          imgURL  = match.substring(9,gifoffset  + 4 );
          
          replaceURL = "<img src=data:image/jpg;base64," + ImageMap.get(imgURL) + " />" ; 
          //console.log( " replacing " + imgURL + "with " + replaceURL) ;
          return replaceURL ; 
    
        } ) ; 
      }
       // console.log( "replaced question Arr  is " + JSON.stringify(questions) )  ; 
        localStorage.setItem("quizid" + testid, JSON.stringify(questions) ); 
        alert( " Test download complete  ") ; 
        //loading.dismiss() ; 
        

        //nav.setRoot( 'TestsListPage') ; 

      

    
        }
    
       
      }) ; 
    
    
    }) );
    
    
      }
      //console.log ( " match Array is " + ShowQuizPage.matchList) ; 
      console.log( " imgURL arre is now " + imageURLArr.length + imageURLArr   ); 
    
    }
    public    transformAnswers(questions , getImage : GetBase64ImageService , testid , nav , loading , ans   ) { 

  
      let matchStr = /<img src=....*?.gif>/g;
      var  strMatch  = new String() ; 
      
      /*
      while (match = matchStr.exec(question)) {
        console.log("Found", match[0], "at", match.index);
      }
      */
       
      
      let ImageMap : Map< string , string> = new Map<string, string>  () ; 
      
      let imageURLArr = [] ; 
      
      
      var text : any ; 
      
      var serviceCounter = 0 ; 
      var matchCount = 0 ; 
      var gifoffset = 0 ; 
      for ( var i = 0 ; i < questions.length ; i++ ) { 
      

      if ( ans =="ans1") { 
        text = questions[i].ans1 
      }
      if ( ans =="ans2") { 
        text = questions[i].ans2 
      }
      if ( ans =="ans3") { 
        text = questions[i].ans3 
      }
      if ( ans =="ans4") { 
        text = questions[i].ans4 
      } 


      console.log( "finding match in " + text) ; 
      var imgURL ; 
      //console.log( questions[i].text.replace(/<img src=...*?.gif>/g,    function( match, offset ){   
        console.log( text.replace(/<img src=...*?.gif..*>/g,    function( match, offset ){ 
                                              
        strMatch = match ; 
      
      
          matchCount++ ; 
        console.log( "match is  " + match  + "url is " + offset) ;
        
        gifoffset = strMatch.indexOf( ".gif") ; 
        console.log ( "got offset for gif " +  gifoffset   + ">" + strMatch  + "<" + match.length) ; 
        imgURL  = match.substring(9,gifoffset + 4 );
        //imgURL  = match.substring(9,match.length-1-offset );
        console.log( "get for " + i + "-" +  imgURL ) ;
         ; 
      
        getImage.getBase64Image(imgURL ).subscribe( data => {
        serviceCounter ++ ; 
        console.log( " sericce counter now is " + serviceCounter ) ; 
        console.log( " set base64 image for "  + data + "to " + getImage.base64Image );
        ImageMap.set( data, getImage.base64Image) ; 
      
        //imageURLArr.push( imgURL + '-' + getImage.base64Image  ) ; 
        if ( serviceCounter == matchCount ) { 
          console.log( "ImageMap i s " + ImageMap.get(imgURL) ) ; 
      
          for ( var i = 0 ; i < questions.length ; i++ ) { 
          var replaceURL ; 
          text = text.replace(/<img src=...*?.gif..*>/g,    function( match, offset ){ 
      
            gifoffset = strMatch.indexOf( ".gif") ;  
            imgURL  = match.substring(9,gifoffset  + 4 );
            
            replaceURL = "<img src=data:image/jpg;base64," + ImageMap.get(imgURL) + " />" ; 
            //console.log( " replacing " + imgURL + "with " + replaceURL) ;
            if ( ans =="ans1") { 
              questions[i].ans1  = text ; 
           }
           if ( ans =="ans2") { 
               questions[i].ans2 = text ; 
           }
           if ( ans =="ans3") { 
               questions[i].ans3 = text ; 
           }
           if ( ans =="ans4") { 
               questions[i].ans4 = text ; 
           }

            return replaceURL ; 
      
          } ) ;
        
        
      }

          console.log( "replaced ans Arr  is " + JSON.stringify(questions) )  ; 
          localStorage.setItem("quizid" + testid, JSON.stringify(questions) ); 
          alert( " Test download complete  ") ; 
        //  loading.dismiss() ; 
          
  
          //nav.setRoot( 'TestsListPage') ; 
  
        
  
      
          }
      
         
        }) ; 
      
      
      }) );
      
      
        }
        //console.log ( " match Array is " + ShowQuizPage.matchList) ; 
        console.log( " imgURL arre is now " + imageURLArr.length + imageURLArr   ); 
      
      }

    showLoading() {
      this.loading = this.loadingCtrl.create({
        content: 'Please wait for this test is downloaded ...',
        dismissOnPageChange: true
      });
      this.loading.present();
    }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TestsListPage');
  }

}
