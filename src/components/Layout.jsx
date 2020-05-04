import React, { useRef } from "react";
import Dropdown from "../svg/Dropdown";
import List from "./List";

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
      <List/>
      {children}
    </section>
  );
};

export default Layout;
