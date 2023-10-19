import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = () => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const data = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        console.log(data);
    }
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpense={saveExpenseDataHandler} />
        </div>
    );
}

export default NewExpense;
