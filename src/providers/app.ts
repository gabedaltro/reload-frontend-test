import { createContext, useContext, Dispatch } from "react";
import { CartActions } from "store/modules/cart/types";
import { Cart } from "types/cart";

export type AppContextValue = {
  cart: Cart;
  isMobile: boolean;
  windowWidth: number;
  windowHeight: number;
  dispatch: Dispatch<CartActions>;
};

const AppContext = createContext<AppContextValue>({} as AppContextValue);
export const AppProvider = AppContext.Provider;

export function useApp(): AppContextValue {
  const context = useContext(AppContext);
  return context;
}
