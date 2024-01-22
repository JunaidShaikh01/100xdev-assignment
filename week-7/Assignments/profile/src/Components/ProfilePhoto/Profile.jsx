import React from "react";
import styles from "./Profile.module.css";
import profilePhoto from "../../assets/ProfilePhoto.jpg";
export default function Profile() {
  return (
    <div className={styles.profile}>
      <div className={styles.photo}>
        <img src={profilePhoto} alt="Error while loading the image" srcset="" />
      </div>
      <div className={styles.content}>
        <div className={styles.mainContent}>
          <h3>Rita Correia</h3>
          <p>32</p>
        </div>
        <h3 className={styles.city}>London</h3>
      </div>
    </div>
  );
}
