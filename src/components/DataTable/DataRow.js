import React from "react";

const DataRow = ({ el }) => {
  /* se recibe el parametro pasado por el padre y se destructura. en este caso el elemento y se colocan los valores en el JSX */
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
