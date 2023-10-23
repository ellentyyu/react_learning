import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [isEditing, setEditing] = useState(false);
    
    const toggleEditingHandler = () => {
        setEditing((prevVal) => !prevVal);
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const data = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(data);
        toggleEditingHandler()
    }

    return (
        <div className='new-expense'>
            {!isEditing && <button type='button' onClick={toggleEditingHandler}>Add New Expense</button>}
            {isEditing && (<ExpenseForm 
                onSaveExpense={saveExpenseDataHandler}
                onCancel={toggleEditingHandler}
            />)}
        </div>
    );
}

export default NewExpense;
