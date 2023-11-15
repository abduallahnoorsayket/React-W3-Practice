import React from "react";
import { useState, useEffect, useRef } from "react";

function UseRef() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);
  const inputElement = useRef();

  useEffect(() => {
    count.current = count.current + 1;
  });
  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <input
        type="text"
        value={inputValue}
        ref={inputElement}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={focusInput}>Focus Input</button>
      <h1>Render Count: {count.current}</h1>
      <h1>input Count: {inputValue}</h1>
    </>
  );
}

export default UseRef;
