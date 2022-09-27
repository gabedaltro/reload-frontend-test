import { Product } from "types/product";
import { CartActions } from "./types";

export function addToCart(product: Product): CartActions {
  return {
    type: "@cart/ADD_TO_CART",
    product,
  };
}

export function updateCartProducts(products: Product[]): CartActions {
  return {
    type: "@cart/UPDATE_CART_PRODUCTS",
    products,
  };
}

export function removeCartProduct(productId: number): CartActions {
  return {
    type: "@cart/REMOVE_CART_PRODUCT",
    productId,
  };
}

export function recoveryCartProducts(products: Product[]): CartActions {
  return {
    type: "@cart/RECOVERY_CART_PRODUCTS",
    products,
  };
}

export function clearCart(): CartActions {
  return {
    type: "@cart/CLEAR_CART",
  };
}
