import { useState } from "react";
import "./App.css";
import InputNames from "./Components/InputNames/InputNames";
import Whishes from "./Components/OutputWhishes/Whishes";

function App() {
  const [input, setInput] = useState("");
  const changeHandler = (newValue) => {
    setInput(newValue);
  };

  return (
    <div>
      <InputNames onChnage={changeHandler} />
      <Whishes input={input} />
    </div>
  );
}

export default App;
