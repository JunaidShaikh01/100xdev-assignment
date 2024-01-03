/* eslint-disable react/prop-types */
// import React from "react";

export default function TodoList({ todovalue }) {
  return (
    <div>
      <ul>
        {todovalue &&
          todovalue.map((item) => (
            <li key={item.id}>
              <p>{item.titlValue}</p>
              <p>{item.descriptionValue}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
