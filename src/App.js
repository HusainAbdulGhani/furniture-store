import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <div className="App bg-gray-50">
      <Navbar />
      
      {/* Di sini bisa ditambahkan routing jika perlu, tapi untuk UTS 
          biasanya cukup menampilkan Home sebagai menu utama */}
      <Home />

      <Footer />
    </div>
  );
}

export default App;