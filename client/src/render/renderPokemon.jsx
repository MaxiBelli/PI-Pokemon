import React from 'react';
import Card from '../components/Card/card';
import { Link } from 'react-router-dom';
import style from './renderPokemon.module.css';

const RenderPokemons = ({currentCharacters}) => {
console.log(currentCharacters)
    return(
        <div className={style.cards}>
            {
              currentCharacters?.map((pokemon, i) => (
                <div className={style.card}key={i}>
                    <Link className={style.link} to={`/pokemon/${pokemon.id}`}>
                    <Card 
                        name={pokemon.name}
                        id={pokemon.id}
                        image={pokemon.sprite}
                        type={pokemon.types.map(type => <h3 key={type.id}>{type.name}</h3>)}
                    />
                    </Link>
                </div>
            ))
            }  
        </div>
    )
}

export default RenderPokemons;