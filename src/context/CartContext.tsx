import React, { createContext, useContext, useState, useCallback } from "react";
import type { MenuItem } from "@/data/menu";
import { coupons } from "@/data/menu";

export type CartItem = MenuItem & { quantity: number };

type CartContextType = {
  items: CartItem[];
  addItem: (item: MenuItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, qty: number) => void;
  clearCart: () => void;
  couponCode: string;
  setCouponCode: (code: string) => void;
  appliedDiscount: number;
  applyCoupon: () => boolean;
  subtotal: number;
  total: number;
  itemCount: number;
};

const CartContext = createContext<CartContextType | null>(null);

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [couponCode, setCouponCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState(0);

  const addItem = useCallback((item: MenuItem) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      return [...prev, { ...item, quantity: 1 }];
    });
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems(prev => prev.filter(i => i.id !== id));
  }, []);

  const updateQuantity = useCallback((id: string, qty: number) => {
    if (qty <= 0) { setItems(prev => prev.filter(i => i.id !== id)); return; }
    setItems(prev => prev.map(i => i.id === id ? { ...i, quantity: qty } : i));
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
    setAppliedDiscount(0);
    setCouponCode("");
  }, []);

  const applyCoupon = useCallback(() => {
    const found = coupons.find(c => c.code === couponCode.toUpperCase());
    if (found) { setAppliedDiscount(found.discount); return true; }
    setAppliedDiscount(0);
    return false;
  }, [couponCode]);

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const total = subtotal - (subtotal * appliedDiscount) / 100;
  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearCart, couponCode, setCouponCode, appliedDiscount, applyCoupon, subtotal, total, itemCount }}>
      {children}
    </CartContext.Provider>
  );
};
