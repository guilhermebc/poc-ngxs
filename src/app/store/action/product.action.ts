import { Product } from '../model/product.model';

// Enum Actions
export enum ProductActions {
  PRODUCT_ADD = 'AddProduct',
  PRODUCT_DELETE = 'DeleteProduct',
  PRODUCT_CLEAR = 'ClearProduct',
}

// Actions
export class AddProduct {
  static readonly type = ProductActions.PRODUCT_ADD;
  constructor(public payload: Product) { }
}

export class DeleteProduct {
  static readonly type = ProductActions.PRODUCT_DELETE;
  constructor(public payload: { productId: number }) { }
}

export class ClearProducts {
  static type = ProductActions.PRODUCT_CLEAR;
  constructor() { }
}

// Type Actions
export type Actions = AddProduct | DeleteProduct | ClearProducts;
