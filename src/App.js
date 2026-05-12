import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProductProvider } from './context/ProductContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Category from './pages/Category';
import Products from './pages/Products';

function App() {
  return (
    <BrowserRouter>
      <ProductProvider>
        <div className="min-h-screen flex flex-col bg-brand-cream">
          <Navbar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category" element={<Category />} />
              <Route path="/products" element={<Products />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </ProductProvider>
    </BrowserRouter>
  );
}

export default App;
