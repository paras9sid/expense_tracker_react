import React from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

// function App() {
//using arrow functions - alternative function syntax
const App = () => {
  const expenses = [
    {
      id: 1,
      date: new Date(2025, 5, 3),
      title: "item1",
      amount: 1.5,
    },
    {
      id: 2,
      date: new Date(2023, 6, 24),
      title: "item2",
      amount: 0.2,
    },
    {
      id: 3,
      date: new Date(2026, 9, 24),
      title: "item3",
      amount: 20,
    },
    {
      id: 4,
      date: new Date(2024, 9, 24),
      title: "item4",
      amount: 2,
    },
  ];

  return (
    <div className="App">
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
