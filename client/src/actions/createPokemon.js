import axios from 'axios';
import { POKEMON_URL }  from '../constantes'

export const POST_POKEMON = "POST_POKEMON"

const createPokemon = (payload) => {
    return async(dispatch) => {
        try {
            const response = await axios.post(POKEMON_URL, payload)
            return response
        } catch(error) {
            console.log('La PokeCreator está fuera de servicio, intente más tarde')
        }
    }
}

export default createPokemon;
