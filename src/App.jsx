import Footer from "./pages/layout/footer/Footer";
import Navbar from "./pages/layout/header/Navbar";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/home/Home";
import Error from "./pages/error/Error";
import Layout from "./pages/layout/Layout";

import './app.css'
import Register from "./pages/user/register/Register";
import Login from "./pages/user/login/Login";
import Product from "./pages/product/Product";
const App = () => {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
        </Route>

        <Route path="*" element={<Error />} />
        <Route path="/register" element={<Register />} />

        <Route path="/login" element={<Login />} />
		
      </Routes>
    </Router>
  );
};

export default App;
