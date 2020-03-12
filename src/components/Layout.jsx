import React from "react";
import Dropdown from "../svg/Dropdown";

const Layout = ({ title, children }) => {
  return (
    <section className="layout">
      <h1 className="board-title">{title}</h1>
      <div className="search-actions">
        <input
          type="text"
          placeholder="Pesquisar"
          className="search"
          name=""
          id=""
        />
        <button type="button" className="filter">
          Filtro Avançado <Dropdown />
        </button>
      </div>
      <div></div>
      {children}
    </section>
  );
};

export default Layout;
