const { Pokemon, Type } = require("../db");
const axios = require("axios");
const { URL, POKEMON } = require("../Constants/constants");
const { v4: uuidv4 } = require('uuid');
const db = require("../db");


async function getPokemonById(req, res) {
    let id = req.params.id; 
    if(id) {
        try {
            if(!id.includes('-')) {
                var api = await axios.get(`${URL}${POKEMON}/${id}`);
                let type = api.data.types.map(el => el.type.name);
                var poke = {
                    name: api.data.name.charAt(0).toUpperCase() + api.data.name.slice(1),
                    id: api.data.id,
                    image: api.data.sprites.other.dream_world.front_default,
                    types: type,
                    height: api.data.height,
                    weight: api.data.weight,
                    hp: api.data.stats[0].base_stat,
                    attack: api.data.stats[1].base_stat,
                    defense: api.data.stats[2].base_stat,
                    speed: api.data.stats[5].base_stat
                } 
                return res.json(poke);

            } else { 
            
                const dataBase = await Pokemon.findOne({
                    where:{
                        id: id,
                    },
                    include: [Type] 
                })
                let type = dataBase.types.map(el => el.name);
                var finalPokemon ={
                    name : dataBase.name.charAt(0).toUpperCase() + dataBase.name.slice(1),
                    id: dataBase.id,
                    image: "https://i.pinimg.com/originals/72/e7/8b/72e78b090e58bfd47a49e7e348c00978.jpg",
                    types: type,
                    height: dataBase.height,
                    weight: dataBase.weight,
                    hp: dataBase.hp,
                    attack: dataBase.attack,
                    defense: dataBase.defense,
                    speed: dataBase.speed
                } 
                
                if(!dataBase) {
                    return res.status(404).send({message: 'Pokemon not found'})
                }
                return res.json(finalPokemon);
                
            }
           
        } catch (error) {
            return res.status(404).send({message: 'Bad Request'});
        }
    }
};