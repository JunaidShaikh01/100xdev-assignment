import React, { useContext } from "react";
import styles from "./Button.module.css";
import colorContext from "../context/createContext";
export default function Button() {
  const { setColor } = useContext(colorContext);
  return (
    <div className={styles.buttons}>
      <button
        onClick={() => setColor("red")}
        className={styles.redBtn}
        style={{ color: "black", background: "red" }}
      >
        red
      </button>
      <button
        onClick={() => setColor("yellow")}
        className={styles.yellowBtn}
        style={{ color: "black", background: "yellow" }}
      >
        Yellow
      </button>
      <button
        onClick={() => setColor("black")}
        className={styles.blackBtn}
        style={{ color: "white", background: "black" }}
      >
        Black
      </button>
      <button
        onClick={() => setColor("purple")}
        className={styles.purpelBtn}
        style={{ color: "black", background: "purple" }}
      >
        Purpel
      </button>
      <button
        onClick={() => setColor("green")}
        className={styles.greenBtn}
        style={{ color: "black", background: "green" }}
      >
        Green
      </button>
      <button
        onClick={() => setColor("blue")}
        className={styles.blueBtn}
        style={{ color: "black", background: "blue" }}
      >
        Blue
      </button>
      <button
        onClick={() => setColor("white")}
        className={styles.defaultBtn}
        style={{ color: "black", background: "rgb(251, 86, 50)" }}
      >
        Default
      </button>
    </div>
  );
}
