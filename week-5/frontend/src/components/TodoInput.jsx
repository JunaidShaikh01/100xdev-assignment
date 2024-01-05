// import React from "react";

import { useRef, useState } from "react";

// eslint-disable-next-line react/prop-types
export default function TodoInput({ onSateChange }) {
  const [updateState, setUpdateSate] = useState(0);
  // const [todo, setTodo] = useState([]);
  const titleRef = useRef("");
  const descriptionRef = useRef("");

  function submitHandler(e) {
    e.preventDefault();
    const titlValue = titleRef.current.value;
    const descriptionValue = descriptionRef.current.value;

    if (titlValue.trim() === "" || descriptionValue.trim() === "") {
      console.log("Invalid Input values");
      return;
    }

    // const id = Math.floor(Math.random() * 10000);

    // setTodo([...todo, { id, titlValue, descriptionValue }]);
    // setTodo((prevTodo) => [...prevTodo, { id, titlValue, descriptionValue }]);
    // onSateChange([...todo, { id, titlValue, descriptionValue }]);

    fetch("http://localhost:3000/todo", {
      method: "POST",
      body: JSON.stringify({
        title: titlValue,
        description: descriptionValue,
      }),
      headers: {
        "Content-type": "application/json",
      },
    }).then(async function (res) {
      await res.json();
      alert("Todo added");
    });

    titleRef.current.value = "";
    descriptionRef.current.value = "";

    setUpdateSate(updateState + 1);
    onSateChange("Todoinput Increament Value:" + updateState);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Title"
        ref={titleRef}
        onChange={(e) => e.target.value}
      />
      <input
        type="text"
        placeholder="Enter Description"
        ref={descriptionRef}
        onChange={(e) => e.target.value}
      />
      <button onClick={submitHandler}>Add Todo</button>
    </div>
  );
}
