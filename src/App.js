import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import EXPENSES from "./mock-data/expenses";
const App = () => {
  const [expenses, setExpenses] = useState([...EXPENSES]);
  const addExpenseHandler = (expense) => {
    console.log("New Expense in AppJS:::", expense);
    setExpenses((expenses) => {
      return [...expenses, expense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
