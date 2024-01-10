import React, { useReducer } from 'react';
import Reducer from './Reducer';
import { Provider } from './AppContext';
import PropTypes from 'prop-types';

const initialState = {
  min: 0,
  max: 0,
  result: 0,
};

const AppProvider = (props) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <Provider value={{ state, dispatch }}>
      {props.children}
    </Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node,
};

export default AppProvider;
