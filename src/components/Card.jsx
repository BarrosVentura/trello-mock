import React, { useRef, useState, useEffect } from "react";
import List from "./List";

const Card = ({ title, tag, name, avatar }) => {
  const nameTreated = name.trim();
  const newAvatar = nameTreated.includes(" ")
    ? nameTreated[0] + nameTreated[nameTreated.search(" ") + 1]
    : nameTreated[0];
  const columnsRef = useRef();
  const [showing, setShowing] = useState(true);
  useEffect(() => {
    columnsRef.current = document.querySelectorAll(".column");
  });

  const myRef = useRef(null);
  let card;

  // const addSelfToList

  const blocker = document.createElement("div");
  blocker.classList.add("blocker");

  const move = r => {
    card.style.left = r.pageX - card.offsetWidth / 2 + "px";
    card.style.top = r.pageY - card.offsetHeight / 2 + "px";
  };

  const goOver = event => {
    document.querySelector("body").appendChild(blocker);
    card = myRef.current;
    card.classList.toggle("floating-card");
    card.style.left = event.pageX - card.offsetWidth / 2 + "px";
    card.style.top = event.pageY - card.offsetHeight / 2 + "px";
    card.addEventListener("mousemove", move);
  };

  const multiTask = event => {
    if (!event.target.classList.contains("overlay-delete")) {
      goOver(event);
    } else {
      deleteOption();
    }
  };

  const stopOver = () => {
    document.querySelector("body").removeChild(blocker);
    card.removeEventListener("mousemove", move);
    const columnsArr = Array.from(columnsRef.current);
    let min = columnsArr.reduce((acc, cur) => {
      return (Math.abs(cur.offsetLeft - card.offsetLeft) < Math.abs(acc.offsetLeft - card.offsetLeft) ? cur : acc);
    });
    min.querySelector(".content").append(card);
    min.querySelector(".content").append(min.querySelector("#newCard"));
    card.classList.toggle("floating-card");
  };

  const deleteOption = () => {
    setShowing(!showing);
  };

  return showing ? (
    <div
      className="card"
      ref={myRef}
      onMouseDown={multiTask}
      onMouseUp={stopOver}
    >
      <div className="header-card">
        <h4 className="title">{title}</h4>
        <span className="overlay-delete">X</span>
      </div>
      <div className="helpers">
        <small className="tag" data-tag>{tag}</small>
        <div className="avatar">
          {avatar ? (
            <img
              src={avatar}
              alt={`Avatar do usuário ${name}`}
              className="avatar-img"
            />
          ) : (
            <div className="avatar-font" data-avatar={name}>{newAvatar}</div>
          )}
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Card;
