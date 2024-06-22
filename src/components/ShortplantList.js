import { plantList } from "./Data";
import { PlantItem } from "./PlantItem";
import { Catégorie } from "./Catégorie";
import { useState } from "react";
import '../styles/short.css'
export function ShoppingList({card,updatecard}) {

    const[categorie,updateCategorie]=useState('')

    const tabcategorie= plantList.reduce((acc,item)=>{

        if (!acc.includes(item.category)) {
            acc.push(item.category)
        }
        return acc;    
    },[])

    function addTocard(name,price) {

        const recherchePlante=card.find((plant)=> plant.name === name)

        if ( recherchePlante) {
            const nouveautab= card.filter((plant)=> plant.name !== name)

            updatecard([...nouveautab,{name,price,amount:recherchePlante.amount + 1}])

            }

        else{
                updatecard([...card,{name,price,amount:1}])
            }
        }

return(<div className="lmj-shopping-list">
    
             <Catégorie categorie={categorie} updateCategorie={updateCategorie} tabcategorie={tabcategorie}/>

        {categorie?<ul className="lmj-plant-list">  

                {plantList.filter((plant)=> categorie === plant.category).map(({ id, cover, name, water, light, price })=>(

                <div>
                    <PlantItem 
                        key={id}
                        name={name}
                        cover={cover}
                        light={light}
                        water={water}
                        price={price}
                    />
                    
                <button className="" onClick={()=> addTocard(name,price)} >Ajouter</button>
            
                </div>))}
                </ul> 
        
        :
        (       <ul className="lmj-plant-list">
            
                { plantList.map(({ id, cover, name, water, light, price })=>(
                <div>
                    <PlantItem 
                    key={id}
                    name={name}
                    cover={cover}
                    light={light}
                    water={water}
                    price={price}
                />
               
               <button onClick={()=> addTocard(name,price)} >Ajouter</button>
                </div>))}
               
                </ul>
            
        )
        }
            
        
        
    </div>)
}