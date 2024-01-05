/* eslint-disable react/prop-types */
// import React from "react";
import { useEffect, useState } from "react";

export default function TodoList({ update }) {
  // console.log("TodoList.jsx increaemnt Value :", update);
  const [todosArr, setTodosArr] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((response) => response.json())
      .then((data) => {
        setTodosArr(data.todos);
      });
  }, [update, todosArr]);

  return (
    <div>
      <ul>
        {todosArr &&
          todosArr.map((item) => (
            <div key={item._id}>
              <li key={item.id}>
                <p>{item.title}</p>
                <p>{item.description}</p>
                <button>
                  {item.completed === true ? "completed" : "Mark as done"}
                </button>
              </li>
            </div>
          ))}
      </ul>
    </div>
  );
}
