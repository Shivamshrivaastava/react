import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../firebase/config";
import { onValue, push, ref, remove } from "firebase/database";

const FinanceContext = createContext();
export const useFinance = () => useContext(FinanceContext);

export const FinanceProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const transactionRef = ref(db, "transactions");
    onValue(transactionRef, (snapshot) => {
      const data = snapshot.val();
      const loaded = data
        ? object.entries(data).map(([id, t]) => ({ id, ...t }))
        : [];
      setTransactions(loaded);
    });
  }, []);
  const addTransaction = (transaction) => {
    const transactionRef = ref(db, "transactions");
    push(transactionRef, transaction);
  };

  const deleteTransaction = (id) => {
    remove(ref(db, `transactions/${id}`));
  };

  return (
    <FinanceContext.Provider
      value={{ transactions, addTransaction, deleteTransaction }}
    >
      {children}
    </FinanceContext.Provider>
  );
};
