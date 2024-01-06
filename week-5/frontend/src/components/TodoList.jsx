/* eslint-disable react/prop-types */
// import React from "react";
import { useEffect, useState } from "react";

export default function TodoList({ todovalue }) {
  console.log("TodoList.jsx increaemnt Value :", todovalue);
  const [todosArr, setTodosArr] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((response) => response.json())
      .then((data) => {
        setTodosArr(data.todos);
      });

    console.log("fetching ......");
  }, [todovalue]);

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
