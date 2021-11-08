import React from 'react';
import style from './paged.module.css'

export default function PageComponent({charactersPage, allPokemons, page}) { //me los traigo como props del otro componente
    let pageNumbers = []

    for(let i=0; i <= Math.floor(allPokemons/charactersPage); i++) { //voy a tomar el número redondeado de lo que resulta de dividir todoa los personajes por los personajes por página que quiero
        pageNumbers.push(i + 1) //voy a pushear el resultado de lo anterior en pageNumbers
    };


    return(
        <div className={style.page}>
            <div className={style.page}>
                {
                    pageNumbers && pageNumbers.map(number => (
                        <button class="number red" key={number}>
                            <a onClick={() => page(number)}>{number}</a>
                        </button>
                    ))}
            </div>
        </div>
    )
}

