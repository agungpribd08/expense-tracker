import React from 'react'
import './Chart.css'
import ChartBar from './ChartBar'

const Chart = (props) => {
    
    const amountMonth = props.dataPoint.map(x => x.value)
    const totalMax = Math.max(...amountMonth)

    return (
        <div className='chart'>
            {props.dataPoint.map(dataPoint => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMax}
                    label={dataPoint.label} />
            ))}
        </div>
    )
}

export default Chart