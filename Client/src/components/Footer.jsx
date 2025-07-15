import React from "react";

export default function Footer() {
  return (
    <footer className="sticky bottom-0 bg-gray-800 text-gray-400 py-4 text-center border-t border-gray-700 z-10">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} FinancialAI. All rights reserved.
      </p>
    </footer>
  );
}
