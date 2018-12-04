import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabProductsPage } from './tab-products';

@NgModule({
  declarations: [
    TabProductsPage,
  ],
  imports: [
    IonicPageModule.forChild(TabProductsPage),
  ],
})
export class TabProductsPageModule {}
