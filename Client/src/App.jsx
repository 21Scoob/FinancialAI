import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main.jsx";
import Stocks from "./pages/Stocks.jsx";
import Budget from "./pages/Budget.jsx";
import Reports from "./pages/Reports.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/stocks" element={<Stocks />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}
