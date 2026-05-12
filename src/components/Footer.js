import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="mt-16 bg-brand-dark text-stone-400">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-8 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="font-display text-xl font-black text-white">
            Kayu<span className="text-brand-gold">Nusantara</span>
          </div>
          <p className="mt-3 max-w-sm text-sm leading-relaxed">
          Menghadirkan furnitur kayu pilihan dengan desain eksklusif dan kualitas pengerjaan terbaik untuk menciptakan kenyamanan hunian yang autentik.
          </p>
        </div>
        <nav aria-label="Footer jelajah">
          <h4 className="mb-4 text-sm font-bold text-white">Jelajah</h4>
          <Link to="/" className="block text-sm transition hover:text-brand-gold">
            Home
          </Link>
          <Link to="/category" className="mt-2 block text-sm transition hover:text-brand-gold">
            Category
          </Link>
          <Link to="/products" className="mt-2 block text-sm transition hover:text-brand-gold">
            Product
          </Link>
        </nav>
        <div>
          <h4 className="mb-4 text-sm font-bold text-white">Kontak</h4>
          <p className="text-sm">Bandung, Jawa Barat</p>
          <p className="mt-2 text-sm">(022) 1234-5678</p>
          <p className="mt-2 text-sm">hello@kayunusantara.id</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-stone-500">
        © {new Date().getFullYear()} Kayu Nusantara
      </div>
    </footer>
  );
}
