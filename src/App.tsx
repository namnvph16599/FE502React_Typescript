import { useState } from 'react'
import './App.css'
import ShowInfo from "./components/showInfo"
import type { TypeProduct } from "./types/products"
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import HomePages from "./pages/HomePages"
import ProductPages from './pages/ProductPages';
import AdminLayout from './pages/layouts/AdminLayout';
import UserLayout from './pages/layouts/UserLayout';
import Dashboard from './pages/Dashboard';
import ProductDetails from './pages/ProductDetails';

function App() {
  const [count, setCount] = useState<number>(0)
  const [info, setInfo] = useState<TypeProduct>({ name: "ngo nam", age: 20 })
  return (
    <div>
      <header>
        <ul>
          <li><NavLink to="/">Home page</NavLink></li>
          <li><NavLink to="/products">Product page</NavLink></li>
          <li><NavLink to="/">Admin page</NavLink></li>
        </ul>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<UserLayout />} >
            <Route index element={<HomePages />} />
            <Route path="/products" element={<ProductPages />} />
            <Route path="/products/:id" element={<ProductDetails />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
          </Route>


        </Routes>
      </main>
    </div>
  )
}

export default App
