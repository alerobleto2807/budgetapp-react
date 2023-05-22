import { MdAdd } from "react-icons/md";
import '../index.css'
import ItemSelected from "../components/ItemSelected"; 
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';



function ButtonPlos() {
    const shoot = () => {
      alert("Added in 10 Done");

          let item = ItemSelected
        let  cuantyAdd;
        if(cuantyAdd === item){
            item = cuantyAdd + 10;
        } 
    }

    return (
      <button className="btn btn-success" onClick={shoot}><MdAdd/></button>
    );
  }

export default ButtonPlos;

/**
 * falta configurarlo para que reste el presupuesto con el saldo de compra
 * 
 */