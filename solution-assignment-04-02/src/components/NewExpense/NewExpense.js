import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isFormVisible, setFormVisibility] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };
  const showForm = () =>{
    setFormVisibility(true);
  }

  const hideForm = () =>{
    setFormVisibility(false);
  }

  return (
    <div className='new-expense'>
      {!isFormVisible && (<div><button type="button" onClick={showForm}>Add Expense</button></div>)}
      {isFormVisible && (<ExpenseForm onCancel={hideForm} onSaveExpenseData={saveExpenseDataHandler} />)}
    </div>
  );
};

export default NewExpense;
