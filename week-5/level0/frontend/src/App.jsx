// import React from "react";
import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function App() {
  const [stateChange, setStateChange] = useState("");

  const handleSateChange = (newState) => {
    setStateChange(newState);
  };
  console.log("App. jsx Increament Value :", stateChange);
  return (
    <div>
      <h1>Todo App</h1>
      <TodoInput onSateChange={handleSateChange} />
      <TodoList todovalue={stateChange} />
    </div>
  );
}
