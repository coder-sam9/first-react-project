import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const initialExpenses = [
    { id: 1, title: "Insurance", date: new Date(2023, 7, 15), price: 100 },
    { id: 2, title: "Book", date: new Date(2024, 8, 25), price: 10 },
    { id: 3, title: "Pen", date: new Date(2025, 2, 10), price: 1 },
    { id: 4, title: "Laptop", date: new Date(2024, 9, 17), price: 200 },
  
    // 2023 Expenses
    { id: 5, title: "Groceries", date: new Date(2023, 0, 12), price: 50 },
    { id: 6, title: "Gym Membership", date: new Date(2023, 3, 5), price: 30 },
    { id: 7, title: "Car Repair", date: new Date(2023, 11, 22), price: 150 },
    { id: 15, title: "Electricity Bill", date: new Date(2023, 5, 10), price: 70 },
    { id: 16, title: "Internet Subscription", date: new Date(2023, 9, 8), price: 40 },
  
    // 2024 Expenses
    { id: 8, title: "Headphones", date: new Date(2024, 1, 14), price: 80 },
    { id: 9, title: "Online Course", date: new Date(2024, 5, 18), price: 120 },
    { id: 17, title: "Movie Tickets", date: new Date(2024, 3, 22), price: 25 },
    { id: 18, title: "Fitness Equipment", date: new Date(2024, 7, 30), price: 150 },
  
    // 2025 Expenses
    { id: 10, title: "Smartphone", date: new Date(2025, 6, 25), price: 300 },
    { id: 11, title: "Vacation", date: new Date(2025, 10, 4), price: 1000 },
    { id: 19, title: "Conference Fee", date: new Date(2025, 2, 14), price: 200 },
    { id: 20, title: "Kitchen Utensils", date: new Date(2025, 8, 6), price: 75 },
  
    // 2026 Expenses
    { id: 12, title: "Furniture", date: new Date(2026, 4, 19), price: 400 },
    { id: 13, title: "Gaming Console", date: new Date(2026, 8, 29), price: 500 },
    { id: 14, title: "Coffee Maker", date: new Date(2026, 11, 15), price: 60 },
    { id: 21, title: "Bookshelf", date: new Date(2026, 2, 9), price: 120 },
    { id: 22, title: "Sports Gear", date: new Date(2026, 6, 17), price: 250 }
  ];
  
const [expenses,setExpenses]=useState(initialExpenses);
const addExpenseHandler = (expenseData) => {
  setExpenses(prevState=>{
    return [...prevState,expenseData]
  })
};

  return (
    <div className="App">
      <h1>
      Let's get Started
      </h1>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses
      expenses={expenses}
      />
      
    </div>
  );
}

export default App;
