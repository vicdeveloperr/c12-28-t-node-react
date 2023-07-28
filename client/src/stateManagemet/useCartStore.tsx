import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from "../types/ProductType";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartStore {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
}

const isProductInCart = (cartItems: CartItem[], productId?: number) => {
  return cartItems.some(item => item.product.idProduct === productId);
};

export const useCartStore = create(persist<CartStore>(set => ({
  cartItems: [],
  addToCart: (product) => {
      console.log("estoy agregando el producto al carrito");
    set(state => {
      if (isProductInCart(state.cartItems, product.idProduct)) {
        return {
          cartItems: state.cartItems.map(item =>
            item.product.idProduct === product.idProduct
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
        
      } else {
        return {
          cartItems: [...state.cartItems, { product, quantity: 1 }]
        };
      }
    });
  },
  
  removeFromCart: (productId) => {
    set(state => ({
      cartItems: state.cartItems.filter(item => item.product.idProduct !== productId)
    }));
  }
}), {
  name: "cart-storage",
}));

// fetch(`${SERVER_URL}/products`)
//   .then(res => res.json())
//   .then(data => { useCartStore.getState().setProducts(data) })