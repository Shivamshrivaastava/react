import { useFinance } from "../context/FinanceContext";

export default function Dashboard() {
  const { transactions } = useFinance();

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + +t.amount, 0);
  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + +t.amount, 0);
  const savings = income - expenses;
  const goal = 10000;
  const progress = ((savings / goal) * 100).toFixed(1);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Financial Summary</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-green-200 p-4 rounded">Total Income: ₹{income}</div>
        <div className="bg-red-200 p-4 rounded">
          Total Expenses: ₹{expenses}
        </div>
        <div className="bg-blue-200 p-4 rounded">
          Current Savings: ₹{savings}
        </div>
      </div>

      <h3 className="mt-6 text-lg font-medium">Savings Goal Progress</h3>
      <div className="w-full bg-gray-300 rounded h-6 mt-2">
        <div
          className="bg-green-500 h-6 rounded"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="mt-1 text-sm">
        {progress}% of ₹{goal} goal
      </p>
    </div>
  );
}
