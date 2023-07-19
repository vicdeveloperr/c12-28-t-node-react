import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./Views/HomePage";
import Register from "./Views/Register";
import Login from "./Views/Login";
import Landing from "./Views/Landing";
import Detail from "./Views/Detail";
import Products from "./Views/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
