const addTypes = require('../../index')

const pokemonTypes = async () => {
    try{
        const allTypes = findAll(addTypes)
    resizeBy.status(200).json(allTypes)
    } catch(err) {
        return (err)
    }
};



module.exports = pokemonTypes;