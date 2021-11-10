import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonDetail } from "../../redux/actions";
import style from "./pokemonDetail.module.css";


export default function PokemonDetail(props){
  const dispatch = useDispatch();
  const { id } = props.match.params;
  const pokemonDetail = useSelector((state) => state.pokemonDetail);
  

  useEffect(() => {
    dispatch(getPokemonDetail(id));
  }, []);

 

  return (
    <div className={style.universal}>
     {pokemonDetail && pokemonDetail.id !== id ? (
        <p>LOADING...</p>
      ) : (
        <div className={style.detail} key={pokemonDetail.id}>
          <img
            className={style.image}
            src={
              pokemonDetail[0]?.sprite ? pokemonDetail[0].sprite : null
            }
          />
          <h1>{pokemonDetail[0]?.name}</h1>
          <h4>
            TIPO: {pokemonDetail[0]?.types.map((type) => type.name + " ")}
          </h4>
          <div>
            <h5>HP: {pokemonDetail[0]?.hp}</h5>
            <h5>ATTACK: {pokemonDetail[0]?.attack}</h5>
            <h5>DEFENSE: {pokemonDetail[0]?.defense}</h5>
            <h5>SPEED: {pokemonDetail[0]?.speed}</h5>
            <div>
              <h5>HEIGHT: {pokemonDetail[0]?.height}</h5>
              <h5>WEIGHT: {pokemonDetail[0]?.weight}</h5>
            </div>
          </div>

          <Link to="/home">
            <button className={style.buttonDetail}>Volver</button>
          </Link>
          {/* <h5>ID: {pokemonDetail.id}</h5> */}
        </div>
      )}
    </div>
  );
};


