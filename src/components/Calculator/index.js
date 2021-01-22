import React from "react";

import Row from "./components/Row";

const elements = [
  ["DEL", "+/-", "%", "/"],
  ["7", "8", "9", "*"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  ["0", ",", "="],
];

const renderRows = () =>
  elements.map((e, i) => <Row rowElements={elements[i]} i={i} />);

const index = () => (
  <table>
    <tbody>{renderRows()}</tbody>
  </table>
);

export default index;
