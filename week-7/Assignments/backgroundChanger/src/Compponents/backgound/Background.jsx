import React, { useContext } from "react";
import Button from "../Button/Button";
import styels from "./Background.module.css";
import colorContext from "../context/createContext";

export default function Background() {
  const {color, setColor} = useContext(colorContext);

  return (
    <div className={styels.main} style={{ background: color }}>
      <div className={styels.buttonComponents}>
        <Button setColor={setColor} />
      </div>
    </div>
  );
}
