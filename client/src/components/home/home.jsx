import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getPokemons from '../../actions/getPokemons';
import getTypes from '../../actions/getTypes';
import PageComponent from '../paged/paged'
import style from './home.module.css'
import RenderPokemons from '../../render/renderPokemon';
import FilterByAz from '../../filter/ascDesc/ascDesc';
import FilterByPower from '../../filter/byPower/byPower';
import FilterByTypes  from '../../filter/byTypes/byTypes';
import FilterByOrigin from '../../filter/byOrigin/byOrigin';
import CleanFilter from '../../filter/cleanFilters/cleanFilters';
import NavBar from '../navBar/navBar';
import Loading from '../loading/loading';
import Footer from '../footer/footer';

const Home = () => {

    const dispatch = useDispatch();
    const allPokemons = useSelector(state => state.pokemons)
    const allTypes = useSelector(state => state.types)
    const loading = useSelector(state => state.loading)
    
    const [currentPage, setCurrentPage] = useState(1); //mi página actual que va a arrancar en 1
    const [charactersPage, setCharactersPage] = useState(9); //mis personajes por página que siempre van a ser 9
    const [order, setOrder] = useState('');
    const indexLastCharacter = currentPage * charactersPage;
    const indexFirstCharacter = indexLastCharacter - charactersPage;
    const currentCharacters = allPokemons.slice(indexFirstCharacter, indexLastCharacter) //me va a devolver un arreglo donde en la primer página va a tener los elementos de la posición 0 a la 8
    const page = (pageNumber) => { 
        setCurrentPage(pageNumber)
    } 
    
    useEffect(() => {
        dispatch(getPokemons())
        dispatch(getTypes()) 
    },[dispatch])

    return(
    <div className={style.universal}>
        {
        (loading) ?
        <Loading className={style.loading}/>
            :
        <div className={style.container}>
            <NavBar className={style.nav}/>
            <div className={style.filter}>
                <FilterByAz setCurrentPage={setCurrentPage} setOrder={setOrder} />
                <FilterByPower setCurrentPage={setCurrentPage} setOrder={setOrder}/>
                <FilterByTypes allTypes={allTypes}/>
                <FilterByOrigin/>
                <CleanFilter/>
            </div>
            <div>
                <div className={style.page}>
                <PageComponent className={style.pagination} charactersPage={charactersPage} allPokemons={allPokemons.length} page={page}/>
                </div>
            </div> 
            <div className={style.render}>
                <RenderPokemons currentCharacters={currentCharacters} allPokemons={allPokemons.length}/>
            </div>
            <div className={style.footer}>
                <Footer/>
            </div>    
        </div>
        }
    
    </div>
    )
};




export default Home;