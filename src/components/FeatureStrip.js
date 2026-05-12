import React from 'react';

const items = [
  { icon: '📦', title: 'Ketersediaan Real-time', desc: 'Informasi stok produk yang akurat sesuai sistem untuk memastikan pengalaman belanja tanpa kendala.' },
  { icon: '🏷️', title: 'Penawaran Eksklusif', desc: 'Nikmati harga terbaik melalui diskon transparan yang langsung tertera pada katalog dan keranjang Anda.' },
  { icon: '🚚', title: 'Pengiriman Terjamin', desc: 'Dikemas dengan standar industri dan dikirim dengan asuransi untuk menjamin keamanan barang hingga tiba di lokasi.' },
];

export default function FeatureStrip() {
  return (
    <div className="grid border-b border-stone-200/80 md:grid-cols-3">
      {items.map((f) => (
        <article
          key={f.title}
          className="border-b border-stone-200/80 bg-brand-cream px-6 py-8 last:border-b-0 md:border-b-0 md:border-r md:border-stone-200/80 md:last:border-r-0"
        >
          <div className="text-2xl">{f.icon}</div>
          <h3 className="mt-3 font-bold text-brand-dark">{f.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-brand-muted">{f.desc}</p>
        </article>
      ))}
    </div>
  );
}
