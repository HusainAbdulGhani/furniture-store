import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[min(520px,85vh)] items-center overflow-hidden bg-brand-dark">
      <img
        className="absolute inset-0 h-full w-full object-cover opacity-40"
        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
        alt="Interior showroom furnitur modern"
      />
      <div className="relative z-[1] max-w-xl px-6 py-14 md:px-12 lg:py-16">
        <span className="inline-block rounded-full bg-brand-gold px-4 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-white">
          Katalog Digital 2026
        </span>
        <h1 className="mt-5 font-display text-4xl font-black leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
          Furnitur Berkualitas
          <br />
          <span className="text-brand-gold">Untuk Rumah Anda</span>
        </h1>
        <p className="mt-5 text-base leading-relaxed text-stone-300 md:text-lg">
        Wujudkan rumah impian dengan kurasi furnitur eksklusif. Mulai dari desain minimalis hingga klasik, setiap potong karya kami dibuat untuk bertahan lintas generasi.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link
            to="/products"
            className="inline-flex items-center justify-center rounded-xl bg-brand-gold px-8 py-3.5 text-center text-sm font-bold text-white shadow-lg transition hover:opacity-90"
          >
            Lihat Semua Produk
          </Link>
          <Link
            to="/category"
            className="inline-flex items-center justify-center rounded-xl border-2 border-white/40 px-8 py-3.5 text-center text-sm font-bold text-white transition hover:border-white"
          >
            Jelajah Kategori
          </Link>
        </div>
      </div>
    </section>
  );
}
