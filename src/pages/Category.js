import React from 'react';
import { Link } from 'react-router-dom';
import { getCategoriesWithMeta } from '../data/products';
import { useProductStore } from '../context/ProductContext';

const captions = {
  'Living Room': 'Sofa, meja kopi & aksen ruang bersantai keluarga.',
  Dining: 'Set makan ergonomis untuk momen berkumpul.',
  Bedroom: 'Lemari, lampu tidur & elemen penyimpanan hemat ruang.',
  Office: 'Kursi kerja, rak & furnishing produktivitas rumah.',
  Outdoor: 'Furnitur ketahanan cuaca dengan estetika natural.',
};

export default function Category() {
  const { products } = useProductStore();
  const meta = getCategoriesWithMeta(products);

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-8">
      <header className="mb-10">
        <h1 className="font-display text-3xl font-black text-brand-dark md:text-4xl">Kategori</h1>
        <p className="mt-3 max-w-2xl text-brand-muted">
        Temukan furnitur yang tepat untuk setiap sudut ruangan Anda. Telusuri koleksi kami berdasarkan kategori untuk memudahkan Anda menata hunian impian.
        </p>
      </header>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {meta.map((cat) => (
          <Link
            key={cat.name}
            to={`/products?cat=${encodeURIComponent(cat.name)}`}
            className="group overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-stone-200/80 transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative h-48 overflow-hidden">
              <img className="h-full w-full object-cover transition duration-500 group-hover:scale-105" src={cat.image} alt="" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 text-2xl text-white transition group-hover:translate-x-1" aria-hidden="true">
                →
              </span>
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between gap-2">
                <h2 className="font-display text-lg font-bold text-brand-dark">{cat.name}</h2>
                <span className="shrink-0 rounded-full bg-brand-gold/15 px-3 py-0.5 text-xs font-bold text-brand-gold">
                  {cat.count} item
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                {captions[cat.name] || 'Kurasi furnitur pilihan untuk tema ini.'}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
