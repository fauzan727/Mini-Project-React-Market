import './App.css'
import Navbar from './page/Navbar';
import Dashboard from './page/Dashboard';
import Product from './page/Product';
import Carts from './page/Carts';
import Login from './page/Login';
import { Routes, Route } from 'react-router-dom';
import Users from './page/user';

function App() {
  return (
    <>
      <Navbar />

      {/* Konten Utama Aplikasi */}
      <main style={{ marginTop: '70px', padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          
          {/* Daftar rute halaman marketplace */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Product />} />
          <Route path="/carts" element={<Carts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<Users />} />
          
          <Route path="*" element={<h2>Halaman Tidak Ditemukan (404)</h2>} />
        </Routes>
      </main>
    </>
  )
}

export default App;
