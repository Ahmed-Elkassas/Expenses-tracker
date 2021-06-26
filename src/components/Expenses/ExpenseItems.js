import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../Ui/Card";

import "./ExpenseItems.css";

const ExpenseItmes = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItmes;
