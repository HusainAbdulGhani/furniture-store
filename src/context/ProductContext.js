import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { furnitureData as seedProducts } from '../data/products';

const ProductContext = createContext(null);

export function ProductProvider({ children }) {
  const [products, setProducts] = useState(seedProducts);

  const decreaseStock = useCallback((productId, qty) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === productId ? { ...p, stock: Math.max(0, p.stock - qty) } : p))
    );
  }, []);

  const value = useMemo(() => ({ products, decreaseStock }), [products, decreaseStock]);

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
}

export function useProductStore() {
  const ctx = useContext(ProductContext);
  if (!ctx) {
    throw new Error('useProductStore must be used within ProductProvider');
  }
  return ctx;
}
