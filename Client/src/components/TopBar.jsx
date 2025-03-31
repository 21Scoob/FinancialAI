import React from "react";
import { HiMenu } from "react-icons/hi";

export default function Topbar({ onMenuClick }) {
  return (
    <header className="w-full h-16 flex items-center justify-between px-4 sm:px-6 bg-gray-800 border-b border-gray-700 text-white">
      {/* Hamburger Menu on Mobile */}
      <div className="flex items-center gap-3">
        <button
          className="md:hidden p-2 rounded hover:bg-gray-700"
          onClick={onMenuClick}
        >
          <HiMenu className="w-6 h-6" />
        </button>
        <h2 className="text-lg sm:text-xl font-semibold">
          Your AI Financial Assistant
        </h2>
      </div>

      {/* User Avatar */}
      <div className="flex items-center gap-2">
        <span className="text-sm">Welcome, User</span>
        <img
          className="w-8 h-8 rounded-full"
          src="https://i.pravatar.cc/300"
          alt="avatar"
        />
      </div>
    </header>
  );
}
