import React from "react";

import renderDataCell from "./DataCell";

const Row = ({ rowElements, i, dispatch }) => (
  <tr key={i}>{renderDataCell(rowElements, dispatch)}</tr>
);

export default Row;
