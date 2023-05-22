import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../App.css'

const Location = () => {
  const {dispatch } = useContext(AppContext);

    const changeLocation = (val)=>{
            dispatch({
                type: 'CHG_LOCATION',
                payload: val,
            })
    }
    

  return (
        <div className='alert alert-info color-selector'> {
      <select name="Location" id="Location" onChange={event=>changeLocation(event.target.value)}>
      <option default>Currency("£ Pound")</option>
        <option value="$">($)Dollar</option>
        <option value="£">(£)Pound</option>
        <option value="€">(€)Euro</option>
        <option value="₹">(₹)Ruppe</option>
      </select>	
      }	
    </div>
    );
};

export default Location;