import React from 'react';
import { Link } from 'react-router-dom'
import SearchBar from '../searchBar/searchBar';
import style from './navBar.module.css'


const NavBar = () => {

    return(
        <div className={style.Nav}>
            <Link to='/pokemons'>
                <button className={style.create}>
                        Create Pokemon
                </button>
            </Link>
            <h1 className={style.Title}>Pokemon App</h1>
            <SearchBar/>
        </div>
    )
}

export default NavBar;