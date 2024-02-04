import React, { useContext } from 'react';
import { AppContext } from './AppContext.jsx';

export default function Slider(props) {
  const { label, id, legend } = props;
  const { state, dispatch } = useContext(AppContext);

  function handleChange(e) {
    dispatch({
      type: `SET_${label}`,
      [id]: e.target.value,
    });
  }

  return (
    <fieldset>
      <legend>{legend}</legend>
      <div
        style={{
          display: "flex",
        }}
      >
        <label htmlFor="x">{label}</label>
        <input
          style={{
            width: "100%",
          }}
          id={id}
          type="range"
          min={0}
          max={50}
          onChange={handleChange}
          value={state[id]}
        />
      </div>
      <strong style={{ display: "block", textAlign: "center" }}>
        {state[id]}
      </strong>
    </fieldset>
  );
}
