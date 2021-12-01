import React from "react";

const DataRow = ({ el }) => {
  return (
    <>
      <tr>
        <td>{el.name}</td>
        <td>{el.gender}</td>
      </tr>
    </>
  );
};

export default DataRow;
