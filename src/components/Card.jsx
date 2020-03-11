import React, { useRef, useEffect } from "react";

const Card = ({ title, tag, name, avatar }) => {
  const newAvatar = name[0] + name[name.search(" ") + 1];
  let columns;
  const columnsRef = useRef();
  useEffect(() => {
    columns.current = document.querySelectorAll(".column");
  });

  const myRef = useRef(null);
  let card;

  const move = r => {
    card.style.left = r.clientX - card.offsetWidth / 2 + "px";
    card.style.top = r.clientY - card.offsetHeight / 2 + "px";
  };

  const goOver = event => {
    card = myRef.current;
    card.style.position = "absolute";
    card.style.left = event.pageX - card.offsetWidth / 2 + "px";
    card.style.top = event.pageY - card.offsetHeight / 2 + "px";
    card.addEventListener("mousemove", move);
  };

  const stopOver = () => {
    card.removeEventListener("mousemove", move);
    const columnsArr = Array.from(columns.current);
    let min = columnsArr.reduce((acc, cur) => {
      if (acc) {
        Math.abs(card.offsetLeft / cur.offsetLeft - 1) >
        Math.abs(card.offsetLeft / acc.offsetLeft - 1)
          ? acc()
          : (acc = cur);
      } else {
        acc = cur;
      }
      return acc;
    });
    min.querySelector(".content").append(card);
    card.style.position = "static";
  };

  return (
    <div className="card" ref={myRef} onMouseDown={goOver} onMouseUp={stopOver}>
      <div className="content">
        <h4 className="title">{title}</h4>
        <div className="helpers">
          <small className="tag">{tag}</small>
          <div className="avatar">
            {avatar ? (
              <img
                src={avatar}
                alt={`Avatar do usuário ${name}`}
                className="avatar-img"
              />
            ) : (
              <div className="avatar-font">{newAvatar}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
