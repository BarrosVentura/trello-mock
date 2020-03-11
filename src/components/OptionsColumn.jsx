import React from "react";

const Options = ({ ref }) => {
  return (
    <div>
      <div onClick={() => {console.log(ref)}}>Editar</div>
      <div>Excluir</div>
    </div>
  );
};

export default Options;
