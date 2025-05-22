// src/pages/Budget.jsx
import React, { useEffect, useState } from "react";

export default function Budget() {
  const [budgets, setBudgets] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data din backend
  useEffect(() => {
    const fetchBudgets = async () => {
      try {
        const res = await fetch("http://localhost:3004/api/budget");
        const data = await res.json();
        setBudgets(data);
      } catch (error) {
        console.error("Error fetching budgets:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBudgets();
  }, []);

  return (
    <div className="p-4 text-white">
      <h1 className="text-2xl font-bold mb-4">💸 Budget Overview</h1>

      {loading ? (
        <p>Loading...</p>
      ) : budgets.length === 0 ? (
        <p>No budget entries found.</p>
      ) : (
        <div className="grid gap-4">
          {budgets.map((item) => (
            <div
              key={item._id}
              className="p-4 bg-gray-800 rounded-lg shadow border border-gray-700"
            >
              <p>
                <strong>Category:</strong> {item.category}
              </p>
              <p>
                <strong>Amount:</strong> ${item.amount}
              </p>
              {item.note && (
                <p>
                  <strong>Note:</strong> {item.note}
                </p>
              )}
              <p className="text-sm text-gray-400">
                {new Date(item.date).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
