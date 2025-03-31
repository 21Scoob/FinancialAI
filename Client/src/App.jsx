import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main.jsx";
import Stocks from "./pages/Stocks.jsx";
import Budget from "./pages/Budget.jsx";
import Reports from "./pages/Reports.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/stocks" element={<Stocks />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </Router>
  );
}
