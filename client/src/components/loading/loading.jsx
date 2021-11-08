import React from 'react';
import style from './loading.module.css';

const Loading = () => {
    return(
        <div className={style.loading}>
            <div className={style.circleContainer}>
            <div className={style.circle}></div>
            <h1 className={style.h1}>LOADING...</h1>
            </div>
        </div>
        
        
    )
}

export default Loading;