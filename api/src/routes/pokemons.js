const express = require('express')
const { Pokemon, Type} = require('../models/index')
const { v4: uuidv4 } = require('uuid');
const router = express.Router()
const axios = require('axios')

// 1.[ ] GET /pokemons:
// Obtener un listado de los pokemons desde pokeapi.
// Debe devolver solo los datos necesarios para la ruta principal

router.get('/', (req, res, next) => {

    var apiPokemons = axios.get("https://pokeapi.co/api/v2/pokemon")
    var apiPokemonsPromise = apiPokemons.map(pokemon => axios.get(pokemon.url))

    var dbPokemonsPromise =  Pokemon.findAll()

    return Promise.all([
        apiPokemonsPromise,
        dbPokemonsPromise
    ]).then(resultados => {
        var apiCharacters = resultados[0].data.results
        var dbCharacters = resultados[1]

})