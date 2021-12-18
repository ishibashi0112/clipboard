import React, { useRef, useState } from "react";

const Main = () => {
  const [tab, setTab] = useState();
  const [text, setText] = useState(null);
  const inputRef = useRef(null);

  const handleClickTab = (e) => {
    console.log(e.target.innerHTML);
    e.target.innerHTML === "ピン留め" ? setTab("ピン留め") : setTab("ボード");
  };

  const handleChange = (e) => {
    setText(e.target.value);
    console.log(text);
  };

  const handleClickButton = async (e) => {
    const value = inputRef.current.value;
    const res = await fetch("/api/create_text", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text,
      }),
    });
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
        <div className="h-full border">
          <div>
            <input
              className="border"
              type="text"
              value={text}
              onChange={handleChange}
              ref={inputRef}
            />
            <button className="border" onClick={handleClickButton}>
              追加
            </button>
          </div>
          <div></div>
        </div>
      ) : (
        <div className="border">bbbb</div>
      )}
    </div>
  );
};

export default Main;
