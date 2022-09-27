import { Product } from "types/product";

const ADD_TO_CART = "@cart/ADD_TO_CART";
const UPDATE_CART_PRODUCTS = "@cart/UPDATE_CART_PRODUCTS";
const REMOVE_CART_PRODUCT = "@cart/REMOVE_CART_PRODUCT";
const RECOVERY_CART_PRODUCTS = "@cart/RECOVERY_CART_PRODUCTS";
const CLEAR_CART = "@cart/CLEAR_CART";

interface AddToCartAction {
  type: typeof ADD_TO_CART;
  product: Product;
}

interface UpdateCartProductsAction {
  type: typeof UPDATE_CART_PRODUCTS;
  products: Product[];
}

interface RemoveCartProductAction {
  type: typeof REMOVE_CART_PRODUCT;
  productId: number;
}

interface RecoveryCartProducts {
  type: typeof RECOVERY_CART_PRODUCTS;
  products: Product[];
}

interface ClearCartAction {
  type: typeof CLEAR_CART;
}

export type CartActions =
  | AddToCartAction
  | RemoveCartProductAction
  | RecoveryCartProducts
  | ClearCartAction
  | UpdateCartProductsAction;
