// import ExpenseItem from './ExpenseItem.js';
import ExpensesList from './ExpensesList.js';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2019');
    const filterChangeHandler = selectedYear => {

        setFilteredYear(selectedYear);
        /* console.log('Expenses.js');
        console.log(selectedYear); */
    };

    const filteredExpenses = props.item.filter(expense => {

        return expense.date.toLocaleString('en-US', { year: 'numeric' }) === filteredYear; 
    });

    /* let expensesContent = <p>No expenses found.</p>;

    if (filteredExpenses.length > 0) {
        
        expensesContent = filteredExpenses.map((expense) => (
            <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>
        ));
    } */

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected = {filteredYear} onChangeFilter = {filterChangeHandler} />
                <ExpensesList item = {filteredExpenses}/>
                {/* {expensesContent} */}
                {/* {filteredExpenses.length === 0 && <p>No expenses found.</p> }
                {filteredExpenses.length > 0 && filteredExpenses.map((expense) => (
                    <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>
                )) } */}
                {/* {filteredExpenses.length === 0 ? <p>No expenses found.</p> : filteredExpenses.map((expense) => (
                    <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>
                ))} */}
                {/* <ExpenseItem title={props.item[0].title} amount={props.item[0].amount} date={props.item[0].date}/>
                <ExpenseItem title={props.item[1].title} amount={props.item[1].amount} date={props.item[1].date}/>
                <ExpenseItem title={props.item[2].title} amount={props.item[2].amount} date={props.item[2].date}/>
                <ExpenseItem title={props.item[3].title} amount={props.item[3].amount} date={props.item[3].date}/> */}
            </Card>

        </div>
        
    );
}


export default Expenses;