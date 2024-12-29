import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";

import ExpensesFilter from "./ExpensesFilter";
import ExpenseChart from "./ExpenseChart";
const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2023");
  
    const changeFilterHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
    };
  
    const filteredExpenses = props.expenses.filter((expense) => {
      return expense.date.getFullYear().toString() === filteredYear;
    });
  
    let expensesContent = <p>No expenses found</p>;
    let expensesMessage=<p>Only one expense here. Please add more</p>;
  
    if (filteredExpenses.length > 0) {
      expensesContent = filteredExpenses.map((expense,index) => {
        return (
            <>

          <ExpenseItem
          key={index}
          data={expense}
          />
          
        {filteredExpenses.length===1?expensesMessage:<></>}
            </>
        );
      });
    }

  
    return (
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={changeFilterHandler}
        />
        <ExpenseChart chartData={filteredExpenses}/>
        {expensesContent}
      </Card>
    );
  };
export default Expenses;
