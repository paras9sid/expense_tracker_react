import React from "react";
import "./ExpenseItem.css";

function ExpenseItem() {
  //adding js code below -- no relation to react
  const expenseDate = new Date(2023, 2, 24);
  const expenseTitle = "House to buy";
  const expenseAmount = 1.5;
  return (
    <div className="expense-item">
      {/* <div>24th March 2023</div> */}
      {/* <div>{expenseDate}</div> will throw error - date object cant be used like this*/}
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        {/* <h2>House to buy</h2> */}
        {/* hard coded data example below  */}
        {/* {Math.random()} -- will add randon muber differenct everytime*/}
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price ">Rs.{expenseAmount} Cr.</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
