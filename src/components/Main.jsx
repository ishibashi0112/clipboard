import React, { useState } from "react";

const Main = () => {
  const [tab, setTab] = useState();
  const handleClickTab = (e) => {
    console.log(e.target.innerHTML);
  };
  return (
    <div className="h-screen w-screen border">
      <ul className="flex">
        <li className="flex-1 text-center border">
          <button onClick={handleClickTab}>ピン留め</button>{" "}
        </li>
        <li className="flex-1 text-center border">
          <button onClick={handleClickTab}>ボード</button>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Main;
