import React, { useRef, useEffect } from "react";

const List = () => {
  const listAvatarRef = useRef();
  const listTagRef = useRef();
  const listCardRef = useRef();
  useEffect(() => {
    listCardRef.current = document.querySelectorAll(".card");
    console.log(listCardRef.current);
    // listCardRef.current.forEach((item) => {
    //   item.avatar = item.querySelector("data-avatar").dataset.avatar;
    //   item.name = item.querySelector("data-avatar").innerText;
    //   item.tag = item.querySelector("data-tag").innerText;
    // });
  });

  return (
    <div className="container-list">
      <ul className="list">
        {/* {(listCardRef.current).map((e) => (
          <li className="user-item" key={e.avatar}>
            <div className="avatar-font">{e.avatar}</div>
            <p className="username">{e.name}</p>
          </li>
        ))} */}

        <li className="user-item">
          <div className="avatar-font">AV</div>
          <p className="username">Adson Ventura</p>
        </li>
        <li className="user-item">
          <div className="avatar-font">AV</div>
          <p className="username">Adson Ventura</p>
        </li>
      </ul>
      <ul className="list">
        <li className="tag-item">opa</li>
        <li className="tag-item">eta</li>
        <li className="tag-item">nois</li>
      </ul>
    </div>
  );
};

export default List;
