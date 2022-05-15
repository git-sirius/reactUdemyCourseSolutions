import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import './ExpensesFilter.css';

const Expenses = (props) => {
  //State manager for previous state (filteredYear), function to handle the new state (setFilteredYear), with default state (2020)
  const [filteredYear, setFilteredYear] = useState('2022');
  
  //when there is a change in the year selector in the filter component, this component will know about it and trigger an update in the state of the year
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
    console.log("Expenses.js received an updated year selection: " +  selectedYear );
  };
  //ExpensesFilter component has 2 props - selected which has the filteredYear current state managed by React 
  //and onFilteredYear which has the filterChangeHandler function which receives the updated value from the 
  //ExpensesFilter child JSX component when the onChange is triggered on the select html element
  return (
    <div>    
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onFilteredYear={filterChangeHandler} />
      {props.items.map((item) => (
        <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}/> ))}
    </Card></div>
  );
}

export default Expenses;
