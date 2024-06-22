import { useState } from "react";
import { Carsale } from "./Carsale";
import '../styles/planite.css'

export function PlantItem({name,cover,light,water,price}) {

    const [mot,setMot]=useState('')

    function handleClick(plantName) { 
        const mots=`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`
       setMot(mots)
        }

    return(

   <li className="lmj-plant-item " onClick={()=> handleClick(name)}>

        <span className='lmj-plant-item-price'>{price}€</span>
        <img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`}/>
        <h4>{name}</h4>

        <div>
        <Carsale cartype='light' carvalue={light}/>
        <Carsale cartype='water' carvalue={water}/>
        </div>
        
  </li>
    )
}

