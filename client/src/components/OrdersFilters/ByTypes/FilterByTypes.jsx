import React from "react";
import { useDispatch } from "react-redux";
import { filterPokemonsByType } from "../../../redux/actions";

export default function FilterByTypes({ allTypes }) {
  const dispatch = useDispatch();

  const handleFilterByTypes = (e) => {
    dispatch(filterPokemonsByType(e.target.value));
  };

  return (
    <div>
      <label>Order By Type:</label>
      <select onChange={(e) => handleFilterByTypes(e)}>
        <option value="all">Todos</option>
        {allTypes &&
          allTypes.map((type) => {
            return <option value={`${type.name}`}>{type.name}</option>;
          })}
      </select>
    </div>
  );
}
