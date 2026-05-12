import React, { useState } from 'react';
import { furnitureData } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [qty, setQty] = useState(1);

  const filteredProducts = furnitureData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      {/* Banner Utama */}
      <section className="bg-gradient-to-r from-slate-700 to-slate-800 text-white py-20 px-4 text-center">
        <h2 className="text-5xl font-extrabold mb-4 leading-tight">Elevate Your Living Space</h2>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light">
          Katalog digital furniture eksklusif dengan harga terbaik.
        </p>
      </section>

      <div className="container mx-auto px-4 -mt-8">
        {/* Fitur Pencarian */}
        <div className="mb-12 max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Cari furniture berdasarkan nama..."
            className="w-full p-5 rounded-2xl border-none shadow-2xl focus:ring-4 focus:ring-amber-400 outline-none text-slate-700 text-lg"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Rendering List Produk */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onBuy={(p) => { setSelectedProduct(p); setQty(1); }} 
              />
            ))
          ) : (
            <div className="col-span-full text-center py-20 italic text-gray-400 text-xl">
              Maaf, furniture "{searchTerm}" sedang tidak tersedia.
            </div>
          )}
        </div>
      </div>

      {/* Modal Pembayaran (Conditional Rendering) */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl border border-amber-100">
            <h2 className="text-2xl font-black text-slate-800 mb-6 flex justify-between">
              Konfirmasi Pesanan
              <button onClick={() => setSelectedProduct(null)} className="text-gray-300 hover:text-red-500">&times;</button>
            </h2>
            
            <div className="space-y-4 bg-slate-50 p-4 rounded-2xl mb-6">
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Nama Produk:</span>
                <span className="font-bold text-slate-800">{selectedProduct.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Harga:</span>
                <span className="font-bold">Rp {selectedProduct.price.toLocaleString('id-ID')}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500 font-medium">Jumlah Beli:</span>
                <div className="flex items-center border rounded-lg bg-white">
                  <button onClick={() => qty > 1 && setQty(qty-1)} className="px-3 py-1 hover:bg-gray-100 font-bold">-</button>
                  <span className="px-4 font-bold border-x">{qty}</span>
                  <button onClick={() => setQty(qty+1)} className="px-3 py-1 hover:bg-gray-100 font-bold">+</button>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between text-2xl font-black mb-8 pt-4 border-t border-dashed">
              <span>Total:</span>
              <span className="text-amber-600">Rp {(selectedProduct.price * qty).toLocaleString('id-ID')}</span>
            </div>

            <button 
              onClick={() => {
                alert(`PEMBAYARAN BERHASIL!\nProduk: ${selectedProduct.name}\nTotal: Rp ${(selectedProduct.price * qty).toLocaleString('id-ID')}`);
                setSelectedProduct(null);
              }}
              className="w-full bg-slate-800 text-white py-4 rounded-2xl font-bold text-lg hover:bg-slate-900 shadow-lg transition-all"
            >
              Proses Pembayaran
            </button>
          </div>
        </div>
      )}
    </div>
  );
}