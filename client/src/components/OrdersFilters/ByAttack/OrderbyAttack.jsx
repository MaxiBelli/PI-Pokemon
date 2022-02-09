import React from "react";
import { useDispatch } from "react-redux";
import orderByAttack from "../../../redux/actions";

export default function OrderByAttack({ setCurrentPage, setOrder }) {
  const dispatch = useDispatch();

  const handleOrderByAttack = (e) => {
    e.preventDefault();
    dispatch(orderByAttack(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordenado ${e.target.value}`);
  };

  return (
    <div>
      <label>Order By Attack:</label>
      <select
        onChange={(e) => {
          handleOrderByAttack(e);
        }}
      >
        <option value="max">Mayor Ataque</option>
        <option value="min">Menor Ataque</option>
      </select>
    </div>
  );
}
