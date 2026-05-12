import React, { useEffect, useMemo, useState } from 'react';
import ProductCard from './ProductCard';
import CheckoutModal from './CheckoutModal';
import { useProductStore } from '../context/ProductContext';
import { formatIdr } from '../utils/productPrice';

const ALL = '__all__';

export default function ProductCatalog({ showCategoryFilters = false, initialCategory = ALL }) {
  const { products, decreaseStock } = useProductStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [qty, setQty] = useState(1);

  const categories = useMemo(() => {
    const set = new Set(products.map((p) => p.category));
    return [ALL, ...Array.from(set).sort((a, b) => a.localeCompare(b))];
  }, [products]);

  useEffect(() => {
    setActiveCategory(initialCategory);
  }, [initialCategory]);

  const filteredProducts = products.filter((item) => {
    const byName = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const byCat = activeCategory === ALL || item.category === activeCategory;
    return byName && byCat;
  });

  const resolvedSelected = selectedProduct
    ? products.find((p) => p.id === selectedProduct.id) || selectedProduct
    : null;

  return (
    <>
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:flex-wrap md:items-center md:justify-between">
        <label className="relative block min-h-[46px] min-w-[200px] flex-1">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" aria-hidden="true">
            ⌕
          </span>
          <input
            type="search"
            placeholder="Filter berdasarkan nama produk..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Cari produk"
            className="w-full rounded-xl border border-stone-300 bg-white py-3 pl-11 pr-4 text-sm outline-none ring-brand-gold/0 transition focus:border-brand-gold focus:ring-2 focus:ring-brand-gold"
          />
        </label>

        {showCategoryFilters ? (
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter kategori">
            {categories
              .filter((c) => c !== ALL)
              .map((c) => (
                <button
                  key={c}
                  type="button"
                  className={`rounded-lg border px-4 py-2 text-sm font-medium transition ${
                    activeCategory === c
                      ? 'border-brand-dark bg-brand-dark text-white'
                      : 'border-stone-300 bg-white text-stone-600 hover:border-brand-gold'
                  }`}
                  onClick={() => setActiveCategory(activeCategory === c ? ALL : c)}
                >
                  {c}
                </button>
              ))}
          </div>
        ) : null}
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onBuy={(p) => {
                setSelectedProduct(p);
                setQty(1);
              }}
            />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center text-stone-400">
          <div className="mb-4 text-5xl">🪑</div>
          <p className="text-lg font-semibold text-stone-600">Tidak ada produk yang cocok</p>
          <p className="mt-2 text-sm">
            {searchTerm
              ? `Coba kata kunci lain untuk “${searchTerm}”.`
              : 'Sesuaikan filter kategori atau kosongkan pencarian.'}
          </p>
        </div>
      )}

      {resolvedSelected && resolvedSelected.stock > 0 ? (
        <CheckoutModal
          product={resolvedSelected}
          qty={qty}
          setQty={setQty}
          onClose={() => setSelectedProduct(null)}
          onPaid={(total) => {
            decreaseStock(resolvedSelected.id, qty);
            window.alert(`Pembayaran berhasil diproses!\n\n${resolvedSelected.name}\nJumlah: ${qty}\nTotal: ${formatIdr(total)}`);
            setSelectedProduct(null);
          }}
        />
      ) : null}
    </>
  );
}
