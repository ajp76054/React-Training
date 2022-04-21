import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseItemDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title] = useState(props.title);

  return (
    <Card className="expense-item">
      <ExpenseItemDate date={props.date}></ExpenseItemDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
