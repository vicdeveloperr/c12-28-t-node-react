import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../views/HomePage";
import Register from "../views/Register";
import Login from "../views/Login";
import Landing from "../views/Landing";
import Detail from "../views/Detail";
import Products from "../views/Products";
import Perfil from "../views/Perfil";
import ProductViewer from "../components/common/ProductViewer";
import EditProduct from "../views/EditProduct";
import Cart from "../views/Cart";

const images = ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80","https://mexx-img-2019.s3.amazonaws.com/36399_1.jpeg","https://i.blogs.es/0aadbd/guia-de-compras-de-auriculares-inalambricos/1366_2000.jpg"]

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
          
          <Route path="/productos" element={<ProductViewer images={images}/>}/>
        </Routes>
    </BrowserRouter>
    );
}

export default Router