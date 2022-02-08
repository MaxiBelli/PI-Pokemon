import React from 'react';
import { useDispatch } from 'react-redux';
import { getPokemons } from "../../redux/actions";



export default function ReloadPokemons(){
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getPokemons())
    };

    return(
        <div>
            <button onClick={e=>{handleSubmit(e)}}>Pokemons</button>
        </div>
    )
}

