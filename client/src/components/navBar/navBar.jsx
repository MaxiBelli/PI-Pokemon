import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import style from "./navBar.module.css";

export default function NavBar() {
  return (
    <div className={style.Nav}>
      <Link to="/pokemons">
        <button className={style.create}>Create Pokemon</button>
      </Link>
      <h1 className={style.Title}>Pokemon App</h1>
      <SearchBar />
    </div>
  );
}
