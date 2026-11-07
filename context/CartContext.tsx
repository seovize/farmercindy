"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product, ProductFormat, PRODUCTS } from "@/lib/products";

export interface CartItem {
  id: string; // composite: `${productId}_${formatId}`
  productId: string;
  title: string;
  volume: string;
  formatId: string;
  formatName: string;
  price: number;
  quantity: number;
  coverImage: string;
  giftText?: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, formatId?: string, quantity?: number) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  subtotal: number;
  totalItems: number;
  shipping: number;
  freeShippingThreshold: number;
  amountNeededForFreeShipping: number;
  promoCode: string;
  discount: number;
  applyPromoCode: (code: string) => { success: boolean; message: string };
  finalTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const FREE_SHIPPING_THRESHOLD = 25.0;
const STANDARD_SHIPPING_FEE = 3.99;

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [hasLoaded, setHasLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("farmer_cindy_cart");
      if (stored) {
        setItems(JSON.parse(stored));
      }
    } catch (e) {
      console.warn("Failed to read cart from localStorage", e);
    }
    setHasLoaded(true);
  }, []);

  // Save to localStorage whenever items change
  useEffect(() => {
    if (hasLoaded) {
      try {
        localStorage.setItem("farmer_cindy_cart", JSON.stringify(items));
      } catch (e) {
        console.warn("Failed to persist cart to localStorage", e);
      }
    }
  }, [items, hasLoaded]);

  const addToCart = (product: Product, formatId = "paperback", quantity = 1) => {
    const selectedFormat = product.formats.find((f) => f.id === formatId) || product.formats[0];
    const itemId = `${product.id}_${selectedFormat.id}`;

    setItems((prev) => {
      const existing = prev.find((item) => item.id === itemId);
      if (existing) {
        return prev.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        return [
          ...prev,
          {
            id: itemId,
            productId: product.id,
            title: product.title,
            volume: product.volume,
            formatId: selectedFormat.id,
            formatName: selectedFormat.name,
            price: selectedFormat.price,
            quantity,
            coverImage: product.coverImage,
            giftText: product.giftText,
          },
        ];
      }
    });

    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const removeFromCart = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setItems([]);
    setPromoCode("");
    setDiscount(0);
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const shipping =
    subtotal === 0 || subtotal >= FREE_SHIPPING_THRESHOLD || promoCode === "FARMERFREE"
      ? 0
      : STANDARD_SHIPPING_FEE;

  const amountNeededForFreeShipping = Math.max(
    0,
    parseFloat((FREE_SHIPPING_THRESHOLD - subtotal).toFixed(2))
  );

  const applyPromoCode = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === "SEED10") {
      setPromoCode("SEED10");
      setDiscount(0.1); // 10% off
      return { success: true, message: "10% Seed Saver discount applied!" };
    } else if (clean === "FARMERFREE") {
      setPromoCode("FARMERFREE");
      setDiscount(0);
      return { success: true, message: "Free Express Shipping unlocked!" };
    } else if (clean === "SCHOOL20") {
      setPromoCode("SCHOOL20");
      setDiscount(0.2); // 20% off
      return { success: true, message: "20% Educator & Library discount applied!" };
    }
    return { success: false, message: "Invalid promo code. Try 'SEED10' or 'FARMERFREE'." };
  };

  const discountAmount = subtotal * discount;
  const finalTotal = Math.max(0, subtotal - discountAmount + shipping);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        isCartOpen,
        openCart,
        closeCart,
        subtotal,
        totalItems,
        shipping,
        freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
        amountNeededForFreeShipping,
        promoCode,
        discount: discountAmount,
        applyPromoCode,
        finalTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
