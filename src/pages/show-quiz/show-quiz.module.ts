import { SanitizeHtmlPipe } from './../../components/sanitizehtml-pipe/sanitizehtml-pipe';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowQuizPage } from './show-quiz';


@NgModule({
  declarations: [
    ShowQuizPage,SanitizeHtmlPipe
  ],
  imports: [
    IonicPageModule.forChild(ShowQuizPage),
  ],
})
export class ShowQuizPageModule {}
