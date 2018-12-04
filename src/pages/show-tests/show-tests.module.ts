import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowTestsPage } from './show-tests';

@NgModule({
  declarations: [
    ShowTestsPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowTestsPage),
  ],
})
export class ShowTestsPageModule {}
