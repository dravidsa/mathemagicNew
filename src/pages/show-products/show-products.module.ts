import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowProductsPage } from './show-products';

@NgModule({
  declarations: [
    ShowProductsPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowProductsPage),
  ],
})
export class ShowProductsPageModule {}
