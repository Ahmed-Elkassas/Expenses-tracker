import React from "react";
import ExpenseItmes from "./ExpenseItems";

import "./ExpensesList.css";

const ExpensesList = (props) => {
  let expenseContent = <p className="filtered-expense">No Expense to show!</p>;

  if (props.items.length > 0) {
    expenseContent = props.items.map((expense) => (
      <ExpenseItmes
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return <ul className="expenses-list">{expenseContent}</ul>;
};

export default ExpensesList;
