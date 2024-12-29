
import React from 'react'
import './ChartBars.css'
const ChartBars = ({label,value,maxValue}) => {
  return (
    <div className='chart-bar'>
    <div className='chart-bar__inner'>

    <div className='chart-bar__fill' style={{height:`${(value/maxValue)*100}%`,backgroundColor:"blueviolet"}}></div>
    </div>
    <div className='chart-bar__label'>{label}</div>
    </div>
  )
}

export default ChartBars