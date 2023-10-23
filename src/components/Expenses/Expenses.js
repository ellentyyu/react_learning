import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";
const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2019");
    const filteredExpenses = props.expenses.filter(
        (expense) => expense.date.getFullYear().toString() === filteredYear
    );

    const filterChangeHandler = (year) => {
        setFilteredYear(year);
    };

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filteredYear}
                onFilterChange={filterChangeHandler}
            />
            <ExpensesList expenses={filteredExpenses} />
        </Card>
    );
};

export default Expenses;
