import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "../Views/Landing";
import HomePage from "../Views/HomePage";
import Register from "../Views/Register";
import Login from "../Views/Login";
import Perfil from "../Views/Perfil";
import Detail from "../Views/Detail";
import Products from "../Views/Products";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
