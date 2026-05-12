import React from 'react';
import { discountPercent, formatIdr, isOnSale } from '../utils/productPrice';

const BADGE_TAILWIND = {
  bestseller: 'bg-amber-500 text-white',
  new: 'bg-emerald-600 text-white',
  sale: 'bg-red-500 text-white',
};

export default function ProductCard({ product, onBuy }) {
  const out = product.stock <= 0;
  const promo = isOnSale(product);
  const pct = discountPercent(product);

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-md shadow-stone-200/80 ring-1 ring-stone-200/80 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-52 overflow-hidden">
        {product.badge && BADGE_TAILWIND[product.badge] ? (
          <span
            className={`absolute left-3 top-3 z-10 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${BADGE_TAILWIND[product.badge]}`}
          >
            {product.badgeLabel}
          </span>
        ) : null}
        {promo ? (
          <span className="absolute right-3 top-3 z-10 rounded-md bg-brand-dark px-2 py-0.5 text-[11px] font-bold text-brand-gold">
            {pct != null ? `-${pct}%` : 'Promo'}
          </span>
        ) : null}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className={`h-full w-full object-cover transition duration-500 group-hover:scale-[1.04] ${out ? 'grayscale-[0.35]' : ''}`}
        />
        {out ? (
          <div className="absolute inset-0 flex items-center justify-center bg-black/45">
            <span className="rounded-lg bg-white/95 px-4 py-2 text-sm font-bold tracking-wide text-brand-dark">Stok habis</span>
          </div>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-gold">{product.category}</p>
        <h3 className="mt-1 font-display text-lg font-bold leading-snug text-brand-dark">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-muted">{product.desc}</p>

        <p className="mt-3 text-xs font-medium text-stone-500">
          Stok:{' '}
          <span className={out ? 'font-bold text-red-600' : 'font-bold text-brand-dark'}>
            {out ? '0 unit' : `${product.stock} unit`}
          </span>
        </p>

        <div className="mt-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            {promo ? (
              <div className="flex flex-col gap-0.5">
                <span className="text-sm text-stone-400 line-through">{formatIdr(product.originalPrice)}</span>
                <span className="text-lg font-extrabold text-brand-dark">{formatIdr(product.price)}</span>
              </div>
            ) : (
              <span className="text-lg font-extrabold text-brand-dark">{formatIdr(product.price)}</span>
            )}
          </div>

          <button
            type="button"
            disabled={out}
            onClick={() => !out && onBuy(product)}
            className={`rounded-lg px-4 py-2.5 text-sm font-bold transition active:scale-[0.98] ${
              out
                ? 'cursor-not-allowed bg-stone-200 text-stone-400'
                : 'bg-brand-dark text-white hover:bg-brand-gold hover:text-white'
            }`}
          >
            {out ? 'Tidak tersedia' : 'Beli'}
          </button>
        </div>
      </div>
    </article>
  );
}
