import { Routes, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Income from "../components/Income";
import Transactions from "../components/Transactions";
import Savings from "../components/Savings";
import Expenses from "../components/Expenses";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/income" element={<Income />} />
      <Route path="/expenses" element={<Expenses />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/savings" element={<Savings />} />
      <Route
        path="*"
        element={<h1 className="text-center text-red-500">404 - Not Found</h1>}
      />
    </Routes>
  );
}
