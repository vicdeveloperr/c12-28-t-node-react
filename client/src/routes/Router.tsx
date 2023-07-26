import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../views/HomePage";
import Register from "../views/Register";
import Login from "../views/Login";
import Landing from "../views/Landing";
import Detail from "../views/Detail";
import Products from "../views/Products";
import Perfil from "../views/Perfil";
import EditProduct from "../views/EditProduct";
import Cart from "../views/Cart";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/perfil" element={<Perfil />} />
        {/* Cambiar perfil a profile */}
        <Route path="/productform" element={<EditProduct />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
