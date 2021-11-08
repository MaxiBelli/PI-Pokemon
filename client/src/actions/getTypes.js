import axios from 'axios'
import { POKEMON_TYPES } from '../constantes'

export const GET_TYPES = 'GET_TYPES';

const getTypes = () => {
    return async(dispatch) => {
        try {
            await axios.get(POKEMON_TYPES)
            .then(res => { dispatch
            ({type: GET_TYPES, payload: res.data})})
        } catch(error) {
            console.log('Pokemons no encontrados')
        }
    }
};

export default getTypes;