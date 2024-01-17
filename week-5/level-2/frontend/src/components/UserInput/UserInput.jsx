import React from "react";
import { useState } from "react";

import styles from "./UserInput.module.css";
export default function UserInput({ onStateChange, setShowForm }) {
  // const [updateState, setUpdateState] = useState(0);
  function submitHadler(e) {
    e.preventDefault();
    const { name, description, interest, linkdin, twitter } = e.target;

    fetch("http://localhost:3000/post", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: name.value,
        description: description.value,
        interest: interest.value.split(","),
        linkdin: linkdin.value,
        twitter: twitter.value,
      }),
    })
      .then(function (response) {
        return response.json();
      })
      .then((result) => {
        console.log("result", result);
        onStateChange((prev) => [...prev, result.createdCard]);
      });

    setShowForm(false);
  }
  return (
    <form className={styles.form} onSubmit={submitHadler}>
      <div className={styles.formInputs}>
        <label htmlFor="name">
          Name:
          <input type="text" name="name" />
        </label>

        <label htmlFor="description">
          Description:
          <textarea name="description" />
        </label>

        <label htmlFor="interest">
          Interests:
          <input
            type="text"
            name="interest"
            placeholder="Separate interest by comma"
          />
        </label>

        <label htmlFor="linkedin">
          Linkdin:
          <input type="text" name="linkdin" />
        </label>

        <label htmlFor="twitter">
          Twitter:
          <input type="text" name="twitter" />
        </label>

        <button>Add Card</button>
      </div>
    </form>
  );
}
