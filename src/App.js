import React from "react";

import ExpenseItem from "./components/ExpenseItem";

function App(props) {
  //dummy data hard coded -rendered via props
  const expenses = [
    {
      id: 1,
      date: new Date(2025, 5, 3),
      title: "house to buy",
      amount: 1.5,
    },
    {
      id: 2,
      date: new Date(2023, 6, 24),
      title: "car to buy",
      amount: 0.2,
    },
    {
      id: 3,
      date: new Date(2026, 9, 24),
      title: "biz income",
      amount: 20,
    },
    {
      id: 4,
      date: new Date(2024, 9, 24),
      title: "rented income",
      amount: 2,
    },
  ];
  return (
    <div className="App">
      <h1>Expense Tracking project</h1>
      {/* expense value set dynamiccaly by props below inside single curly braces */}
      <ExpenseItem
        title={expenses[0].title}
        date={expenses[0].date}
        amount={expenses[0].amount}
      />
      <ExpenseItem
        title={expenses[1].title}
        date={expenses[1].date}
        amount={expenses[1].amount}
      />

      <ExpenseItem
        title={expenses[2].title}
        date={expenses[2].date}
        amount={expenses[2].amount}
      />
      <ExpenseItem
        title={expenses[3].title}
        date={expenses[3].date}
        amount={expenses[3].amount}
      />
    </div>
  );
}

export default App;
