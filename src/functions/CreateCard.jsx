import React, { useState, useRef } from "react";
import Card from "../components/Card";

const CreateCard = () => {
  const [cards, setCards] = useState([]);
  const [form, setForm] = useState(false);

  const newCard = useRef();
  const refName = useRef();
  const refTag = useRef();
  const refUser = useRef();

  const createCards = e => {
    setCards([...cards, { title: refName.current.value, tag: refTag.current.value, user: refUser.current.value }]);
    refName.current.value = "";
    refTag.current.value = "";
    refUser.current.value = "";
    setForm(!form);
  };

  const formCard = () => {
    return (
      <div className="formCard">
        <div className="content">
          <input
            type="text"
            name="taskName"
            id="taskName"
            placeholder="Tarefa"
            className="title"
            ref={refName}
          />
          <input
            type="text"
            name="taskTag"
            id="taskTag"
            placeholder="Tag"
            className="tag"
            ref={refTag}
          />
          <input
            type="text"
            name="taskUser"
            id="taskUser"
            placeholder="Usuário"
            className="avatar"
            ref={refUser}
          />
          <button type="submit" onClick={e => createCards(e)}>Adicionar</button>
        </div>
      </div>
    );
  };


  return (
    <div className="content">
      <Card title="Desenvolvendo um trello" tag="Front-end" name="Adson Ventura"/>
      {cards.map(e => (
        <Card key={e.title} title={e.title} tag={e.tag} name={e.user}></Card>
      ))}
      <button
        type="text"
        id="newCard"
        className="new-card"
        ref={newCard}
        onClick={() => setForm(!form)}
      >
        + TAREFA
      </button>
      {form ? formCard() : ""}
    </div>
  );
};

export default CreateCard;
