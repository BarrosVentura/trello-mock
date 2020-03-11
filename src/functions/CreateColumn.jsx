import React, { useState, useRef } from "react";
import Column from "../components/Column";
import Layout from "../components/Layout";

const CreateColumn = () => {
  const [columns, setColumns] = useState([]);

  const newCol = useRef();

  const createColumn = (e) =>{
    setColumns([...columns, { value: newCol.current.value }]);
    e.target.value = "";
  }

  return (
    <Layout title="Título do Quadro">
      {columns.map(e => (
        <Column title={e.value} key={e.value}></Column>
      ))}
      <input
        type="text"
        id="newColumn"
        placeholder="+ Coluna"
        className="new-column"
        ref={newCol}
        onKeyPress={e => {
          e.key === "Enter"
            ? createColumn(e)
            : setColumns(columns);
        }}
      />
    </Layout>
  );
};

export default CreateColumn;
