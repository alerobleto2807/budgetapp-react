import { CiCircleMinus } from "react-icons/ci";
import '../index.css'


function ButtonMinus() {
    const shoot = () => {
      alert("Reduce Done");
    }
  
    return (
        <button className="btn btn-danger" onClick={shoot}><CiCircleMinus/></button>
    );
  }

export default ButtonMinus;

/**
 * falta configurarlo para que reste el presupuesto con el saldo de compra
 * 
 */