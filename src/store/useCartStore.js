import { create } from "zustand";

const useCartStore = create((set) => ({
  carts: [
    {
      id: 1,
      productId: 2,
      quantity: 3,
      price: 29.99,
    },
    {
      id: 2,
      productId: 6,
      quantity: 1,
      price: 49.99,
    },
  ],
  //increase quantity of cart item
  increaseQuantity: (id) =>
    set((state) => ({
      carts: state.carts.map((el) =>
        el.id === id ? { ...el, quantity: el.quantity + 1 } : el
      ),
    })),
  //decrease quantity of cart item
  decreaseQuantity: (id) =>
    set((state) => ({
      carts: state.carts.map((el) =>
        el.id === id ? { ...el, quantity: el.quantity - 1 } : el
      ),
    })),

  //remove cart item
  removeCartItem: (id) =>
    set((state) => ({
      carts: state.carts.filter((el) => el.id !== id),
    })),
  //add to cart
  addToCart: (newCart) =>
    set((state) => ({
      carts: [...state.carts, newCart],
    })),
}));

export default useCartStore;
