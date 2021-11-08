const axios = require('axios');
const {POKEMON_URL} = require('../constantes');


const getPokemonApi = async () => {
    const pokeApiFirst = await axios.get(`${POKEMON_URL}`);
    const pokeApiSecond = await axios.get(pokeApiFirst.data.next);
    const pokeInfo = pokeApiFirst.data.results.concat(pokeApiSecond.data.results);
    try {
        const pokeMap = pokeInfo.map(pokemon => axios.get(pokemon.url))
        let pokeDex = Promise.all(pokeMap)
        .then(pokemon => {
            let pokeData = pokemon.map(pokemon => pokemon.data)
            let pokemons = []
            pokeData.map(pokemon => {
                pokemons.push({
                    id: pokemon.id,
                    name: pokemon.name,
                    hp: pokemon.stats[0].base_stat, //55
                    attack: pokemon.stats[1].base_stat,// 55
                    defense: pokemon.stats[2].base_stat,
                    speed: pokemon.stats[5].base_stat,
                    height: pokemon.height,
                    weight: pokemon.weight,
                    sprite: pokemon.sprites.other.dream_world.front_default,
                    types: pokemon.types.length > 1 ? [{name :pokemon.types[0].type.name}, {name :pokemon.types[1].type.name}] : [{name :pokemon.types[0].type.name}]
                })
            })
            
            
            return pokemons;
        })
        return pokeDex;
    } catch(err) {
        return (err)
    }
};


module.exports = getPokemonApi
