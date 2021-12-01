import React, { useState, useEffect } from "react";
import DataTable from "../DataTable/DataTable";
import getAllPeople from "../../services/people";

const MainApp = () => {
  const [datas, setDatas] = useState([]);
  const [load, setLoad] = useState(false);

  const callApp = () => {
    setLoad(true);
  };

  const reset = () => {
    setLoad(false);
  };

  useEffect(() => {
    if (load) {
      getAllPeople().then((datos) => {
        const { results } = datos;
        setDatas(results);
      });
    } else {
      return () => setDatas([]);
    }
  }, [datas, load]);

  return (
    <>
      {load ? (
        <>
          <DataTable datas={datas}></DataTable>
          <button onClick={reset}> Borrar </button>
        </>
      ) : (
        <>
          <h5> Sin datos aún </h5>
          <button onClick={callApp}>Cargar Datos</button>
        </>
      )}
    </>
  );
};

export default MainApp;
