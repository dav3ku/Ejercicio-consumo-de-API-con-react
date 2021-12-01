import React, { useState, useEffect } from "react";
import DataTable from "../DataTable/DataTable";
import getAllPeople from "../../services/people";

const MainApp = () => {
  const [datas, setDatas] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    /* Este useEffect solo se ejecuta cuando load cambia */
    if (load) {
      /* Si load es true hace la solicitud de a la API */
      getAllPeople().then((datos) => {
        const { results } = datos; /* destructuro la respuesta de la API */
        setDatas(results); /* colocalo los valores en datas */
      });
    }
    return () =>
      setDatas([]); /* Cuando desmonte el componente limpio mi variable datas */
  }, [load]);

  return (
    <>
      {load /* Se evalua la varia load */ ? (
        <>
          {/* Si load es true */}
          <DataTable datas={datas}></DataTable>
          {/* Monta componente y pasa los datos */}
          <button onClick={() => setLoad(false)}> Borrar </button>
          {/* Coloca un boton para limpiar */}
        </>
      ) : (
        <>
          {/* Si load es false */}
          <h3> Sin datos aún </h3>
          <button onClick={() => setLoad(true)}>Cargar Datos</button>
          {/* Muestra boton para cargar datos. */}
        </>
      )}
    </>
  );
};

export default MainApp;
