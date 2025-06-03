import { useFinance } from "../context/FinanceContext";

export default function Savings() {
  const { transactions } = useFinance();
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + +t.amount, 0);
  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + +t.amount, 0);
  const savings = income - expenses;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Savings Overview</h2>
      <p>Income: ₹{income}</p>
      <p>Expenses: ₹{expenses}</p>
      <p>Savings: ₹{savings}</p>
    </div>
  );
}
