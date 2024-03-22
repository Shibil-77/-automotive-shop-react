import "../src/App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";

//{  ----- ==========user page ========= ------- }

import LoginPage from "./components/Login/Login";
import Home from "./pages/Home/Home";
import Signup from './pages/auth/Registration/Registration'
import Products from "./pages/Products/Products";

function App() {
  return (
    <>
      <div>
        <Routes>
          {/*<------==========user side========---> */}

          <Route path="/login" element={<LoginPage />} />

          <Route path="/" element={<Home />} />

          <Route path="/signup" element={<Signup />} />

          <Route path="/products" element={<Products />} />
          
        </Routes>
      </div>
    </>
  );
}

export default App;
