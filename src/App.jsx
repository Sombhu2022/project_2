import Footer from "./pages/layout/footer/Footer";
import Navbar from "./pages/layout/header/Navbar";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Error from "./pages/error/Error";
import Layout from "./pages/layout/Layout";

import './app.css'
import Register from "./pages/user/register/Register";
import Login from "./pages/user/login/Login";

import AddProduct from "./pages/product/components/addProduct/AddProduct";

import { useDispatch, useSelector } from "react-redux";
import { authUser } from "./redux/user/userController";
import { useEffect } from "react";
import { fetchAllShop } from "./redux/shop/shopController";
import ProductPage from "./pages/product/ProductPage";

import ShopPage from "./pages/shop/ShopPage";
import AddShop from "./pages/shop/componets/addShop/AddShop";
import ProductDetails from "./pages/product/components/ProductDetails";
import EditProduct from "./pages/product/components/editProduct/EditProduct";
import EditShop from "./pages/shop/componets/editShop/EditShop";


const App = () => {
 
  const { user , isAuthenticate} = useSelector(state=> state.user)
  console.log(isAuthenticate,user);
  const dispatch= useDispatch()
  useEffect(()=>{
    dispatch(authUser())
    dispatch(fetchAllShop())
  },[])

  return (
    <Router>

      <Routes>

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/shop/:id" element={<ShopPage/>} />
          <Route path="/shop/add" element={<AddShop/>} />
          <Route path="/shop/edit/:shopId" element={<EditShop/>} />
          <Route path="/shop/product/:productId" element={<ProductDetails />} />
          <Route path="/shop/product/edit/:productId" element={<EditProduct />} />

        </Route>

        <Route path="*" element={<Error />} />
        <Route path="/register" element={<Register />} />

        <Route path="/login" element={<Login />} />
		
      </Routes>
      
    </Router>
  )
};

export default App;

export const baseUrl = 'http://localhost:8080'