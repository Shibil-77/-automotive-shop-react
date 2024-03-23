import "../src/App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import PublicRoute from './routes/PublicRoute'
import ProtectRouter from './routes/ProtectRouter'

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
          <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />

          <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>} />

          <Route path="/" element={<Home />} />

          <Route path="/products" element={<ProtectRouter><Products /></ProtectRouter>} />

        </Routes>
      </div>
    </>
  );
}

export default App;
