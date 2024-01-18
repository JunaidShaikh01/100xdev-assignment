import React, { useState } from "react";
import { countContext } from "./CreateContext";

export default function ContextProvider(props) {
  const [count, setCount] = useState(0);
  //   const contextValue = { count, setCount };
  return (
    <countContext.Provider value={[count, setCount]}>
      {props.children}
    </countContext.Provider>
  );
}
