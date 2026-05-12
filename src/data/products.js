/**
 * price = harga jual setelah diskon (jika ada promo)
 * originalPrice = opsional, harga coret sebelum diskon
 * stock = unit tersedia (0 = tidak bisa Beli)
 */
export const furnitureData = [
  {
    id: 1,
    name: 'Sofa Chesterfield',
    price: 5_500_000,
    category: 'Living Room',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop',
    desc: 'Sofa kulit klasik dengan kedalaman dudukan ergonomic dan quilting tangan.',
    stock: 4,
    badge: 'bestseller',
    badgeLabel: 'Terlaris',
  },
  {
    id: 2,
    name: 'Meja Makan Oak',
    price: 3_200_000,
    originalPrice: 3_800_000,
    category: 'Dining',
    image: 'https://i.pinimg.com/1200x/b3/14/67/b3146757a72ffd79629f0f33e37b6a58.jpg',
    desc: 'Kayu oak solid bersertifikasi, muat enam kursi, finishing matte tahan percikan.',
    stock: 6,
    badge: 'sale',
    badgeLabel: 'Promo',
  },
  {
    id: 3,
    name: 'Lampu Tidur Modern',
    price: 450_000,
    originalPrice: 590_000,
    category: 'Bedroom',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1200&auto=format&fit=crop',
    desc: 'Dimmable LED 2700K, kap linen tekstur lembut untuk kamar tidur tenang.',
    stock: 0,
    badge: 'new',
    badgeLabel: 'Baru',
  },
  {
    id: 4,
    name: 'Rak Buku Industri',
    price: 1_800_000,
    category: 'Office',
    image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=1200&auto=format&fit=crop',
    desc: 'Rangka besi hitam powder-coat + ambalan kayu pinus—modular & stabil.',
    stock: 14,
  },
  {
    id: 5,
    name: 'Kursi Kerja Ergonomis',
    price: 2_100_000,
    originalPrice: 2_450_000,
    category: 'Office',
    image: 'https://images.unsplash.com/photo-1505797149-43b0069ec26b?q=80&w=1200&auto=format&fit=crop',
    desc: 'Sandaran lumbar mesh, tilt lock, dan gas lift kelas kantor.',
    stock: 7,
    badge: 'bestseller',
    badgeLabel: 'Terlaris',
  },
  {
    id: 6,
    name: 'Lemari Pakaian Slide',
    price: 4_200_000,
    category: 'Bedroom',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1200&auto=format&fit=crop',
    desc: 'Pintu geser silent rail, interior kompartemen sepatu & gantungan panjang.',
    stock: 3,
  },
  {
    id: 7,
    name: 'Meja Kopi Minimalis',
    price: 850_000,
    originalPrice: 1_100_000,
    category: 'Living Room',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1200&auto=format&fit=crop',
    desc: 'Top marmer komposit, kaki logam ramping—ringkas untuk apartemen.',
    stock: 22,
    badge: 'sale',
    badgeLabel: 'Diskon',
  },
  {
    id: 8,
    name: 'Kursi Teras Rotan',
    price: 1_250_000,
    category: 'Outdoor',
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1200&auto=format&fit=crop',
    desc: 'Rotan sintetis UV-safe dan bantalan dry-fast outdoor grade.',
    stock: 5,
  },
];

export function getCategoriesWithMeta(data) {
  const map = new Map();
  data.forEach((p) => {
    const cur = map.get(p.category) || { count: 0, sample: p.image };
    map.set(p.category, { count: cur.count + 1, sample: cur.sample });
  });
  return [...map.entries()].map(([name, v]) => ({
    name,
    count: v.count,
    image: v.sample,
  }));
}
