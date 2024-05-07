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

import ShopPage from "./pages/shop/ShopPage";
import AddShop from "./pages/addShop/AddShop";
import AddProduct from "./pages/addProduct/AddProduct";

const App = () => {
  return (
    <Router>

      <Routes>

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<ShopPage />} />
          <Route path="/addShop" element={<AddShop />} />
          <Route path="/addProduct" element={<AddProduct />} />

        </Route>

        <Route path="*" element={<Error />} />
        <Route path="/register" element={<Register />} />

        <Route path="/login" element={<Login />} />
		
      </Routes>
      
    </Router>
  );
};

export default App;
