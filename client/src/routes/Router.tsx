import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../views/HomePage";
import Register from "../views/Register";
import Login from "../views/Login";
import Landing from "../views/Landing";
import Products from "../views/Products";
import Perfil from "../views/Perfil";
import Detail from "../views/Detail";

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
          <Route path="/products" element={<Products/>} />
        </Routes>
    </BrowserRouter>
    );
}

export default Router