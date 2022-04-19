import React from 'react'
import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'

const ExpenseList = (props) => {

    if (props.item.length === 0) {
        return (
            <h2 className='expenses-list__fallback'>No expenses found</h2>
        )
    }

    return (
        <ul className='expenses-list'>
            {props.item.map(el => (
                <ExpenseItem
                    key={el.id}
                    title={el.title}
                    amount={el.amount}
                    date={el.date} />
            ))}
        </ul>
    )
}

export default ExpenseList