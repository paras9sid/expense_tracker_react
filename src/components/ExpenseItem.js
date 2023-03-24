import React from "react";
import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>25th March 2023</div>
      <div className="expense-item__description">
        <h2>House to buy</h2>
        <div className="expense-item__price ">Rs.1.5 Cr.</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
