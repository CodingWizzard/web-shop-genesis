
import React, { createContext, useContext, useReducer, useEffect } from "react";
import { toast } from "sonner";
import { Cart, CartItem, Product } from "../types";

// Action types
type CartAction =
  | { type: "ADD_ITEM"; payload: { product: Product; quantity: number } }
  | { type: "REMOVE_ITEM"; payload: { productId: string } }
  | { type: "UPDATE_QUANTITY"; payload: { productId: string; quantity: number } }
  | { type: "CLEAR_CART" };

// Initial state
const initialCart: Cart = {
  items: [],
  totalItems: 0,
  totalPrice: 0
};

// Helper function to calculate cart totals
const calculateCartTotals = (items: CartItem[]): { totalItems: number; totalPrice: number } => {
  return items.reduce(
    (totals, item) => {
      return {
        totalItems: totals.totalItems + item.quantity,
        totalPrice: totals.totalPrice + item.product.price * item.quantity
      };
    },
    { totalItems: 0, totalPrice: 0 }
  );
};

// Reducer function
const cartReducer = (state: Cart, action: CartAction): Cart => {
  switch (action.type) {
    case "ADD_ITEM": {
      const { product, quantity } = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.productId === product.id);

      let updatedItems: CartItem[];

      if (existingItemIndex >= 0) {
        // Item exists, update quantity
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + quantity
        };
      } else {
        // Add new item
        updatedItems = [
          ...state.items,
          { productId: product.id, quantity, product }
        ];
      }

      const totals = calculateCartTotals(updatedItems);
      return { ...state, items: updatedItems, ...totals };
    }

    case "REMOVE_ITEM": {
      const updatedItems = state.items.filter(
        item => item.productId !== action.payload.productId
      );
      const totals = calculateCartTotals(updatedItems);
      return { ...state, items: updatedItems, ...totals };
    }

    case "UPDATE_QUANTITY": {
      const { productId, quantity } = action.payload;
      if (quantity <= 0) {
        return cartReducer(state, { type: "REMOVE_ITEM", payload: { productId } });
      }

      const updatedItems = state.items.map(item =>
        item.productId === productId ? { ...item, quantity } : item
      );
      const totals = calculateCartTotals(updatedItems);
      return { ...state, items: updatedItems, ...totals };
    }

    case "CLEAR_CART":
      return initialCart;

    default:
      return state;
  }
};

// Create context
type CartContextType = {
  cart: Cart;
  addItem: (product: Product, quantity: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

// Local storage key
const CART_STORAGE_KEY = "shop_cart";

// Provider component
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize state from localStorage if available
  const [cart, dispatch] = useReducer(cartReducer, initialCart, () => {
    if (typeof window === "undefined") return initialCart;
    
    try {
      const storedCart = localStorage.getItem(CART_STORAGE_KEY);
      return storedCart ? JSON.parse(storedCart) : initialCart;
    } catch (error) {
      console.error("Failed to parse cart from localStorage:", error);
      return initialCart;
    }
  });

  // Save to localStorage when cart changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    }
  }, [cart]);

  // Actions
  const addItem = (product: Product, quantity: number) => {
    dispatch({ type: "ADD_ITEM", payload: { product, quantity } });
    toast.success(`${product.name} added to cart.`);
  };

  const removeItem = (productId: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: { productId } });
    toast.info("Item removed from cart.");
  };

  const updateQuantity = (productId: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { productId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
    toast.info("Cart cleared.");
  };

  const value = {
    cart,
    addItem,
    removeItem,
    updateQuantity,
    clearCart
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Custom hook
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
