import React from "react";
import style from "./paged.module.css";

export default function Pagination({
  charactersPage,
  allPokemons,
  pagination,
}) {
  //me los traigo como props del otro componente
  let pageNumbers = [];

  for (let i = 0; i <= Math.floor(allPokemons / charactersPage); i++) {
    pageNumbers.push(i + 1);
  }

  return (
    <div className={style.page}>
      <div className={style.page}>
        {pageNumbers &&
          pageNumbers.map((number) => (
            <button class="number red" key={number}>
              <a onClick={() => pagination(number)}>{number}</a>
            </button>
          ))}
      </div>
    </div>
  );
}
