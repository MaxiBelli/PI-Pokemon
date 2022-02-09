import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
// import style from "./navBar.module.css";

export default function NavBar() {
  return (
    <div>
      <Link to="/pokemons">
        <button>Create Pokemon</button>
      </Link>
      <h1>Pokemon App</h1>
      <SearchBar />
    </div>
  );
}
