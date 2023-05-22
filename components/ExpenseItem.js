 import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { CiCircleRemove } from "react-icons/ci";
import '../components/ButtonPlos'
import ButtonPlos from '../components/ButtonPlos';
import ButtonMenos from '../components/ButtonMenos';


const ExpenseItem = (props) => {
    const { dispatch, Location} = useContext(AppContext);

    const handleDeleteItem = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'DELETE_ITEM',
            payload: item,
        });
    };


    return (
        <tr>
        <td>{props.name}</td>
        <td>{Location}{props.quantity}</td>
        <td><ButtonPlos /></td>
        <td><ButtonMenos /></td>
        <td><CiCircleRemove size='2.2em' color="red" onClick={handleDeleteItem}></CiCircleRemove></td>
        </tr>
    );
};

export default ExpenseItem; 

/**
 * este componente se encarga de eliminar el componente y todo sus datos haciendo click
 * y tambien trae por import al snippet de codigo que ejecuta la accion "DELETE_ITEM"
 */

// tambien es donde manejamos los elemtos de la tabla
// el tips para poner el valor de la moneda es poner el elemento location antes de los props que mustran el valor de la cantidad
