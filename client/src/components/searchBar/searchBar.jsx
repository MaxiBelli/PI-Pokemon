import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import getPokemonsByName from '../../actions/getPokemonByName';

const SearchBar = () => {
    const dispatch = useDispatch();
    const [pokemonName, setPokemonName] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
        setPokemonName(e.target.value)
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getPokemonsByName(pokemonName))
    }

    return(
        <div>
            <input type='text' placeholder='Buscar...' onChange={e => handleChange(e)}/>
            <button onClick={e => handleSubmit(e)} type='submit'>Buscar</button>
        </div>
    )
}

export default SearchBar;