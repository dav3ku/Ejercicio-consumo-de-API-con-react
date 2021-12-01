import React from "react";
import DataRow from "./DataRow";

const DataTable = ({ datas }) => {
  /* se recibe el parametro pasado por el padre y se destructura. */
  return (
    <>
      <h3>Datos Obtenidos</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Genero</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((elem /* se realiza un map al arreglo */) => (
            <DataRow
              key={elem.name}
              el={elem}
            ></DataRow> /* se llama al componente DataRow con cada elemento del arreglo datas y se pasan los datos.*/
          ))}
        </tbody>
      </table>
    </>
  );
};

export default DataTable;
