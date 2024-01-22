import { useState, useEffect } from "react";
import "./App.css";
import InputSection from "./Components/InputSection/InputSection";
import OutputSection from "./Components/OutputSection/OutputSection";

function App() {
  const [data, setdata] = useState([]);
  const [inputValue, setInputValue] = useState(0);
  function changeHandler(newValue) {
    setInputValue(newValue);
  }

  useEffect(() => {
    const fetchdata = async () => {
      const url = `https://random-word-api.vercel.app/api?words=${inputValue}`;
      const responce = await fetch(url);
      const result = await responce.json();
      setdata(result.join(" "));
    };

    fetchdata();
  }, [inputValue]);

  return (
    <div>
      <div className="inputSection">
        <InputSection onChange={changeHandler} />
      </div>
      <div>
        <OutputSection data={data} />
      </div>
    </div>
  );
}

export default App;
