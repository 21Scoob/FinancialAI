// components/Sidebar.jsx
import React from "react";
import { FaChartLine, FaCoins, FaMoneyBillWave, FaUser } from "react-icons/fa";

function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Backdrop on mobile */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 z-30 transition-opacity md:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      ></div>

      {/* Sidebar */}
      <aside
        className={`fixed z-40 inset-y-0 left-0 w-60 bg-gray-800 border-r border-gray-700 p-4 space-y-6 text-white transform transition-transform duration-300 md:relative md:translate-x-0 md:block ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h1 className="text-xl font-bold">FinAI Dashboard</h1>
        <nav className="space-y-3">
          <a
            href="#"
            className="flex items-center gap-2 text-gray-300 hover:text-white"
          >
            📈 Stocks
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-gray-300 hover:text-white"
          >
            🪙 Crypto
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-gray-300 hover:text-white"
          >
            💸 Budget
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-gray-300 hover:text-white"
          >
            👤 Account
          </a>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
