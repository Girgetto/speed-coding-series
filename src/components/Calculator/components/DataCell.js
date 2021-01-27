import React from "react";

const DataCell = (rowElements, dispatch) =>
  rowElements.map((e, i) => (
    <td
      key={i}
      colSpan={e !== "=" ? 1 : 2}
      onClick={() => {
        dispatch(e);
      }}
    >
      {e}
    </td>
  ));

export default DataCell;
