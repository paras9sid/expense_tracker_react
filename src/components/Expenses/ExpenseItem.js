// import React from "react";

// import Card from "../UI/Card";
// import "./ExpenseItem.css";
// import ExpenseDate from "./ExpenseDate";

// // function ExpenseItem(props) {
// const ExpenseItem = (props) => {
//   return (
//     <Card className="expense-item">
//       <ExpenseDate date={props.date} />
//       <div className="expense-item__description">
//         <h2>{props.title}</h2>
//         <div className="expense-item__price ">Rs.{props.amount} Cr.</div>
//       </div>
//     </Card>
//   );
// };

// export default ExpenseItem;

import React from "react";
import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2023, 4, 30);
  const expenseTitle = "Car buying";
  const expenseAmount = 20;
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">Rs.{expenseAmount}L</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
