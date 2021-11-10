import React from "react";


export default function CardPokemon({ name, image, type }) {
  const firstLetter = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <div>
      <h2>{firstLetter(name)}</h2>
      <h5>{type}</h5>
      <img src={image} />
    </div>
  );
}
