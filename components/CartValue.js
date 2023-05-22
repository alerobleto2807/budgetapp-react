
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import ItemSelected from './ItemSelected';
const CartValue = () => {
    
    const { expenses, Location } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += (item.unitprice * item.quantity));
    }, 0);

    return (
        <div className='alert alert-primary'>
            <span>Spent so far: {Location}{totalExpenses}</span>
        </div>
    );
};
export default CartValue;