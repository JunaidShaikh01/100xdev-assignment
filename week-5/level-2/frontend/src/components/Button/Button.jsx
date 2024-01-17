import React from "react";
import styles from "./Button.module.css";
export default function Button({ setShowForm }) {
  return (
    <div className={styles.buttonParent}>
      <button className={styles.button} onClick={() => setShowForm(true)}>
        Add Cards
      </button>
    </div>
  );
}
