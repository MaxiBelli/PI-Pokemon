import axios from 'axios';
import { POKEMON_QUERY } from '../constantes';
import setLoading from './setLoading';

export const GET_BY_NAME = "GET_BY_NAME"

const getPokemonsByName = (payload) => {
    return async(dispatch) => {
        try {
            dispatch(setLoading())
            await axios.get(POKEMON_QUERY + payload)
            .then(res => { dispatch
            ({type: GET_BY_NAME,
            payload:res.data})
            })
        } catch(error) {
            console.log('Pokemon no encontrado')
        }
    }
}

export default getPokemonsByName;