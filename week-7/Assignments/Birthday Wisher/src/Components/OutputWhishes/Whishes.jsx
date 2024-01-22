import React, { useState, useEffect } from "react";

export default function Whishes({ input }) {
  const [isValue, setIsValue] = useState(false);

  const wishes = [
    `Happy Birthday ${input}! May your day be filled with joy, laughter, and all the things you love.`,
    `Wishing a fantastic birthday to ${input}! May this year bring you immense happiness and exciting adventures.`,
    `Happy Birthday, ${input}! May your day be as bright and wonderful as your smile.`,
    `Warmest wishes to ${input} on their special day! May your year ahead be filled with love, success, and unforgettable moments`,
    `Sending heaps of birthday joy to ${input}! May your celebration be as amazing as you are`,
    `Happy Birthday, ${input}! May this year be the beginning of extraordinary accomplishments and beautiful memories.`,
    `Wishing ${input} a day filled with love, laughter, and all the things that make your heart happy.`,
    `Happy Birthday, ${input}! May your special day be surrounded by the love of family and friends.`,
    `Warmest birthday wishes to ${input}! May the coming year be a journey of growth, success, and prosperity`,
    `Sending heartfelt birthday wishes to ${input}! May your day be as fantastic as you are, and may your dreams come true.`,
  ];
  useEffect(() => {
    setIsValue(input !== "");
  }, [input]);

  const rendomNumber1 = Math.floor(Math.random() * 10) + 1;
  const rendomNumber2 = Math.floor(Math.random() * 10) + 1;
  const rendom = "";
  if (rendomNumber1 === rendomNumber2) {
    if (rendomNumber2 === 9) {
      return rendom === rendomNumber2 - 1;
    }
    if (rendomNumber2 === 1) {
      return rendom === rendomNumber2 + 1;
    }
  }
  return (
    <div>
      {input !== "" && isValue && (
        <div>
          <p>wishes {wishes[rendomNumber1]}</p>
          <p>wishes {wishes[rendomNumber2]}</p>
        </div>
      )}
    </div>
  );
}
