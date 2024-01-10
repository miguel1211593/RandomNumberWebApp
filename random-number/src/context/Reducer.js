import { actionTypes } from './Actions';

const Reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SUBMIT:
      const { min, max } = action.payload;

      if (!isNaN(min) && !isNaN(max)) {
        const randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;

        return {
          ...state,
          min,
          max,
          result: randomInteger,
        };
      } else {
        return {
          ...state,
          result: 'Por favor, insira números válidos',
        };
      }

    default:
      return state;
  }
};

export default Reducer;
