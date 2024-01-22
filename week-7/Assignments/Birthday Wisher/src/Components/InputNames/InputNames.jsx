import React, { useState } from "react";

export default function InputNames({ onChnage }) {
  const [name, setName] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    onChnage(name);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={submitHandler}>Enter</button>
    </div>
  );
}
