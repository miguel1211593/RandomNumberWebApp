// RandomNumber.js
import React, { useContext, useState } from 'react';
import Input from './../components/Inputs.js';
import AppContext from './../context/AppContext';
import { submitAction } from './../context/Actions';
import './../styles/RandomNumber.css';
import './../styles/Components.css';

const RandomNumber = () => {
  const { state, dispatch } = useContext(AppContext);
  const { min, max, result } = state;

  const [newMin, setNewMin] = useState('');
  const [newMax, setNewMax] = useState('');

  const handleMinChange = (e) => {
    setNewMin(e.target.value);
  };

  const handleMaxChange = (e) => {
    setNewMax(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const parsedMin = parseInt(newMin);
    const parsedMax = parseInt(newMax);

    if (!isNaN(parsedMin) && !isNaN(parsedMax)) {
      dispatch(submitAction({ min: parsedMin, max: parsedMax }));
    } else {
      console.error('Por favor, insira números válidos');
    }
  };

  return (
    <div className='screen'>
      <div className='text'>
        Number Generator
      </div>
      <div className='inputs-container'>
        <form onSubmit={handleSubmit}>
          <Input
            placeHolder='Minimum...'          
            className='inputMin'
            type='number'
            name='Min'
            value={newMin}
            onChange={handleMinChange}
          />
          <Input
            placeHolder='Maximum...'          
            className='inputMax'
            type='number'
            name='Max'
            value={newMax}
            onChange={handleMaxChange}
          />
      
          <div>
            <input type='submit' className='submit' value='Submit' />
          </div>
        </form>
        </div>
          <div className='result'>{result}</div>
    </div>
  );
};

export default RandomNumber;
