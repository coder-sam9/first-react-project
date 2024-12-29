import { useState } from "react";
import Chart from "../Chart/Chart";

const ExpenseChart=(props)=>{
    return(
       <Chart chartExpenses={props.chartData}/>
    );
}
export default ExpenseChart;