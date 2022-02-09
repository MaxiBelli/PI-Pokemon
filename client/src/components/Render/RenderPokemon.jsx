import React from 'react';
import CardPokemon from '../components/CardPokemon/CardPokemon';
import { Link } from 'react-router-dom';


export default function RenderPokemons({currentCharacters}) {

console.log(currentCharacters)
    return(
        <div>
            {
              currentCharacters?.map((pokemon, i) => (
                <div key={i}>
                    <Link to={`/pokemon/${pokemon.id}`}>
                    <CardPokemon 
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

