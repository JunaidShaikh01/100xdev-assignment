// import { useState } from 'react'

import { useState } from "react";
import "./App.css";
import todo from "./Components/todo";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todo, setTodo] = useState([]);

  function getValue(event) {
    setInputValue(event.target.value);
  }

  function handleValue() {}
  return (
    <div>
    <div>

      <input id="inputValue" value={inputValue} onChange={getValue} />
      <button onClick={handleValue}></button>
    </div>
    {todo.map((element , index)=>{
      return (
        <todo key={index} name/>
      )
    })}
    </div>
    
  );
}

export default App;
