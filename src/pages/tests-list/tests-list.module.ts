import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestsListPage } from './tests-list';

@NgModule({
  declarations: [
    TestsListPage,
  ],
  imports: [
    IonicPageModule.forChild(TestsListPage),
  ],
})
export class TestsListPageModule {}
