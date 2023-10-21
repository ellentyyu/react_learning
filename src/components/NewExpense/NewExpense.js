import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const data = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(data);
    }
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpense={saveExpenseDataHandler} />
        </div>
    );
}

export default NewExpense;
