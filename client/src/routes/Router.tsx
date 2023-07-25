import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../Views/HomePage";
import Register from "../Views/Register";
import Login from "../Views/Login";
import Landing from "../Views/Landing";
import Detail from "../Views/Detail";
import Products from "../Views/Products";
import Perfil from "../Views/Perfil";
import EditProduct from "../Views/EditProduct";
import Cart from "../Views/Cart";

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
        <Route path="/productform" element={<EditProduct />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
