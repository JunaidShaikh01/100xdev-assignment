import { useState } from "react";
import "./App.css";
import Background from "./Compponents/backgound/Background";
import colorContext from "./Compponents/context/createContext";
function App() {
  const [color, setColor] = useState("");
  return (
    <div>
      <colorContext.Provider value={{setColor, color}}>
        <Background />
      </colorContext.Provider>
    </div>
  );
}

export default App;
