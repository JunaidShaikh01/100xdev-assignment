import React from "react";
import styles from "./Profile.module.css";
export default function Profile() {
  return (
    <div>
      <div className={styles.photo}>
        <img
          src="https://pixabay.com/photos/girl-portrait-smile-hair-model-1344646/"
          alt="Error while loading the image"
          srcset=""
        />
      </div>
    </div>
  );
}
