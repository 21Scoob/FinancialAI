import React, { useEffect, useRef, useState } from "react";

export default function Footer() {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`bg-gray-800 text-gray-400 py-4 text-center  border-t border-gray-700 transition-all duration-700 ease-in-out
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      <p className="text-sm">
        &copy; {new Date().getFullYear()} FinancialAI. All rights reserved.
      </p>
    </footer>
  );
}
