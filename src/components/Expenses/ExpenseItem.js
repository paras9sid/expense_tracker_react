import React from "react";

import Card from "../UI/Card";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

// function ExpenseItem(props) {
const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price ">Rs.{props.amount} Cr.</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
