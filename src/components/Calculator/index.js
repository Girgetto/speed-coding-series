import React, { useReducer } from "react";

import Row from "./components/Row";
import { calculatorsButtons, initialState, reducer } from "./utils";
import "./index.css";

const renderRows = (dispatch) =>
  calculatorsButtons.map((e, i) => (
    <Row rowElements={calculatorsButtons[i]} key={i} dispatch={dispatch} />
  ));

const renderHeaderRow = (state) => (
  <tr>
    <th colSpan="4">
      <p className="expression">
        {state.expression !== "" ? state.expression : "0"}
      </p>
      <p className="result">{state.result}</p>
    </th>
  </tr>
);

const Index = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <table cellSpacing="0" cellPadding="0">
      <thead>{renderHeaderRow(state)}</thead>
      <tbody>{renderRows(dispatch)}</tbody>
    </table>
  );
};

export default Index;
