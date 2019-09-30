// Section 1 Importing the required imports

import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Product } from '../model/product.model';
import { AddProduct, DeleteProduct, ClearProducts } from '../action/product.action';

// Section 2 - defining the model for state

export class ProductStateModel {
  products: Product[];
}

// section 3 -declare the state for the store

@State<ProductStateModel>({
  name: 'products',
  defaults: {
    products: []
  }
})

export class ProductState {

  // Section 4 - declare selectors for retrieving data from the store

  @Selector()
  static getProducts(state: ProductStateModel) {
    return state.products;
  }

  // Section 5 -declare actions to mutate the state of the store

  @Action(AddProduct)
  add(context: StateContext<ProductStateModel>, { payload }: AddProduct) {
    const state = context.getState();
    context.patchState({
      products: [...state.products, payload]
    });
  }

  @Action(DeleteProduct)
  remove(
    { getState, patchState }: StateContext<ProductStateModel>,
    { payload: { productId } }: DeleteProduct) {
    patchState({
      products: getState().products.filter(a => a.id !== productId)

    });
  }

  @Action(ClearProducts)
  clear({ patchState }: StateContext<ProductStateModel>) {
    patchState({
      products: []
    });
  }
}
