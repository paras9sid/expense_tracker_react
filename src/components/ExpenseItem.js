import React from "react";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  //   {/* converting to month year day as per indian time  */}
  //     {/* https://www.w3schools.com/jsref/jsref_tolocalestring.asp */}
  const month = props.date.toLocaleString("en-IN", { month: "long" });
  const year = props.date.toLocaleString("en-IN", { year: "numeric" });
  const day = props.date.toLocaleString("en-IN", { day: "2-digit" });
  return (
    <div className="expense-item">
      <div>
        {/* <div>{props.date.toISOString()}</div> */}
        {/* converting to month year day as per indian time  */}
        {/* https://www.w3schools.com/jsref/jsref_tolocalestring.asp */}
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price ">Rs.{props.amount} Cr.</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
