import React from "react";
import "./ExpenseDate.css";

function ExpenseDate(props) {
  //   {/* converting to month year day as per indian time  */}
  //     {/* https://www.w3schools.com/jsref/jsref_tolocalestring.asp */}
  const month = props.date.toLocaleString("en-IN", { month: "long" });
  const year = props.date.toLocaleString("en-IN", { year: "numeric" });
  const day = props.date.toLocaleString("en-IN", { day: "2-digit" });

  return (
    <div className="expense-date">
      {/* <div>{props.date.toISOString()}</div> */}
      {/* converting to month year day as per indian time  */}
      {/* https://www.w3schools.com/jsref/jsref_tolocalestring.asp */}
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
