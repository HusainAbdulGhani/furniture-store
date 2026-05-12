import React from 'react';
import HeroSection from '../components/HeroSection';
import FeatureStrip from '../components/FeatureStrip';
import ProductCatalog from '../components/ProductCatalog';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeatureStrip />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-8">
        <header className="mb-10 text-center">
          <h2 className="font-display text-3xl font-black text-brand-dark md:text-4xl">Koleksi utama</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-brand-muted md:text-base">
          Jelajahi pilihan furnitur unggulan kami yang dirancang dengan perhatian pada detail, material berkualitas, dan estetika yang abadi untuk setiap ruangan.
          </p>
        </header>
        <ProductCatalog showCategoryFilters={false} />
      </section>
    </main>
  );
}
