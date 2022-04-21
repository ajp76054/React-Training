import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (filteredDate) => {
    setFilteredYear(filteredDate);
    console.log("Filtered Date", filteredDate);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          onChangeFilter={filterChangeHandler}
          selected={filteredYear}
        />

        {props.expenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
