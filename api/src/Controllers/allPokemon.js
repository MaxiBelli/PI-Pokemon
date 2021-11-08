const getPokemonApi = require('./pokemonApi')
const getPokemonDatabase = require('./pokemonDatabase')

const getAllPokemon = async () => {
    const apiData = await getPokemonApi();
    
    const databaseData = await getPokemonDatabase();
    let fullData = apiData.concat(databaseData);
    return fullData;
}

module.exports = getAllPokemon;