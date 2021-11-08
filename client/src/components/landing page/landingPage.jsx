import React from 'react';
import { Link } from 'react-router-dom'
import style from './landingPage.module.css'
import image from '../../media/Pokemon.png'

const landingPage = () => {

    return(
        <div className={style.universal}>
        <div className={style.landingPage}>
           <div className={style.container}>
               <div className={style.image}>
               <img src={image}/>
               <h1>Bienvenido a App Pokedex</h1>
               <h3>Para ingresar hacer click en la pokebola</h3>
               <Link to='/home' className={style.pokebola}>
		            <div class={style.pokebola2}></div>
	            </Link>
               </div>
                 
           </div>
        </div>
        </div>
    )
    
}

export default landingPage;