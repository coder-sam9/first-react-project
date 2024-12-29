import React from "react";
import ChartBars from "./ChartBars";
import './Chart.css'

const Chart=(props)=>{
    let max=0;
    const chartbarData=[
        {expenseMonth:'Jan',expenseValue:0},
        {expenseMonth:'Feb',expenseValue:0},
        {expenseMonth:'Mar',expenseValue:0},
        {expenseMonth:'Apr',expenseValue:0},
        {expenseMonth:'May',expenseValue:0},
        {expenseMonth:'Jun',expenseValue:0},
        {expenseMonth:'Jul',expenseValue:0},
        {expenseMonth:'Aug',expenseValue:0},
        {expenseMonth:'Sep',expenseValue:0},
        {expenseMonth:'Oct',expenseValue:0},
        {expenseMonth:'Nov',expenseValue:0},
        {expenseMonth:'Dec',expenseValue:0}
    ];
    for(let i=0;i<props.chartExpenses.length;i++){
        chartbarData[props.chartExpenses[i].date.getMonth()].expenseValue+=props.chartExpenses[i].price;
        if(max<chartbarData[props.chartExpenses[i].date.getMonth()].expenseValue){
            max=chartbarData[props.chartExpenses[i].date.getMonth()].expenseValue;
        }
    }
    return (
        <div className="chart">
        {chartbarData.map((monthData,index)=>{
       return <ChartBars label={monthData.expenseMonth} value={monthData.expenseValue} maxValue={max} />

        })
        }
        </div>
    )
}
export default Chart;