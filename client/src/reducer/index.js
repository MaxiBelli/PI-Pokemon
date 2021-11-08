import { POST_POKEMON } from '../actions/createPokemon';
import { GET_BY_ID } from '../actions/getById'
import { GET_POKEMON } from '../actions/getPokemons'
import { GET_TYPES } from '../actions/getTypes'
import { SET_LOADING } from '../actions/setLoading';
import { RESET_POKEMON } from '../actions/resetPokemon';
import { GET_BY_NAME } from '../actions/getPokemonByName';
import { FILTERED_BY_TYPES } from '../actions/filteredByTypes';
import { FILTERED_BY_ORIGIN } from '../actions/filteredByOrigin';
import { FILTERED_BY_NAME } from '../actions/filteredByName';
import { FILTERED_BY_POWER } from '../actions/filterByPower';



const initialState = {
    pokemons: [], 
    allPokemons: [],
    types: [],
    pokemonDetail: [],
    loading: false
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMON:
            return {
                ...state,
                pokemons: action.payload,
                allPokemons: action.payload,
                loading:false
            }

        case GET_TYPES:
            return {
                ...state,
                types: action.payload
            }
            
        case GET_BY_NAME:
            return {
                ...state,
                pokemons: action.payload,
                loading: false
            }

        case POST_POKEMON:
            return {
                ...state,
            }

        case FILTERED_BY_TYPES:
            const allDogs = state.dogs
            const tempDogs = allDogs.map(e => {
                return {...e, temperaments: e.temperaments.map(e => e.name)}
            })
            const temperamentsFiltered = action.payload === 'All' ? allDogs : tempDogs.filter(e => {
                return e.temperaments.includes(action.payload)
            })
            return {
                ...state,
                dogs: temperamentsFiltered
            }

        case FILTERED_BY_ORIGIN:
            const allPokemon = state.allPokemons
            const filterCreate = action.payload === 'created' ? allPokemon.filter(e => e.createInDb) : allPokemon.filter(e => !e.createInDb)
            return{
                ...state,
                pokemons: action.payload === 'all' ? allPokemon : filterCreate
            }

        case FILTERED_BY_NAME: 
            const orderPokemon = state.allPokemons
            const orderName = action.payload === 'asc' ?
            
            orderPokemon.sort(function(a, b) {
                
                if(a.name.toLowerCase() > b.name.toLowerCase()) {
                    return 1
                }
                if(b.name.toLowerCase() > a.name.toLowerCase()) {
                    return -1
                }
                return 0;
            }) : 
            orderPokemon.sort(function (a, b) {
                if(a.name.toLowerCase() > b.name.toLowerCase()) {
                    return -1
                }
                if(b.name.toLowerCase() > a.name.toLowerCase()) {
                    return 1
                }
                return 0;
            })
            
            return {
                ...state,
                pokemons: orderName
            }

        case FILTERED_BY_POWER:
            const orderMaxPower = state.allPokemons
            const orderByPower = action.payload === 'max' ?
            orderMaxPower.sort(function(a, b) {
                if(a.attack > b.attack) {
                    return -1
                }
                if(b.attack > a.attack) {
                    return 1
                }
                return 0
            }) :
            orderMaxPower.sort(function(a, b) {
                if(a.attack > b.attack) {
                    return 1
                }
                if(b.attack > a.attack) {
                    return -1
                }
                return 0;
            })
            return {
                ...state,
                pokemons: orderByPower
            }

        case GET_BY_ID:
            console.log('REDUCER',action.payload)
            return {
                ...state,
                pokemonDetail: action.payload,
                loading: false
            }

        case SET_LOADING:
            return {
                ...state,
                loading: true
            }

        case RESET_POKEMON:
            return {
                ...state, 
                pokemonDetail: []
            }
            
        default:
            return state;
    }
};

export default rootReducer;