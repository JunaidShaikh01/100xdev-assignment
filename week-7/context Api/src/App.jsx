import Count from "./Components/Count";
import ContextProvider from "./Context/ContextProvider";

function App() {
  return (
    <div>
      <ContextProvider>
        <Count />
      </ContextProvider>
    </div>
  );
}

export default App;
