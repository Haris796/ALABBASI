import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import About from './components/About'
import Footer from './components/Footer'
import Home from './components/Home'
import Products from './components/Products'

function HomePage() {
  return (
    <>
      <Home />
      <About />
      <Products />
      <Footer />
    </>
  )
}

function ProductsPage() {
  return (
    <>
      <Home />
      <About/>
      <Products />
      <Footer />
    </>
  )
}

function AboutPage() {
  return (
    <>
      <Home />
      <About />
      <Footer />
    </>
  )
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<HomePage />} />

          <Route path="/about" element={<AboutPage />} />

          <Route path="/products" element={<ProductsPage />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App