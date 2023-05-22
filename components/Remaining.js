import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import BudgetComponent from './Budget';
import CartValue from './CartValue'


const RemaininComponent = () => {
    const { expenses, Location } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += (item.quantity));
    }, 0);

     let budget = BudgetComponent;
    let shopings = CartValue;
    if(shopings < budget){
        alert("El presupuesto exede el monto de compra")
    }else{
        return totalExpenses;
    }
 

    return (
        <div className='alert alert-success'>
            <span>Remaining: {Location}{totalExpenses}</span>
        </div>
    );
};

export default RemaininComponent

/**
 * falta configurarlo para que reste el presupuesto con el saldo de compra
 * 
 */