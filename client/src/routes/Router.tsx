import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../views/Register";
import Login from "../views/Login";
import Landing from "../views/Landing";
import Detail from "../views/Detail";
import Products from "../views/Products";
import Profile from "../views/Profile";
import EditProduct from "../views/EditProduct";
import Cart from "../views/Cart";
import Favorites from "../views/Favorites";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/productform" element={<EditProduct />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
