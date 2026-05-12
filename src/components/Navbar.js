export default function Navbar() {
    return (
      <nav className="bg-slate-800 text-white p-4 sticky top-0 z-10 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold italic text-amber-500 underline">LuxSpace</h1>
          <div className="space-x-6 font-medium">
            <a href="#" className="hover:text-amber-500 transition">Home</a>
            <a href="#" className="hover:text-amber-500 transition">Category</a>
            <a href="#" className="hover:text-amber-500 transition">Product</a>
          </div>
        </div>
      </nav>
    );
  }