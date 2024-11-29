import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Cart from "./pages/Cart";

const App = () => {
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isSignupVisible, setIsSignupVisible] = useState(false);

  const toggleLogin = () => {
    setIsLoginVisible(!isLoginVisible);
    setIsSignupVisible(false);
  };

  const toggleSignup = () => {
    setIsSignupVisible(!isSignupVisible);
    setIsLoginVisible(false);
  };

  const closeForm = () => {
    setIsLoginVisible(false);
    setIsSignupVisible(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar toggleLogin={toggleLogin} />
      {isLoginVisible && (
        <Login toggleSignup={toggleSignup} closeForm={closeForm} />
      )}
      {isSignupVisible && (
        <Signup toggleLogin={toggleLogin} closeForm={closeForm} />
      )}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
