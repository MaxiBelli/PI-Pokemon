import axios from 'axios'
import { POKEMON_URL } from '../constantes'
import setLoading from './setLoading';

export const GET_POKEMON = "GET_POKEMON";

const getPokemons = () => {
    return async(dispatch) => {
        dispatch(setLoading())
        await axios.get(POKEMON_URL)
        .then(res => { dispatch
            ({type: GET_POKEMON, payload: res.data})})
    }
};

export default getPokemons;
