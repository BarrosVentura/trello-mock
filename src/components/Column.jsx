import React, { useRef, useState } from "react";
import OptionsColumn from "./OptionsColumn";

const Column = ({ title, children }) => {
  const titleRef = useRef();
  const [options, setOptions] = useState(false);

  const handleClick = () => {
    setOptions((!options));
  };

  return (
    <div className="column">
      {options ? <OptionsColumn /> : ""}
      <div className="header">
        <h2 className="title" ref={titleRef}>
          {title}
        </h2>
        <div className="menu"  onClick={handleClick}>
          <div className="hamburguer"></div>
        </div>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default Column;
