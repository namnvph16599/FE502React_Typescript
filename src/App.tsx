import { useEffect, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.css' from "bootstrap";
import AdminLayout from './pages/layouts/AdminLayout';
import { Route, Routes } from 'react-router-dom';
import { ProductsType } from './types/products';
import ProductsAdmin from './pages/admin/products/Products';
import ProductsAdminAdd from './pages/admin/products/ProductsAdd';
import { list, post, put, remove } from "./api/products"
import ProductEdit from './pages/admin/products/ProductEdit';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import HomePage from './pages/HomePages';
import ProductsPage from './pages/ProductsPage';
import ProductDetail from './pages/ProductDetail';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import PrivateRouter from './components/PrivateRouter';
import { getLocalStorage } from './utils/localStorage';
import Dashboard from './pages/admin/Dashboard';
import { cateList, catePost, catePut, cateRemove } from './api/category';
import { CategoryTypes } from './types/category';
import CategoryList from './pages/admin/category/CategoryList';
import CategoryAdd from './pages/admin/category/CategoryAdd';
import CategoryEdit from './pages/admin/category/CategoryEdit';
function App() {
  const [products, setProducts] = useState<ProductsType[]>([]);
  const [category, setCategory] = useState<CategoryTypes[]>([]);


  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      // console.log(data);
      setProducts(data);
    }
    getProducts();
    const getCategory = async () => {
      const { data } = await cateList();
      // console.log(data);
      setCategory(data)
    }
    getCategory()
  }, [])

  const handlerRemoveProduct = (id: number) => {
    remove(id);
    setProducts(products.filter(item => item._id != id))
  }
  const handlerAddProducts = async (dataPost: ProductsType) => {
    // console.log(dataPost);
    const { data } = await post(dataPost);
    setProducts([...products, data])
  }

  const handlerUpdateProduct = async (dataPost: ProductsType) => {
    try {
      const { data } = await put(dataPost);
      setProducts(products.map(item => item._id == data._id ? data : item))
    } catch (err) {
      console.log(err);
    }
  }


  //category 
  const handlerRemoveCategory = (id: number) => {
    // console.log(id);
    cateRemove(id);
    setCategory(category.filter(item => item._id != id));
  }


  const handlerAddCategory = async (dataPost: CategoryTypes) => {
    // console.log(data);
    const { data } = await catePost(dataPost);
    setCategory([...category, data]);
    // setCategory(category.filter(item => item._id != id));
  }

  const handlerEditCategory = async (dataPost: CategoryTypes) => {
    const { data } = await catePut(dataPost);
    setCategory(category.map(item => item._id == data._id ? data : item))
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={<WebsiteLayout category={category} />}>
          <Route index element={<HomePage products={products} />} />
          <Route path="products" element={<ProductsPage products={products} />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />



        </Route>
        <Route path="admin" element={<PrivateRouter><AdminLayout /></PrivateRouter>} >
          <Route index element={<Dashboard />} />
          <Route path="products">
            <Route index element={<ProductsAdmin products={products} propsHandlerDeleteProducts={handlerRemoveProduct} />} />
            <Route path=":id/edit" element={<ProductEdit onUpdate={handlerUpdateProduct} />} />
            <Route path="add" element={<ProductsAdminAdd onAdd={handlerAddProducts} />} />
          </Route>
          <Route path="category">
            <Route index element={<CategoryList category={category} handlerRemoveCategory={handlerRemoveCategory} />} />
            <Route path="add" element={<CategoryAdd handlePushDataCate={handlerAddCategory} />} />
            <Route path=":id/edit" element={<CategoryEdit handlePushDataEditCate={handlerEditCategory} />} />

          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
