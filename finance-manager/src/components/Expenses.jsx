import { useState } from "react";
import { useFinance } from "../context/FinanceContext";

export default function Expenses() {
  const { transactions, addTransaction } = useFinance();

  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const expenseData = {
      type: "expense",
      amount: +amount,
      description,
      category,
      date: date || new Date().toISOString(),
    };
    addTransaction(expenseData);
    setAmount("");
    setDescription("");
    setCategory("");
    setDate("");
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Add Expense</h2>

      <form onSubmit={handleSubmit} className="space-y-3 mb-6">
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          className="border p-2 w-full"
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="border p-2 w-full"
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          className="border p-2 w-full"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border p-2 w-full"
        />
        <button
          type="submit"
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Add Expense
        </button>
      </form>

      <h3 className="text-lg font-medium">Expense Entries</h3>
      <ul>
        {transactions
          .filter((t) => t.type === "expense")
          .map((t) => (
            <li key={t.id} className="border p-2 my-2">
              <div className="flex justify-between items-center">
                <div>
                  ₹{t.amount} - {t.description} ({t.category}){" "}
                  <span className="text-sm text-gray-500">
                    {new Date(t.date).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
