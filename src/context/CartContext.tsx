import React, { createContext, useContext, useEffect, useState } from 'react';
import type { MenuEntry } from '@/siteConfig';

export interface CartItem {
  id: string;
  name: string;
  price: number;        // numeric value (e.g., 90)
  priceDisplay: string; // original string (e.g., "R90")
  quantity: number;
  image?: string;
}

interface CartContextType {
  items: CartItem[];
  selectedLocationId: string | null;
  customerName: string;
  note: string;
  addToCart: (item: MenuEntry, quantity?: number) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  setSelectedLocationId: (id: string | null) => void;
  setCustomerName: (name: string) => void;
  setNote: (note: string) => void;
  getTotalPrice: () => number;
  getItemCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

function parsePrice(priceStr: string): number {
  const match = priceStr.match(/R\s*([\d,]+(?:\.\d+)?)/);
  if (!match) return 0;
  return parseFloat(match[1].replace(/,/g, ''));
}

// Helper to safely read localStorage (client only)
function getLocalStorageItem(key: string, defaultValue: any) {
  if (typeof window === 'undefined') return defaultValue;
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch {
    return defaultValue;
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  // Start with empty/default values (SSR safe)
  const [items, setItems] = useState<CartItem[]>([]);
  const [selectedLocationId, setSelectedLocationId] = useState<string | null>(null);
  const [customerName, setCustomerName] = useState('');
  const [note, setNote] = useState('');
  const [isHydrated, setIsHydrated] = useState(false);

  // Hydrate from localStorage after mount (client only)
  useEffect(() => {
    const savedItems = getLocalStorageItem('cart', []);
    const savedLocation = getLocalStorageItem('cart_location', null);
    const savedName = getLocalStorageItem('cart_customer_name', '');
    const savedNote = getLocalStorageItem('cart_note', '');
    setItems(savedItems);
    setSelectedLocationId(savedLocation);
    setCustomerName(savedName);
    setNote(savedNote);
    setIsHydrated(true);
  }, []);

  // Persist to localStorage whenever state changes (client only)
  useEffect(() => {
    if (!isHydrated) return;
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items, isHydrated]);
  useEffect(() => {
    if (!isHydrated) return;
    if (selectedLocationId) localStorage.setItem('cart_location', selectedLocationId);
    else localStorage.removeItem('cart_location');
  }, [selectedLocationId, isHydrated]);
  useEffect(() => {
    if (!isHydrated) return;
    localStorage.setItem('cart_customer_name', customerName);
  }, [customerName, isHydrated]);
  useEffect(() => {
    if (!isHydrated) return;
    localStorage.setItem('cart_note', note);
  }, [note, isHydrated]);

  const addToCart = (menuItem: MenuEntry, quantity = 1) => {
    const price = parsePrice(menuItem.price);
    if (price === 0) return;
    setItems(prev => {
      const existing = prev.find(i => i.id === menuItem.name);
      if (existing) {
        return prev.map(i => i.id === menuItem.name ? { ...i, quantity: i.quantity + quantity } : i);
      }
      return [...prev, {
        id: menuItem.name,
        name: menuItem.name,
        price,
        priceDisplay: menuItem.price,
        quantity,
        image: menuItem.image,
      }];
    });
  };

  const removeFromCart = (itemId: string) => setItems(prev => prev.filter(i => i.id !== itemId));
  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) { removeFromCart(itemId); return; }
    setItems(prev => prev.map(i => i.id === itemId ? { ...i, quantity } : i));
  };
  const clearCart = () => {
    setItems([]);
    setSelectedLocationId(null);
    setCustomerName('');
    setNote('');
  };
  const getTotalPrice = () => items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const getItemCount = () => items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider value={{
      items,
      selectedLocationId,
      customerName,
      note,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      setSelectedLocationId,
      setCustomerName,
      setNote,
      getTotalPrice,
      getItemCount,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}