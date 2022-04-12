import { useState, useEffect } from 'react'
import { Routes, Route, NavLink, Navigate } from 'react-router-dom'
import Products from './components/Products'
// import "bootstrap/dist/css/bootstrap.min.css";

import { add, list, remove, update } from './api/products';


import { IProduct } from './types/products'
import WebsiteLayout from './pages/layout/WebsiteLayout'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import AdminLayout from './pages/layout/AdminLayout'
import Dashboard from './pages/Dashboard'
import ProductManager from './pages/ProductsManager'
import ProductAdd from './pages/AddProducts';
import EditProduct from './pages/layout/EditProduct';

import Signup from './pages/Signup';
import Signin, { TypeFormSign } from './pages/Signin'

import { AboutPage } from './pages/AboutPage'
import CartPage from './pages/CartPage'
import ProductsPage from './pages/ProductsPage'
import { Ipost } from './types/post'
import { listCate } from './api/cate';
import { TCate } from './types/cate';
// import { listpost } from './api/post';

function App() {
  // const [products,setProducts] = useState<IProduct>(data)
  const [products, setProducts] = useState<IProduct[]>([])
  const [categories, setCategories] = useState<TCate[]>([]);

  useEffect(() => {
    const getProudcts = async () => {
      const { data } = await list();
      // const data = await reponse.json();
      setProducts(data);
    }
    getProudcts()
    const getCate = async () => {
      const { data } = await listCate();
      setCategories(data);
    }
    getCate()
  }, [])

  // const [posts, setPosts] = useState<Ipost[]>([])

  // useEffect(() => {
  //   const getPosts = async () => {
  //     const {data} = await listpost();

  //     setPosts(data);
  //   }
  //   getPosts()
  // }, [])

  const removeItem = (id: number) => {
    //call api
    remove(id);
    //rêRender
    setProducts(products.filter(item => item._id !== id))
  }

  const onHandleAdd = async (product: IProduct) => {
    const { data } = await add(product);
    setProducts([...products, data]);
  }

  const onHnadleUpdate = async (product: IProduct) => {
    const { data } = await update(product);
    console.log(data);
    setProducts(products.map(item => item._id == data._id ? data : item));
  }

  // const onHandleSigin = async (user:TypeFormSign) => {
  //   const { data } = await signin(user);
  //   localStorage.setItem('user', JSON.stringify(user))
  // } 
  return (
    <div className="App font-mono">
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<Home products={products} />} />
          <Route path='products'>
            <Route index element={<ProductsPage categories={categories} products={products} />} />
            <Route path=':id' element={<ProductDetail />} />
          </Route>

          <Route path='about' element={<AboutPage />} />
          <Route path='cart' element={<CartPage />} />
          <Route path="login" element={<Signin />} />
          <Route path="register" element={<Signup />} />
        </Route>
        <Route path="*" element={<WebsiteLayout />} />
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products">
            <Route index element={<ProductManager onRemove={removeItem} products={products} />} />
            <Route path="add" element={<ProductAdd onAdd={onHandleAdd}  categories={categories}/>} />
            <Route path=":id/edit" element={<EditProduct onUpdate={onHnadleUpdate} categories={categories}/>} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App

