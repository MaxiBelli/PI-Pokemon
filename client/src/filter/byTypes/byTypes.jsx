import React from 'react';
import { useDispatch } from 'react-redux';
import filteredByTypes from '../../actions/filteredByTypes';
import style from './byTypes.module.css'


const FilterByTypes = ({allTypes}) => {
    const dispatch = useDispatch();

    const handleFilterByTypes = (e) => {
        dispatch(filteredByTypes(e.target.value))
    }

    return(
        <div>
            <label>Ordenar Pokemons por tipo</label>
            <select className={style.selectCss} onChange={e => handleFilterByTypes(e)}>
                <option value='all'>Todos</option>
                {
                    allTypes && allTypes.map(type => {
                        return(
                        <option value={`${type.name}`}>
                            {type.name}
                        </option>
                    )})
                }
            </select>
        </div>
    )
}

export default FilterByTypes;