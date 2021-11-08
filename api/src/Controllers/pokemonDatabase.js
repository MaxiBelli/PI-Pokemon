const { Pokemon, Type } = require('../db');

const getPokemonDatabase = async () => {
    return await Pokemon.findAll({
        include: {
            model: Type,
            attributes: ['name'], //traer nombre
            through: {  //mediante este atributo
                attributes: [],
            },
        }
    })
};

module.exports = getPokemonDatabase;