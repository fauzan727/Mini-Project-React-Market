import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Feature from './components/Feature'
import Trending from './components/Trending'
import Footer from './components/Footer'
import './App.css'

function App() {
  

  return (
    <>
    <Navbar />
    <Hero />
    <Categories />
    <Feature />
    <Trending />
    <Footer />
        
    </>
  )
}

export default App
