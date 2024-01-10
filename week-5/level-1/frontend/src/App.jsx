// import { BusinessCard } from "./components/BusinessCard.";
import "./App.css";
import Businesscard from "./components/Businesscard";
// import BusinessCard from "./Components/BusinessCard";

function App() {
  return (
    <>
      {/* <BusinessCard
        name={"John"}
        description={"Web Developer"}
        interest={["Book reading", "Criket", "Coding"]}
      /> */}
      <Businesscard
        name={"John"}
        description={"Web Developer"}
        interest={["Book reading", "Criket", "Coding"]}
      />
    </>
  );
}

export default App;
