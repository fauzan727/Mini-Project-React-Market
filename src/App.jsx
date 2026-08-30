import './App.css'
import Navbar from './page/Navbar';
import Dashboard from './page/Dashboard';
import Product from './page/Product';
import Carts from './page/Carts';
import Login from './page/Login';
import { Routes, Route } from 'react-router-dom';
import Users from './page/user';
import ProtectedRoute from './components/ProtectedRoute.jsx'
import { useState } from 'react';
import useFetch from './hooks/useFetch.js';
// import RoleRroute from "./components/RoleRoute";
import AdminPanel from './components/AdminPanel.jsx'

function App() {

  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('user')
    return saved ? JSON.parse(saved) : null
  })
  const {post} = useFetch()

  async function login(username, password){
    try{
      const data = await post('/auth/login', { username, password })

      if(data.message){
        return data.message
      }

      const userData = {
        username: data.username,
        email: data.email,
        role: data.role,
        token: data.token
      }

      setUser(userData)
      localStorage.setItem('user', JSON.stringify(userData))
      return null

    }catch{
      return 'Fafal terhubung ke server'
    }
  }

  function logout(){
    setUser(null)
    localStorage.removeItem('user')
  }

  return (
    <>
      <Navbar user={user} onLogout={logout}/>
      
      {/* Konten Utama Aplikasi */}
      <main style={{ marginTop: '70px', padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          
          {/* Daftar rute halaman marketplace */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Product />} />
          <Route path="/carts" element={<Carts />} />
          
          <Route path='/users'
            element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
            }
          />

          <Route path="/admin"
            element={
              <ProtectedRoute >
                {/* <RoleRroute role={user?.role} izin="admin"> */}
                  <AdminPanel />
                {/* </RoleRroute> */}
              </ProtectedRoute>
            }
          />

          <Route path="/login" element={<Login onLogin={login} /> } />
          <Route path="*" element={
            <h1 className="text-center text-2xl font-bold text-gray-800 py-20">
              404 - Halaman Tidak Ditemukan
            </h1>
          } />
        </Routes>
      </main>
    </>
  )
}

export default App;
