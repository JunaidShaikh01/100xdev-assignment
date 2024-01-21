import React from "react";
import styles from "./Card.module.css";
import Footer from "../Footer/Footer";
import Profile from "../Profile/Profile";
export default function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.headerColor}></div>
      <div>
        <Profile />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
