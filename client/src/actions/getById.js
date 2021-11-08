import axios from 'axios';
import { POKEMON_ID } from '../constantes';
import setLoading from './setLoading';

export const GET_BY_ID = "GET_BY_ID"

const getPokemonById = (id) => {
    return async (dispatch) => {
        
        try {
            dispatch(setLoading())
            var json = await axios.get(POKEMON_ID+id)
            return dispatch({
                type: GET_BY_ID,
                payload: json.data
            })
        } catch(error) {
            console.log('Pokemon no encontrado')
        }
    }
}

export default getPokemonById;