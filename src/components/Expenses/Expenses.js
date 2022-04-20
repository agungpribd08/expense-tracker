import React, { useState } from "react"
import './Expenses.css'
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {

    const expenses = props.expenses

    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = expenses.filter(x => x.date.getFullYear().toString() === filteredYear)

    return (
        <li>
            <Card className="expenses">
                <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpenseChart expense={filteredExpenses}/>
                <ExpenseList item={filteredExpenses}/>
            </Card>
        </li>
    )
}

export default Expenses