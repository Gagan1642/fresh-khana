import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import Login from "./components/login-popup/Login";
import SignUp from "./components/login-popup/SignUp";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      {showLogin && (
        isLogin ? (
          <Login setShowLogin={setShowLogin} setIsLogin={setIsLogin} />
        ) : (
          <SignUp setShowLogin={setShowLogin} setIsLogin={setIsLogin} />
        )
      )}

      <div className={showLogin ? "blurred" : ""}>
        <Navbar setShowLogin={setShowLogin} setIsLogin={setIsLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </div>
    </>
  );
};

export default App;