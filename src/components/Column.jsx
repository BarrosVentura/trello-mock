import React, { useRef, useState, useEffect } from "react";
import CreateCard from "../functions/CreateCard";

const Column = ({ title, children }) => {
  const titleRef = useRef();
  const columnRef = useRef();
  const [options, setOptions] = useState(false);
  const [showing, setShowing] = useState(true);
  const [rename, setRename] = useState(true);
  const [titleState, setTitleState] = useState(title);

  const handleClick = () => {
    setOptions(!options);
  };
  useEffect(() => {
    const event = () => {
      setOptions(!options);
      window.removeEventListener("click", event);
    };
    if (options) {
      window.addEventListener("click", event);
    }
  });

  const renameOption = () => {
    setRename(!rename);
  };

  const renameColumn = e => {
    setTitleState(e.currentTarget.value);
    // title = e.currentTarget.value
    renameOption();
  };

  const deleteOption = () => {
    setShowing(!showing);
  };

  const Options = () => {
    const menu = useRef();

    return (
      <div className="options-column" ref={menu}>
        <div
          className="edit-column"
          onClick={() => {
            renameOption();
          }}
        >
          Renomear
        </div>
        <hr />
        <div
          className="del-column"
          onClick={() => {
            deleteOption();
          }}
        >
          Excluir
        </div>
      </div>
    );
  };

  return showing ? (
    <div className="column" ref={columnRef}>
     
      <div className="header">
        {rename ? (
          <h2 className="title" ref={titleRef}>
            {titleState}
          </h2>
        ) : (
          <input
            type="text"
            name="renameColumn"
            id="renameColumn"
            placeholder="Novo nome"
            onKeyPress={e => {
              e.key === "Enter" ? renameColumn(e) : console.log();
            }}
          />
        )}

        <div className="menu" onClick={handleClick}>
          <div className="hamburguer"></div>
          <div className="hamburguer"></div>
          <div className="hamburguer"></div>
        </div>

        {options ? <Options /> : ""}
      </div>
      <CreateCard />
    </div>
  ) : (
    ""
  );
};

export default Column;
