import React, { useState, useEffect } from "react";
import DataTable from "../DataTable/DataTable";
import getAllPeople from "../../services/people";

const MainApp = () => {
  const [datas, setDatas] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (load) {
      getAllPeople().then((datos) => {
        const { results } = datos;
        setDatas(results);
      });
    } else {
      return () => setDatas([]);
    }
  }, [load]);

  return (
    <>
      {load ? (
        <>
          <DataTable datas={datas}></DataTable>
          <button onClick={() => setLoad(false)}> Borrar </button>
        </>
      ) : (
        <>
          <h3> Sin datos aún </h3>
          <button onClick={() => setLoad(true)}>Cargar Datos</button>
        </>
      )}
    </>
  );
};

export default MainApp;
