import React from "react";

import Card from "../UI/Card";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

// function ExpenseItem(props) {
const ExpenseItem = (props) => {
  //below arrow function can be written as --> function clickHandle(){}
  const clickHandler = () => {
    console.log("clicked!!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price ">Rs.{props.amount} Cr.</div>
      </div>
      {/* button clciked and above title changed - passed via props */}
      {/* adding event listener in button - listener starts with 'on' and wants as a function as a values */}
      {/* <button onClick={() => console.log("clicked")}>Change Title</button>--> will print clicked in console as per the stmt in arrow function in listener */}

      {/* function passed in onClick listener and written above return in componenet function */}
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
