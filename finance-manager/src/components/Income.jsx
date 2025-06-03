import { useState } from "react";
import { useFinance } from "../context/FinanceContext";

export default function Income() {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const { transactions, addTransaction } = useFinance();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      type: "income",
      amount: +amount,
      description,
      date: Date.now(),
    });
    setAmount("");
    setDescription("");
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Add Income</h2>
      <form onSubmit={handleSubmit} className="space-y-3 mb-6">
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border p-2 w-full"
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 w-full"
          required
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Income
        </button>
      </form>

      <h3 className="text-lg font-medium">Income Entries</h3>
      <ul>
        {transactions
          .filter((t) => t.type === "income")
          .map((t) => (
            <li key={t.id} className="border p-2 my-2">
              {t.description} — ₹{t.amount}
            </li>
          ))}
      </ul>
    </div>
  );
}
