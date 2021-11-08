import React from 'react';
import { useDispatch } from 'react-redux';
import filterByName from '../../actions/filteredByName';
import style from './ascDesc.module.css'


const FilterByAz = ({setCurrentPage, setOrder}) => {
    const dispatch = useDispatch();

    const handleOrderByName = (e) => {
        e.preventDefault();
        dispatch(filterByName(e.target.value))
        setCurrentPage(1)
        setOrder(`Ordenado ${e.target.value}`)
    }

    return(
        <div>
            <label>Ordenar Pokemons A-Z</label>
            <select className={style.selectCss} onChange={e => handleOrderByName(e)}>
                <option value='asc'>Ascendente</option>
                <option value='desc'>Descendente</option>
            </select>
        </div>
    )
}

export default FilterByAz;