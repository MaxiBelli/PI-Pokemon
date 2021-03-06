import React from "react";
import { useDispatch } from "react-redux";
import orderByName from "../../../redux/actions";

export default function OrderByName({ setCurrentPage, setOrder }) {
  const dispatch = useDispatch();

  const handleOrderByName = (e) => {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordenado ${e.target.value}`);
  };

  return (
    <div>
      <label>Order By Name:</label>
      <select onChange={(e) => handleOrderByName(e)}>
        <option value="asc">Ascendent</option>
        <option value="desc">Descendent</option>
      </select>
    </div>
  );
}
