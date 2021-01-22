import React from "react";

const renderDataCell = (rowElements) =>
  rowElements.map((e, i) => (
    <td key={i} onClick={() => console.log(e)}>
      {e}
    </td>
  ));

const dataCell = ({ rowElements, i }) => {
  return <tr key={i}>{renderDataCell(rowElements)}</tr>;
};

export default dataCell;
