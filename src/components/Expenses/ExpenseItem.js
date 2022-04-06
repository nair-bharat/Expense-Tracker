import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
// import { useState } from 'react';

const ExpenseItem = (props) => {

    /* const [title, setTitle] = useState(props.title);
    console.log("This is just to check how many times useState is executed"); */

    /* const clickHandler = () => {
        
        setTitle('New Item');
        console.log(title);
    } */
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>
                    ${props.amount}</div>
            </div>
            {/* <button onClick={clickHandler}>Change Title</button> */}
            
        </Card>
    );
}

export default ExpenseItem;