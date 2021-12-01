import React from "react";
import DataRow from "./DataRow";

const DataTable = ({ datas }) => {
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
          {datas.map((elem) => (
            <DataRow key={elem.name} el={elem}></DataRow>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default DataTable;
