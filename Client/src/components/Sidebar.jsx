import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* 🔲 Backdrop on Mobile */}
      <div
<<<<<<< HEAD
        className={`fixed inset-0 bg-black bg-opacity-40 z-30 transition-opacity ${
=======
        className={`fixed inset-0 bg-black bg-opacity-40 z-30 transition-opacity md:hidden ${
>>>>>>> 237ca2a08cdeac438df9905fe15484563ebaeb2e
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      ></div>

      {/* 📋 Sidebar Panel */}
      <aside
<<<<<<< HEAD
        className={`fixed z-40 inset-y-0 left-0 w-60 bg-gray-800 border-r border-gray-700 p-4 space-y-6 text-white transform transition-transform duration-300 ${
=======
        className={`fixed z-40 inset-y-0 left-0 w-60 bg-gray-800 border-r border-gray-700 p-4 space-y-6 text-white transform transition-transform duration-300 md:relative md:translate-x-0 md:block ${
>>>>>>> 237ca2a08cdeac438df9905fe15484563ebaeb2e
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h1 className="text-xl font-bold">FinAI Dashboard</h1>

        <nav className="space-y-3">
          <Link
            to="/"
            onClick={onClose}
            className="flex items-center gap-2 text-gray-300 hover:text-white"
          >
            🏠 Dashboard
          </Link>

          <Link
            to="/stocks"
            onClick={onClose}
            className="flex items-center gap-2 text-gray-300 hover:text-white"
          >
            📈 Stocks
          </Link>

          <Link
            to="/budget"
            onClick={onClose}
            className="flex items-center gap-2 text-gray-300 hover:text-white"
          >
            💸 Budget
          </Link>

          <Link
            to="/reports"
            onClick={onClose}
            className="flex items-center gap-2 text-gray-300 hover:text-white"
          >
            📄 Reports
          </Link>
        </nav>
      </aside>
    </>
  );
}
