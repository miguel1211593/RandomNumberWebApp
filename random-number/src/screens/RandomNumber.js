// RandomNumber.js
import React, { useContext, useState } from 'react';
import Input from './../components/Inputs.js';
import AppContext from './../context/AppContext';
import { submitAction } from './../context/Actions';
import './../styles/RandomNumber.css';
import './../styles/Inputs.css';

const RandomNumber = () => {
  const { state, dispatch } = useContext(AppContext);
  const { min, max, result } = state;

  // Estados locais para armazenar os valores temporariamente
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

    // Converte os valores para números antes de despachar a ação
    const parsedMin = parseInt(newMin);
    const parsedMax = parseInt(newMax);

    // Verifica se os valores são números válidos
    if (!isNaN(parsedMin) && !isNaN(parsedMax)) {
      dispatch(submitAction({ min: parsedMin, max: parsedMax }));
    } else {
      // Se os valores não são válidos, você pode lidar com isso aqui
      console.error('Por favor, insira números válidos');
    }
  };

  return (
    <div className='screen'>
      <form onSubmit={handleSubmit}>
        <label>
          Minimum:
          <Input
            className='inputMin'
            type='number'
            name='Min'
            value={newMin}
            onChange={handleMinChange}
          />
        </label>

        <label>
          Maximum:
          <Input
            className='inputMax'
            type='number'
            name='Max'
            value={newMax}
            onChange={handleMaxChange}
          />
        </label>

        <div>
          <input type='submit' value='Submit' />
        </div>

        <div>{result}</div>
      </form>
    </div>
  );
};

export default RandomNumber;
