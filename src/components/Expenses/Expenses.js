import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2019");
    const filteredExpenses = props.expenses.filter(
        (expense) => expense.date.getFullYear().toString() === filteredYear
    );

    let expenseContent = <p>No expense found.</p>
    if (filteredExpenses.length > 0) {
        expenseContent = filteredExpenses.map((expense) => (
            <ExpenseItem
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                key={expense.id}
            ></ExpenseItem>
        ))
    }

    const filterChangeHandler = (year) => {
        setFilteredYear(year);
    };

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filteredYear}
                onFilterChange={filterChangeHandler}
            />
            {expenseContent}
        </Card>
    );
};

export default Expenses;
