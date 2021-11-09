import React from "react";
import { useDispatch } from "react-redux";
import filterByOrigin from "../../redux/actions"
import style from "./byOrigin.module.css";

export default function FilterByOrigin() {
  const dispatch = useDispatch();

  const handleFilteredByOrigin = (e) => {
    dispatch(filterByOrigin(e.target.value));
  };

  return (
    <div>
      <label>Filtrar por origen</label>
      <select
        className={style.selectCss}
        onChange={(e) => handleFilteredByOrigin(e)}
      >
        <option value="all">All</option>
        <option value="created">Creates</option>
        <option value="api">Naturals</option>
      </select>
    </div>
  );
}
