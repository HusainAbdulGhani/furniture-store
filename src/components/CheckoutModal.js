import React, { useEffect, useState } from 'react';
import { formatIdr, isOnSale } from '../utils/productPrice';

export default function CheckoutModal({ product, qty, setQty, onClose, onPaid }) {
  const [revealedTotal, setRevealedTotal] = useState(false);

  useEffect(() => {
    setRevealedTotal(false);
  }, [product]);

  useEffect(() => {
    if (!product || product.stock <= 0) return;
    setQty((q) => Math.min(Math.max(1, q), product.stock));
  }, [product, setQty]);

  if (!product) return null;

  const stock = product.stock;
  const lineTotal = product.price * qty;
  const promo = isOnSale(product);

  const bumpQty = (next) => {
    const capped = Math.min(Math.max(1, next), stock);
    setQty(capped);
  };

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-title"
    >
      <div className="max-h-[88vh] w-full max-w-md overflow-y-auto rounded-3xl bg-white p-8 shadow-2xl ring-1 ring-stone-200">
        <div className="mb-6 flex items-start justify-between gap-4">
          <h2 id="checkout-title" className="font-display text-xl font-bold text-brand-dark">
            Detail pesanan
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1 text-2xl leading-none text-stone-400 transition hover:bg-stone-100 hover:text-brand-dark"
            aria-label="Tutup"
          >
            ×
          </button>
        </div>

        <div className="mb-6 flex gap-4 border-b border-stone-100 pb-6">
          <img src={product.image} alt="" className="h-20 w-20 shrink-0 rounded-xl object-cover" />
          <div className="min-w-0 flex-1">
            <p className="font-bold text-brand-dark">{product.name}</p>
            <div className="mt-1 text-sm">
              {promo ? (
                <div className="flex flex-col gap-0.5">
                  <span className="text-stone-400 line-through">{formatIdr(product.originalPrice)} / unit</span>
                  <span className="font-semibold text-brand-dark">{formatIdr(product.price)} / unit</span>
                </div>
              ) : (
                <span className="font-semibold text-brand-gold">{formatIdr(product.price)} / unit</span>
              )}
            </div>
            <p className="mt-2 text-xs text-stone-500">Stok tersisa: {stock} unit</p>
          </div>
        </div>

        <div className="mb-6">
          <p className="mb-2 text-sm font-medium text-stone-600">Jumlah beli</p>
          <div className="inline-flex items-center rounded-xl border border-stone-200 bg-stone-50">
            <button
              type="button"
              className="rounded-l-xl px-4 py-2 text-lg font-bold text-brand-dark hover:bg-white disabled:opacity-40"
              onClick={() => bumpQty(qty - 1)}
              disabled={qty <= 1}
              aria-label="Kurangi jumlah"
            >
              −
            </button>
            <span className="min-w-[3rem] text-center font-bold">{qty}</span>
            <button
              type="button"
              className="rounded-r-xl px-4 py-2 text-lg font-bold text-brand-dark hover:bg-white disabled:opacity-40"
              onClick={() => bumpQty(qty + 1)}
              disabled={qty >= stock}
              aria-label="Tambah jumlah"
            >
              +
            </button>
          </div>
        </div>

        {revealedTotal ? (
          <div className="mb-6 flex justify-between rounded-2xl bg-brand-cream px-5 py-4">
            <span className="text-stone-600">Total pembayaran</span>
            <span className="text-xl font-black text-brand-dark">{formatIdr(lineTotal)}</span>
          </div>
        ) : null}

        <button
          type="button"
          className="w-full rounded-2xl bg-brand-gold py-4 text-base font-bold text-white shadow-lg transition hover:opacity-90"
          onClick={() => {
            if (!revealedTotal) {
              setRevealedTotal(true);
              return;
            }
            onPaid(lineTotal);
          }}
        >
          {revealedTotal ? 'Konfirmasi & tutup' : 'Proses Pembayaran'}
        </button>
      </div>
    </div>
  );
}
