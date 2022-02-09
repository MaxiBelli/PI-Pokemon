import React from 'react';
import { Link } from 'react-router-dom'


export default function LandingPage(){

    return(
        <div>
        <div>
           <div>
               <div>
               {/* <img> */}
               <h1>Welcome Pokemon App</h1>
               <h3>Para ingresar hacer click en la pokebola</h3>
               <Link to='/home'>
		            <div></div>
	            </Link>
               </div>
                 
           </div>
        </div>
        </div>
    )
    
}

