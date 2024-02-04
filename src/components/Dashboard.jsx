import React, { useContext } from "react";
import { AppContext } from "..";

export default function Dashboard() {
  const { state } = useContext(AppContext);
  const { x, y } = state;

  return (
    <h3>
      {x} + {y} = {Number(x) + Number(y)}
    </h3>
  );
}
