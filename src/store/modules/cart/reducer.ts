import { Cart } from "types/cart";
import { CartActions } from "./types";
import { Product } from "types/product";
import { Dispatch, useReducer } from "react";

const INITIAL_STATE: Cart = {
  products: [],
};

export default function cartReducer(
  state = INITIAL_STATE,
  action: CartActions
): Cart {
  switch (action.type) {
    case "@cart/ADD_TO_CART": {
      const newProduct: Product = action.product;

      const exists = state.products.find(
        (product) => product.id === action.product.id
      );

      if (exists) {
        const newProducts = state.products.map((product) => {
          if (product.id === exists.id) {
            product = exists;
          }
          return product;
        });

        return {
          ...state,
          products: newProducts,
        };
      }

      return {
        ...state,
        products: [...state.products, newProduct],
      };
    }

    case "@cart/UPDATE_CART_PRODUCTS": {
      const products = state.products.map((product) => {
        const found = action.products.find((p) => p.id === product.id);

        if (found) {
          product = found;
        }

        return product;
      });

      return {
        ...state,
        products,
      };
    }

    case "@cart/RECOVERY_CART_PRODUCTS": {
      return {
        ...state,
        products: action.products,
      };
    }

    case "@cart/REMOVE_CART_PRODUCT": {
      const products = state.products.filter(
        (product) => product.id !== action.productId
      );

      return {
        ...state,
        products,
      };
    }

    case "@cart/CLEAR_CART": {
      return INITIAL_STATE;
    }

    default: {
      return state;
    }
  }
}

type UseCartReducerType = [Cart, Dispatch<CartActions>];

export function useCartReducer(): UseCartReducerType {
  const [cart, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  return [cart, dispatch];
}
