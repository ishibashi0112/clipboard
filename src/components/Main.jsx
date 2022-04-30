import { ActionIcon, Button, Tabs, TextInput } from "@mantine/core";
import { useClipboard, useInterval } from "@mantine/hooks";
import React, { useState, useEffect, useCallback } from "react";
import { Cross1Icon } from "@radix-ui/react-icons";

export const Main = () => {
  const [historyTexts, setHistoryTexts] = useState([]);
  const [saveTexts, setSaveTexts] = useState([]);
  const [inputText, setInputText] = useState("");
  const clipboard = useClipboard({ timeout: 500 });

  const handleClickClear = useCallback(() => {
    setHistoryTexts([]);
  }, []);

  const handleOnChange = useCallback((e) => {
    setInputText(e.target.value);
  }, []);

  const handleKeyDown = useCallback((e) => {
    const value = e.target.value;
    if (e.keyCode === 13 && value) {
      setSaveTexts((prevArray) => [value, ...prevArray]);
      setInputText("");
    }
  }, []);

  const handleOnBlur = useCallback(async (e) => {
    const value = e.target.value;
    if (value) {
      setSaveTexts((prevArray) => [value, ...prevArray]);
      setInputText("");
    }
  }, []);

  const handleClickSaveText = useCallback((e) => {
    console.log(e.target.innerText);
    clipboard.copy(e.target.innerText);
  }, []);

  const handleClickDelete = useCallback(() => {
    console.log("削除");
  }, []);

  const clipboardCheak = async () => {
    const clipboardText = await navigator.clipboard.readText();
  };

  // const interval = useInterval(clipboardCheak, 1000);

  // useEffect(async () => {
  //   interval.start()
  // }, []);

  useEffect(() => {
    setInterval(async () => {
      const clipboardText = await navigator.clipboard.readText();
      if (historyTexts.length === 0) {
        console.log(0);
        setHistoryTexts([clipboardText]);
      }
    }, 1000);
  }, []);

  return (
    <div className="h-[calc(100vh-44px)] w-screen ">
      <div className="w-96 h-[90vh] mx-auto border p-2 rounded-md shadow-md">
        <Tabs grow>
          <Tabs.Tab label="履歴">
            <Button onClick={handleClickClear} variant="subtle" compact>
              clear
            </Button>

            <ul>
              {historyTexts.map((text, i) => (
                <li
                  className="w-full p-2 transition hover:transition hover:bg-gray-100"
                  key={i}
                >
                  {text}
                </li>
              ))}
            </ul>
          </Tabs.Tab>
          <Tabs.Tab label="ピン留め">
            <TextInput
              placeholder="add clip"
              variant="filled"
              value={inputText}
              onChange={handleOnChange}
              onBlur={handleOnBlur}
              onKeyDown={handleKeyDown}
            />
            <ul className="pt-2">
              {saveTexts.map((text, i) => (
                <li
                  className="flex justify-between w-full p-2 transition hover:transition hover:bg-gray-100"
                  key={i}
                  onClick={handleClickSaveText}
                >
                  <p>{text}</p>

                  <ActionIcon className="z-20" onClick={handleClickDelete}>
                    <Cross1Icon />
                  </ActionIcon>
                </li>
              ))}
            </ul>
          </Tabs.Tab>
          <Tabs.Tab label="その他"></Tabs.Tab>
        </Tabs>
      </div>
    </div>
  );
};
