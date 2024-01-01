import { useState } from "react";
import Todo from "./Components/todo";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTodo = () => {
    if (title.trim() === "" || description.trim() === "") {
      console.log("Unable to add todo");
      return;
    }

    setTodos([...todos, { title, description }]);
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <h1>Todo</h1>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="Text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={addTodo}>Create Todo</button>
      </div>
      <div>
        <ul>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              title={todo.title}
              description={todo.description}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
