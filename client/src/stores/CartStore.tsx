import { create } from "zustand";

import { createJSONStorage, persist } from "zustand/middleware";
import { CartStoreActionsType, CartStoreStateType } from "../../type";

const useCartStore = create<CartStoreActionsType & CartStoreStateType>()(
  persist(
    (set) => ({
      cart: [],
      hasHydrated: false,
      addToCart: (product) =>
        set((state) => {
          const existingIndex = state.cart.findIndex(
            (p) =>
              p.id === product.id &&
              p.selectedSize === product.selectedSize &&
              p.selectedColor === product.selectedColor
          );
          if (existingIndex !== -1) {
            const updateCart = [...state.cart];
            updateCart[existingIndex].quantity += product.quantity || 1;
            return {
              cart: updateCart,
            };
          }
          return {
            cart: [
              ...state.cart,
              {
                ...product,
                quantity: product.quantity || 1,
                selectedColor: product.selectedColor,
                selectedSize: product.selectedSize,
              },
            ],
          };
        }),
      removeFromCart: (product) =>
        set((state) => ({
          cart: state.cart.filter(
            (p) =>
              !(
                p.id === product.id &&
                p.selectedSize === product.selectedSize &&
                p.selectedColor === product.selectedColor
              )
          ),
        })),
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.hasHydrated = true;
        }
      },
    }
  )
);

export default useCartStore;
