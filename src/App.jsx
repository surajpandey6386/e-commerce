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
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
