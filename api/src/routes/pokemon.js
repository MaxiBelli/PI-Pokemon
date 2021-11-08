const {Router} = require('express');
const getAllPokemon = require('../Controllers/allPokemon');
const getPokemonApi = require('../Controllers/pokemonApi')
const addPokemon = require('../Controllers/addPokemon')

const router = Router();

module.exports = router

router.get('/', async (req, res, next) => {
    const { name } = req.query
    const pokemonTotal = await getAllPokemon();
    try {
        if(name) {
            let pokemonName = await pokemonTotal.filter(poke => poke.name.toLowerCase() === name.toLowerCase());
            if(pokemonName.length) {
                res.status(200).json(pokemonName)
            } else {
                res.status(404).send('No se encontró el personaje')
            }
        } else {
            res.status(200).send(pokemonTotal)
        }
    } catch(err) {
        return next(err)
    }
});

router.get('/:id', async (req, res, next) => {
    const { id } = req.params
    
    const pokeTotal = await getAllPokemon();
    try {
        if(id) {
            let pokeId = await pokeTotal.filter(pokemon => pokemon.id.toString() === id)
            console.log("FILTERRRRR", pokeId)
            if(pokeId.length) {
                res.status(200).json(pokeId)
            } else {
                res.status(404).send('No se encontró el personaje')
            }
        }
    } catch(err) {
        next(err)
    }
});



router.post('/', async (req, res, next) => {
    
    const {name, createInDb, hp, attack, defense, speed, height, weight, sprite, type} = req.body

    try {
        const create = await addPokemon(name, createInDb, hp, attack, defense, speed, height, weight, sprite, type)
        //console.log(create)
        res.status(200).send(create)
        //res.send("personaje creado con éxito")
    } catch(err) {
        next(err)
    }
});




