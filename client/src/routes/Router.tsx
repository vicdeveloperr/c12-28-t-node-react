import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../views/HomePage";
import Register from "../views/Register";
import Login from "../views/Login";
import Landing from "../views/Landing";

function Router() {
    return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </BrowserRouter>
    );
}

export default Router