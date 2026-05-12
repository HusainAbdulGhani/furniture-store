import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCatalog from '../components/ProductCatalog';
import { useProductStore } from '../context/ProductContext';

const ALL = '__all__';

export default function Products() {
  const { products } = useProductStore();
  const [params] = useSearchParams();
  const catParam = params.get('cat');

  const initialCategory = useMemo(() => {
    if (!catParam) return ALL;
    const match = products.find((p) => p.category === catParam);
    return match ? catParam : ALL;
  }, [catParam, products]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-8">
      <header className="mb-10">
        <h1 className="font-display text-3xl font-black text-brand-dark md:text-4xl">Product</h1>
        <p className="mt-3 max-w-2xl text-brand-muted">
        Temukan produk impian Anda dengan mudah. Gunakan fitur pencarian dan kategori untuk melihat koleksi terbaik kami, lengkap dengan penawaran harga spesial dan informasi stok terkini.
        </p>
      </header>
      <ProductCatalog initialCategory={initialCategory} showCategoryFilters />
    </main>
  );
}
