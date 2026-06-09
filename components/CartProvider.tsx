"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getCartTotals, type CheckoutCartItem } from "@/lib/cart";

type CartItem = CheckoutCartItem;

type AddCartItemInput = Omit<CartItem, "id">;

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  addItem: (item: AddCartItemInput) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
};

const CART_STORAGE_KEY = "happy-hoppers-cart";
const CartContext = createContext<CartContextValue | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = window.localStorage.getItem(CART_STORAGE_KEY);

    if (!storedCart) {
      return;
    }

    try {
      setItems(JSON.parse(storedCart) as CartItem[]);
    } catch {
      window.localStorage.removeItem(CART_STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const value = useMemo<CartContextValue>(() => {
    const addItem = (item: AddCartItemInput) => {
      setItems((currentItems) => {
        const existingItem = currentItems.find(
          (currentItem) =>
            currentItem.slug === item.slug && currentItem.format === item.format,
        );

        if (!existingItem) {
          return [
            ...currentItems,
            {
              ...item,
              id: `${item.slug}-${item.format}`,
            },
          ];
        }

        return currentItems.map((currentItem) =>
          currentItem.id === existingItem.id
            ? { ...currentItem, quantity: currentItem.quantity + item.quantity }
            : currentItem,
        );
      });
    };

    const removeItem = (id: string) => {
      setItems((currentItems) =>
        currentItems.filter((currentItem) => currentItem.id !== id),
      );
    };

    const updateQuantity = (id: string, quantity: number) => {
      setItems((currentItems) =>
        currentItems.map((currentItem) =>
          currentItem.id === id
            ? { ...currentItem, quantity: Math.max(1, quantity) }
            : currentItem,
        ),
      );
    };

    const clearCart = () => {
      setItems([]);
    };

    const { subtotal } = getCartTotals(items);

    return {
      items,
      itemCount: items.reduce((total, item) => total + item.quantity, 0),
      subtotal,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
};

export type { CartItem };
