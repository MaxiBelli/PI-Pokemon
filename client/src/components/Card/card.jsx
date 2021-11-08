import React from 'react';
import style from './card.module.css'



const Card = ({name, image, type}) => {
    const firstLetter = (name) => {
        return name.charAt(0).toUpperCase() + name.slice(1)
    };

    return(
        <div>
            <h2 className={style.title}>{firstLetter(name)}</h2>
            <h5 className={style.type}>{type}</h5>
            <img className={style.image} src={image}/>
        </div>
    )
};

export default Card;

