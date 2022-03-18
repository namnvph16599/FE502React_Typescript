import { useState, useEffect } from 'react'
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
import ProductAdd from './pages/ProductAdd';
import { addProduct, listProducts } from './api/productsApi';

function App() {
  const [products, setProducts] = useState<{  name: String,
    price: Number,
    image: String,
    description: String }[]>([])

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await listProducts();
      setProducts(data);
    }
    getProducts();
  }, []);

  const handlerAddProducts = async (dataAddProducts: any) => {
    console.log(dataAddProducts);
    const { data } = await addProduct(dataAddProducts); // sau khi call api có id thì sẽ set lại products
    setProducts([...products, data])
  }
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
            <Route path="/products" element={<ProductPages products={products} />} /> 
            <Route path="/products/add" element={<ProductAdd onAddProduct={handlerAddProducts} />} />
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
