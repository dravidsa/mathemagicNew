import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowCoursesPage } from './show-courses';

@NgModule({
  declarations: [
    ShowCoursesPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowCoursesPage),
  ],
})
export class ShowCoursesPageModule {}
