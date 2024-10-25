import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';

function MealCards({detail}) {

    console.log(detail)
  return (
    <div className="meals" >
        {!detail?" ":detail.map((item)=>{return(
     <div className='MealImg'>
        <img src={item.strMealThumb}/>
         <p>{item.strMeal}</p>
     <NavLink to={`/${item.idMeal}`}><button>Recipe</button></NavLink>
     </div>
        )
    }
        )
    
        }
        </div>
  );
}

export default MealCards;
