import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Sellerlogin from "./pages/sellerlogin";
import Adminlogin from "./pages/adminlogin";
import Register from "./pages/register";
import Profile from "./pages/Profile";
import Product1 from "./pages/Product1";
import Additem from "./pages/additem";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element = {<Register/>}/>
          <Route path="/cart" element = {<Cart/>}/>
          <Route path="/profile" element = {<Profile/>}/>
          <Route path="/product" element = {<Product1/>}/>
          <Route path="/additem" element = {<Additem/>}/></Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
