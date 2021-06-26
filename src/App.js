import React, { useState } from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

import "./App.css";

const dumy_Expenses = [
  {
    id: "1e",
    title: "Car insurance",
    amount: 599.3,
    date: new Date(2021, 10, 2),
  },
  { id: "2e", title: "paper", amount: 9.3, date: new Date(2020, 6, 3) },
  { id: "3e", title: "Car wash", amount: 12.4, date: new Date(2020, 1, 24) },
  { id: "4e", title: "New TV", amount: 799.3, date: new Date(2021, 11, 11) },
];

const App = () => {
  const [expenses, setExpenses] = useState(dumy_Expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expenses} />
    </div>
  );
};

export default App;
