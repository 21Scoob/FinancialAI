import React, { useState } from "react";
import { userAPI } from "../api/api";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/TopBar";
import Footer from "../components/Footer";

export default function Signup() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Parolele nu coincid!");
      return;
    }

    const result = await userAPI.signup({
      name,
      email,
      password,
    });

    if (result.success) {
      console.log("✅ Signup successful:", result.data);
      alert("Cont creat cu succes!");
      // Redirect la login sau dashboard
    } else {
      console.error("❌ Signup failed:", result.error);
      alert(result.error);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white overflow-hidden">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 flex flex-col w-full overflow-hidden">
        <Topbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

        <main className="flex-1 p-4 flex items-center justify-center bg-gray-900 overflow-auto">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md mt-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Create Account
            </h2>
            <form className="space-y-4" onSubmit={handleSignup}>
              <div>
                <label className="block mb-1 text-sm">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 rounded bg-gray-700 border border-gray-600"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 rounded bg-gray-700 border border-gray-600"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 rounded bg-gray-700 border border-gray-600"
                  placeholder="••••••••"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm">Confirm Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full p-2 rounded bg-gray-700 border border-gray-600"
                  placeholder="••••••••"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-blue-600 hover:bg-blue-700 transition rounded text-white font-semibold"
              >
                Sign Up
              </button>
              <p className="text-sm text-center text-gray-400 mt-4">
                Already have an account?{" "}
                <a href="/login" className="text-blue-400 hover:underline">
                  Log in
                </a>
              </p>
            </form>
          </div>
        </main>

        {/* Footer - va apărea automat când se scrollează la sfârșit */}
        <Footer />
      </div>
    </div>
  );
}
