import React from "react";

const Options = ({ hidden }) => {
  return (
    <div className="options-column" >
      <div className="edit-column" onClick={() => {console.log(hidden)}}>Renomear</div>
      <hr/>
      <div className="del-column" >Excluir</div>
    </div>
  );
};

export default Options;
