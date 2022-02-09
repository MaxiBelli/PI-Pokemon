import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPokemons,
  getTypes,
  filterByType,
  filterByOrigin,
  orderByName,
  orderByAttack,
} from "../../redux/actions";

import Paged from "../Paged/Paged";
import OrderByName from "../OrdersFilters/ByName/OrderByName";
import OrderByAttack from "../OrdersFilters/ByAttack/OrderbyAttack";
import FilterByTypes from "../OrdersFilters/ByTypes/FilterByTypes";
import FilterByOrigin from "../OrdersFilters/ByOrigin/FilterByOrigin";
import CleanOrdersFilters from "../OrdersFilters/CleanOrdersFilters";
import RenderPokemons from "../../Render/RenderPokemon";
import NavBar from "../NavBar/NavBar";
import Loading from "../Loading/Loading";
import Footer from "../Footer/Footer";

export default function Home() {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.pokemons);
  const allTypes = useSelector((state) => state.types);
  const loading = useSelector((state) => state.loading);

  const [currentPage, setCurrentPage] = useState(1); //mi página actual que va a arrancar en 1
  const [charactersPage, setCharactersPage] = useState(9); //mis personajes por página que siempre van a ser 9
  const [order, setOrder] = useState("");
  const indexLastCharacter = currentPage * charactersPage;
  const indexFirstCharacter = indexLastCharacter - charactersPage;
  const currentCharacters = allPokemons.slice(
    indexFirstCharacter,
    indexLastCharacter
  ); //me va a devolver un arreglo donde en la primer página va a tener los elementos de la posición 0 a la 8
  const page = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getPokemons());
    dispatch(getTypes());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <NavBar />
          <div>
            <OrderByName setCurrentPage={setCurrentPage} setOrder={setOrder} />
            <OrderByAttack
              setCurrentPage={setCurrentPage}
              setOrder={setOrder}
            />
            <FilterByTypes allTypes={allTypes} />
            <FilterByOrigin />
            <CleanOrdersFilters />
          </div>
          <div>
            <div>
              <Paged
                charactersPage={charactersPage}
                allPokemons={allPokemons.length}
                page={page}
              />
            </div>
          </div>
          <div>
            <RenderPokemons
              currentCharacters={currentCharacters}
              allPokemons={allPokemons.length}
            />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}
