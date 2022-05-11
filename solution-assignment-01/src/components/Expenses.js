import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
    console.log("Type of props" + typeof props);
    console.log("Type of items" + typeof props.items);
    console.log("Items" + props.items);
    console.log("item 1" + props.items[0]);
    console.log("item 2" + props.items[1]);
  return (
    <div className="expenses">{props.items.map((item) => (
        <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}/> ))}</div>
  );
}

export default Expenses;
