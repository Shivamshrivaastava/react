import { useFinance } from "../context/FinanceContext";

export default function Transactions() {
  const { transactions, deleteTransaction } = useFinance();

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">All Transactions</h2>
      <ul>
        {transactions.map((t) => (
          <li
            key={t.id}
            className="border p-3 mb-2 flex justify-between items-center"
          >
            <div>
              <strong>{t.type.toUpperCase()}</strong> | ₹{t.amount} |{" "}
              {t.description}
            </div>
            <button
              onClick={() => deleteTransaction(t.id)}
              className="text-red-500"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
