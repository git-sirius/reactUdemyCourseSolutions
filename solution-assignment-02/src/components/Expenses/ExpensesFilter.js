import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  //SelectHandler function that listens to the onChange event target for the select element then passes the value upwards 
  // to the parent Expenses JSX element using props onFilteredYear update function
  const selectHandler = (event) => {
      props.onFilteredYear(event.target.value);
  };
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={selectHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;