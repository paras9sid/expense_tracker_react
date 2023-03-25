import React from "react";

import Expenses from "./components/Expenses";

function App() {
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
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
