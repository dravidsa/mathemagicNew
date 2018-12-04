import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabTestsPage } from './tab-tests';

@NgModule({
  declarations: [
    TabTestsPage,
  ],
  imports: [
    IonicPageModule.forChild(TabTestsPage),
  ],
})
export class TabTestsPageModule {}
