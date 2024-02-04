import React, { useReducer } from 'react';
import { AppContext } from './AppContext.jsx';
import Dashboard from './Dashboard.jsx';
import Slider from './Slider.jsx';
import reducer from '../reducer';

const { Provider } = AppContext;

export default function App() {
  const initialState = { x: 0, y: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);
  const sharedState = {
    state,
    dispatch,
  };

  return (
    <Provider value={sharedState}>
      <h1>React Redux without Redux!</h1>
      <h2>useReducer, useContext and createContext</h2>
      <Dashboard />
      <Slider id="x" label="X" legend="First Operand" />
      <Slider id="y" label="Y" legend="Second Operand" />
    </Provider>
  );
}
