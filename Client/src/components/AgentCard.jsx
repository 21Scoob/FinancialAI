// components/AgentCard.jsx
import React from "react";
function AgentCard({ title, data, icon }) {
  return (
    <div className="flex flex-col bg-gray-800 border border-gray-700 shadow-md rounded-xl p-4 w-full text-white">
      <div className="flex items-center gap-2 text-blue-600">
        {icon}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="mt-2 text-gray-300 text-sm">{data}</p>
    </div>
  );
}

export default AgentCard;
