import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/TopBar";
import AgentCard from "./components/AgentCard";
import {
  FaChartLine,
  FaCoins,
  FaMoneyBillWave,
  FaFileAlt,
} from "react-icons/fa";
import "./index.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dark bg-gray-900 text-white flex h-screen overflow-hidden">
      {/* Mobile Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col w-full overflow-hidden">
        <Topbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 p-4 sm:p-6 bg-gray-900 overflow-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          <AgentCard
            title="StockBot"
            data="AAPL is trending positive. Suggest Buy. Risk: Medium"
            icon={<FaChartLine />}
          />
          <AgentCard
            title="CryptoBot"
            data="BTC sentiment is mixed. Suggest Hold. Volatility high."
            icon={<FaCoins />}
          />
          <AgentCard
            title="BudgetBot"
            data="Spending is 14% over plan. Suggest cut on entertainment."
            icon={<FaMoneyBillWave />}
          />
          <AgentCard
            title="ReportBot"
            data="Summary ready. Click to export full report."
            icon={<FaFileAlt />}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
