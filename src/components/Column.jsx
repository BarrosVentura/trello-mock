import React, { useRef } from "react";
// import OptionsColumn from "./OptionsColumn";

const Column = ({ title, children }) => {
  const titleRef = useRef();

  const handleClick = () => {};

  return (
    <div className="column">
      <div className="header">
        <h2 className="title" ref={titleRef}>
          {title}
        </h2>
        <div className="menu">
          <div className="hamburguer" onClick={handleClick}></div>
        </div>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default Column;
