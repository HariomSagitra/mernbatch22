import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx"
import Cart from "./pages/Cart.jsx"
import NotFound from "./pages/NotFound.jsx"
import Login from "./pages/Login.jsx"
import Signup from "./pages/Signup.jsx"
import { Data } from "./utils/Data.js"
import { useState } from "react";
function App() {

  const [cartItem, setCartItem] = useState([]);

  return (

    <div>
      <Navbar cartItem={cartItem}/>
      <Routes>
        <Route path="/" element={<Home products={Data} setCartItem={setCartItem} cartItem={cartItem} />} />
        <Route path="/cart" element={<Cart cartItem={cartItem} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;