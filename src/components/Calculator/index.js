import React, { useReducer } from "react";

import Row from "./components/Row";
import { calculatorsButtons, initialState, reducer } from "./utils";

const renderRows = (dispatch) =>
  calculatorsButtons.map((e, i) => (
    <Row rowElements={calculatorsButtons[i]} key={i} dispatch={dispatch} />
  ));

const Index = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

  return (
    <table>
      <tbody>{renderRows(dispatch)}</tbody>
    </table>
  );
};

export default Index;
