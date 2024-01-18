import React, { useContext } from "react";
import { countContext } from "../Context/CreateContext";

export default function Count() {
  const [count, setCount] = useContext(countContext);
  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Diccrement</button>
    </div>
  );
}
