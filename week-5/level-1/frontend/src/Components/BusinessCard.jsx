// import React from 'react'

export default function Businesscard(props) {
  return (
    <div className="mainContainer">
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <h3>Interest</h3>
      <ul>
        {props.interest.map((interest) => (
          <li key={interest}>{interest}</li>
        ))}
      </ul>
      <a href="https://www.instagram.com/" target="_blank">
        Intagram
      </a>
      <a href="https://twitter.com/" target="_blank">
        Twitter
      </a>
    </div>
  );
}
