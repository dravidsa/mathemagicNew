import { Injectable } from '@angular/core';

import { Item } from '../../models/item';
import { Api } from '../api/api';

@Injectable()
export class Items {

  constructor(public api: Api) { }

  query(params?: any) {
    console.log( "in items for params " + params );
   return this.api.get('https://ipm-mathemagic.com/api/ipm_get_products/', params);
  }

  add(item: Item) {
  }

  delete(item: Item) {
  }

}
