import { useEffect, useState } from "react";
import "./App.css";
import UserInput from "./components/UserInput/UserInput";
import Cards from "./components/Cards/Cards";
import Button from "./components/Button/Button";

function App() {
  const [cards, setCards] = useState();
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/get");
        const data = await response.json();
        setCards(data.allCards);
        console.log(cards);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
    console.log("fetching .....");
  }, []);

  return (
    <div className="main">
      {showForm ? (
        <UserInput onStateChange={setCards} setShowForm={setShowForm} />
      ) : (
        <Button setShowForm={setShowForm} />
      )}

      <div className="cardOutput">
        {cards &&
          cards.map((card) => (
            <Cards
              setCards={setCards}
              key={card._id}
              id={card._id}
              name={card.name}
              description={card.description}
              interest={card.interest}
              linkdin={card.linkdin}
              twitter={card.twitter}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
