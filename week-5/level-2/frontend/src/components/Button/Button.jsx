import React from "react";

export default function Button({ setShowForm }) {
  return (
    <div>
      <button onClick={() => setShowForm(true)}>Add Todo</button>
    </div>
  );
}
