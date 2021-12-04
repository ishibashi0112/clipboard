import React, { useState } from "react";

const Main = () => {
  const [tab, setTab] = useState();
  const handleClickTab = (e) => {
    console.log(e.target.innerHTML);
    e.target.innerHTML === "ピン留め" ? setTab("ピン留め") : setTab("ボード");
  };

  // document.addEventListener("copy", (e) => {
  //   console.log(e);
  // });

  return (
    <div className="h-screen w-screen border">
      <ul className="flex ">
        <li className="flex-1 text-center border">
          <button onClick={handleClickTab}>ピン留め</button>{" "}
        </li>
        <li className="flex-1 text-center border">
          <button onClick={handleClickTab}>ボード</button>{" "}
        </li>
      </ul>
      {tab === "ピン留め" ? (
        <div className="border">
          <input type="text" />
          <button>ボタン</button>
        </div>
      ) : (
        <div className="border">bbbb</div>
      )}
    </div>
  );
};

export default Main;
