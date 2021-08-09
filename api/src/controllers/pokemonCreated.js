const { Pokemon, Type } = require("../db");
const axios = require("axios");
const { URL, POKEMON } = require("../Constants/constants");
const { v4: uuidv4 } = require('uuid');
const db = require("../db");



const addPokemon = async (name, createInDb, hp, attack, defense, speed, height, weight, sprite, type) => {
    console.log("TYPE POR PROPS",type)
    try{
        const addNewPokemon = await Pokemon.create({
            name: name,
            createdInDb: createInDb,
            hp: hp,
            attack: attack,
            defense: defense,
            speed: speed,
            heght: height,
            weight: weight,
            sprite: sprite,
        })
        
        const typeDb = await Type.findAll({
            where: {name: type}
        })

        addNewPokemon.addType(typeDb)
        return addNewPokemon;
        
    } catch(err) {
        return "No se pudo crear el personaje"
    }
};

module.exports = addPokemon
