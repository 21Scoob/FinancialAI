import React, { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export default function Topbar({ onMenuClick }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userInfo = localStorage.getItem("user");
    if (userInfo) setUser(JSON.parse(userInfo));
  }, []);
  return (
    <header className="w-full h-16 flex items-center justify-between px-4 sm:px-6 bg-gray-800 border-b border-gray-700 text-white">
      {/* Hamburger Menu on Mobile */}
      <div className="flex items-center gap-3">
        <button
          className=" p-2 rounded hover:bg-gray-700"
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
        {user ? (
          <span className="text-sm">Welcome, {user.name}</span>
        ) : (
          <>
            <button
              className="p-2 rounded hover:bg-gray-700"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
            <button
              className="p-2 rounded hover:bg-gray-700"
              onClick={() => navigate("/signup")}
            >
              Signup
            </button>
          </>
        )}
      </div>
    </header>
  );
}
