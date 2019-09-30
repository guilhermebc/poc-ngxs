import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

import { AddProduct, ClearProducts } from '../../store/action/product.action';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit() {
  }

  saveProduct(id, name, description) {

    // Adding Data to store
    this.store.dispatch(new AddProduct(
      {
        id,
        name,
        description
      }
    ));
  }

  clearProducts() {
    this.store.dispatch(new ClearProducts());
  }

}
