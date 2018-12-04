import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowMessagesPage } from './show-messages';

@NgModule({
  declarations: [
    ShowMessagesPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowMessagesPage),
  ],
})
export class ShowMessagesPageModule {}
