import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonName } from "../../redux/actions";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [pokemonName, setPokemonName] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setPokemonName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getPokemonName(pokemonName));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Pokemon..."
        onChange={(e) => handleChange(e)}
      />
      <button onClick={(e) => handleSubmit(e)} type="submit">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
