import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const linkClass = ({ isActive }) =>
  `rounded-lg px-4 py-2 text-sm font-medium transition ${
    isActive ? 'bg-brand-dark text-white' : 'text-stone-600 hover:bg-stone-100 hover:text-brand-dark'
  }`;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-[500] flex h-16 items-center justify-between border-b border-stone-200/80 bg-brand-cream/95 px-4 backdrop-blur-md md:px-8">
        <Link to="/" className="font-display text-xl font-black text-brand-dark" onClick={() => setOpen(false)}>
          Kayu<span className="text-brand-gold">Nusantara</span>
        </Link>

        <nav
          id="mobile-nav"
          className={`absolute left-0 right-0 top-16 z-[500] flex-col gap-1 border-b border-stone-200 bg-brand-cream px-4 py-3 shadow-md md:static md:flex md:flex-row md:items-center md:gap-1 md:border-0 md:bg-transparent md:p-0 md:shadow-none ${
            open ? 'flex' : 'hidden md:flex'
          }`}
          aria-label="Utama"
        >
          <NavLink to="/" end className={linkClass} onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/category" className={linkClass} onClick={() => setOpen(false)}>
            Category
          </NavLink>
          <NavLink to="/products" className={linkClass} onClick={() => setOpen(false)}>
            Product
          </NavLink>
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <Link
            to="/products"
            className="hidden rounded-xl bg-brand-dark px-5 py-2 text-sm font-bold text-white transition hover:bg-brand-gold md:inline-flex"
            onClick={() => setOpen(false)}
          >
            Telusuri
          </Link>
          <button
            type="button"
            className="inline-flex rounded-lg border border-stone-300 px-3 py-2 text-lg md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </header>
      {open ? (
        <button
          type="button"
          className="fixed inset-0 top-16 z-[400] bg-black/35 md:hidden"
          aria-label="Tutup menu"
          onClick={() => setOpen(false)}
        />
      ) : null}
    </>
  );
}
