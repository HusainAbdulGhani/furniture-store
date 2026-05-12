export default function ProductCard({ product, onBuy }) {
    return (
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all border border-gray-100">
        <img src={product.image} alt={product.name} className="w-full h-52 object-cover" />
        <div className="p-5">
          <span className="text-[10px] bg-amber-100 text-amber-700 px-2 py-1 rounded-full font-bold uppercase tracking-wider">
            {product.category}
          </span>
          <h3 className="text-xl font-bold my-2 text-slate-800">{product.name}</h3>
          <p className="text-gray-500 text-sm mb-4 line-clamp-2 italic">{product.desc}</p>
          <div className="flex justify-between items-center mt-auto">
            <span className="text-lg font-extrabold text-slate-900">
              Rp {product.price.toLocaleString('id-ID')}
            </span>
            <button 
              onClick={() => onBuy(product)}
              className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg font-semibold transition-transform active:scale-95"
            >
              Beli
            </button>
          </div>
        </div>
      </div>
    );
  }