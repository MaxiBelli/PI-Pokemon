// const {Router} = require('express');
// const getAllPokemon = require('../Controllers/allPokemon');
// const getPokemonApi = require('../Controllers/pokemonApi')
// const addPokemon = require('../Controllers/addPokemon')

// const router = Router();

// module.exports = router

// router.get('/', async (req, res, next) => {
//     const { name } = req.query
//     const pokemonTotal = await getAllPokemon();
//     try {
//         if(name) {
//             let pokemonName = await pokemonTotal.filter(poke => poke.name.toLowerCase() === name.toLowerCase());
//             if(pokemonName.length) {
//                 res.status(200).json(pokemonName)
//             } else {
//                 res.status(404).send('No se encontró el personaje')
//             }
//         } else {
//             res.status(200).send(pokemonTotal)
//         }
//     } catch(err) {
//         return next(err)
//     }
// });

// router.get('/:id', async (req, res, next) => {
//     const { id } = req.params
    
//     const pokeTotal = await getAllPokemon();
//     try {
//         if(id) {
//             let pokeId = await pokeTotal.filter(pokemon => pokemon.id.toString() === id)
//             console.log("FILTERRRRR", pokeId)
//             if(pokeId.length) {
//                 res.status(200).json(pokeId)
//             } else {
//                 res.status(404).send('No se encontró el personaje')
//             }
//         }
//     } catch(err) {
//         next(err)
//     }
// });



// router.post('/', async (req, res, next) => {
    
//     const {name, createInDb, hp, attack, defense, speed, height, weight, sprite, type} = req.body

//     try {
//         const create = await addPokemon(name, createInDb, hp, attack, defense, speed, height, weight, sprite, type)
//         //console.log(create)
//         res.status(200).send(create)
//         //res.send("personaje creado con éxito")
//     } catch(err) {
//         next(err)
//     }
// });



const { Router } = require('express');
const router = Router();
const axios = require('axios');
const { Pokemon, Type } = require('../db');

// Esta funcion me trae los datos de los pokemons de la api.
const getPokemonsApi = async () => {
    const pokemonsOne = await axios.get("https://pokeapi.co/api/v2/pokemon") // Aca me traigo los primeros 20 pokemons de la api.
    const pokemonTwo = await axios.get(pokemonsOne.data.next) // Aca me traigo los siguientes 20 pokemons.
    const pokemonsTotal = pokemonsOne.data.results.concat(pokemonTwo.data.results) // Me guardo los 40 pokemons en una variable.

    try {
        const infoUrl = pokemonsTotal.map(e => axios.get(e.url)) // Accedo a la url con la info de cada pokemon.
        let pokemonsInfo = Promise.all(infoUrl) // Le paso un arreglo de promesas con la respuesta de cada url(info).
            .then(e => {
                let pokemon = e.map(e => e.data) // Accedo a la info de cada url de cada pokemon.
                let infoPoke = [] // Genero un arreglo de objetos con la info que necesito de cada pokemon.
                pokemon.map(e => {
                    infoPoke.push({
                        id: e.id,
                        name: e.name,
                        hp: e.stats[0].base_stat,
                        attack: e.stats[1].base_stat,
                        defense: e.stats[2].base_stat,
                        speed: e.stats[5].base_stat,
                        height: e.height,
                        weight: e.weight,
                        sprite: e.sprites.other.dream_world.front_default,
                        types: e.types.length < 2 ? [{name: e.types[0].type.name}] : [{name: e.types[0].type.name}, {name: e.types[1].type.name}]
                    })
                })
                return infoPoke;
            })
            return pokemonsInfo;
    } catch (error) {
        console.log(error)
    }
}

// Esta funcion me trae los datos de los pokemons de la db.
const getPokemonsDb = async () => {
    try {
        return await Pokemon.findAll({
            include: {
                model: Type,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }
        })
    } catch (error) {
        console.log(error);
    }
}

// Esta funcion concatena los datos de los pokemons de la api con los de la db.
const getAllPokemons = async () => {
    const apiInfo = await getPokemonsApi();
    const dbInfo = await getPokemonsDb();
    const infoTotal = apiInfo.concat(dbInfo);
    return infoTotal;
}

// ***RUTAS*** //

router.get('/', async (req, res) => {
    const {name} = req.query;
    const pokemonsTotal = await getAllPokemons();
    try {
        if(name) {
            let pokemonName = await pokemonsTotal.find(e => e.name.toLowerCase() === name.toLowerCase());
            if(pokemonName === undefined) {
                return res.status(404).send('Pokemon not found')
            } else {
                return res.status(200).json(pokemonName)
            }
        } else {
            res.status(200).json(pokemonsTotal);
        }
    } catch (error) {
        console.log(error);
    }
})

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    const allPokemons = await getAllPokemons();
    try {
        if(id) {
            const pokemonId = await allPokemons.filter(e => e.id == id);
            pokemonId.length ?
            res.status(200).json(pokemonId) :
            res.status(404).send('Pokemon not found')
        }
    } catch (error) {
        console.log(error);
    }
})

router.post('/', async (req, res) => {
    const {name, hp, attack, defense, speed, height, weight, sprite, createdInDb, types} = req.body;
    try {
        if(name) {
            const createdPokemon = await Pokemon.create({
                name,
                hp,
                attack,
                defense,
                speed,
                height,
                weight,
                sprite,
                createdInDb
            });
            const createdDb = await Type.findAll({
                where: {name: types}
            });
            createdPokemon.addType(createdDb);
            return res.status(200).send('Pokemon successfully created')
        } else {
            return res.status(404).send('Pokemon was not created');
        }
    } catch (error) {
        console.log(error);    
    }
})


module.exports = router;
