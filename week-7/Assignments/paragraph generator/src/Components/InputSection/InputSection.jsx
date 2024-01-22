import React from "react";
import styles from "./InputSection.module.css";
import { useState } from "react";
export default function InputSection({ onChange }) {
  const [input, setInput] = useState("");
  function submitHandler(e) {
    e.preventDefault();
    const inputValue = Number(input);

    onChange(inputValue);
  }
  return (
    <div>
      <h1>Paragraph Gererator</h1>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={submitHandler}>Generate</button>
    </div>
  );
}
