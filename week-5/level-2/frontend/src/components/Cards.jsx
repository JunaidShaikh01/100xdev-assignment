import React from "react";

export default function Cards({
  setCards,
  id,
  name,
  description,
  interest,
  linkdin,
  twitter,
}) {
  const editHadler = (id, name, description, interest, twitter, linkdin) => {
    const newName = prompt(`Change your name from ${name} to :`);
    const newDescription = prompt(
      `Change your description from this ${description} to :`
    );
    const newInterest = prompt(
      `Change ypur interest from this ${interest.join(",")} to:`
    );
    const newLinkdin = prompt(`Change your linkdin from this ${linkdin} to :`);
    const newTwitter = prompt(`Change your twitter from this ${twitter} to :`);

    fetch("http://localhost:3000/put", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        name: newName,
        description: newDescription,

        interest: newInterest.split(","),

        linkdin: newLinkdin,
        twitter: newTwitter,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log("Result", result);
        setCards((prev) =>
          prev?.map((card) => (card._id == id ? result.updated : card))
        );
      });
  };

  const deleteHandler = (id, name) => {
    const confirmDelete = confirm(
      `Do yoou want to delete this card name : ${name}`
    );
    if (confirmDelete) {
      fetch("http://localhost:3000/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
        }),
      })
        .then((response) => response.json)
        .then((data) =>
          setCards((prev) => prev.filter((card) => card._id != id))
        );
    }
  };
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <h4>Interest</h4>
      <ul>
        {interest.map((interest, index) => (
          <li key={index}>{interest}</li>
        ))}
      </ul>
      <div>
        <a href="https://in.linkedin.com/" target="_blank">
          Linkdin
        </a>
        <a href="https://twitter.com/" target="_blank">
          Twitter
        </a>
      </div>
      <button
        onClick={() =>
          editHadler(id, name, description, interest, linkdin, twitter)
        }
      >
        Edit
      </button>
      <button onClick={() => deleteHandler(id, name)}>Delete</button>
    </div>
  );
}
