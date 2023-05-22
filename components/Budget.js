import '../components/Location'
import React, { useContext } from 'react';

const BudgetComponent = () => {

   
    return (
        <div className='alert alert-secondary'>
            <span>
                <input placeholder="Budget:£" id='budget'></input>
            </span>
        </div>
    );
};

export default BudgetComponent;

/**
 * falta configurarlo para que reste el presupuesto con el saldo de compra
 * 
 */