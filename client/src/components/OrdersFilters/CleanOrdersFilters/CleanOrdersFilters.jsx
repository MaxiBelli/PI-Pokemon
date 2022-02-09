import React from "react";
import { useDispatch } from "react-redux";
import getPokemons from "../../actions/getPokemons";
import style from "./cleanFilters.module.css";

export default function CleanFilter() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getPokemons());
  };

  return (
    <div>
      <button
        className={style.Filter}
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        Limpiar
      </button>
    </div>
  );
}
