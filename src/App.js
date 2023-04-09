import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "item1",
    amount: 1.5,
    date: new Date(2025, 5, 3),
  },
  {
    id: 2,
    title: "item2",
    amount: 0.2,
    date: new Date(2023, 6, 24),
  },
  {
    id: 3,
    title: "item3",
    amount: 20,
    date: new Date(2026, 9, 24),
  },
  {
    id: 4,
    title: "item4",
    amount: 2,
    date: new Date(2024, 9, 24),
  },
];

// function App() {
//using arrow functions - alternative function syntax
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
