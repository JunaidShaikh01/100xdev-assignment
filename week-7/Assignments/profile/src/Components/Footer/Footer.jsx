import React from "react";
import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <div className={styles.footerContent}>
      <div className={styles.Followers}>
        <h3>80 K</h3>
        <p>Followers</p>
      </div>
      <div className={styles.likes}>
        <h3>803 K</h3>
        <p>Likes</p>
      </div>
      <div className={styles.photos}>
        <h3>1.4 K</h3>
        <p>Photos</p>
      </div>
    </div>
  );
}
