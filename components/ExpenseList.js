import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);

    return (
        <table className='table'>
              <thead className="thead-light">
            <tr>
              <th scope="col">Departament</th>
              <th scope="col">Quantity</th>
              <th scope="col">Increce by 10</th>
              <th scope="col">Decrece by 10</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
            <tbody>
            {expenses.map((expense) => (
                <ExpenseItem id={expense.id} key={expense.id} name={expense.name} quantity={expense.quantity} />
            ))}
            </tbody>
        </table>
    );
};

export default ExpenseList;