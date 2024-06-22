import sun from '../assets/sun.svg'; 
import water from '../assets/water.svg'; 
export function Carsale({cartype,carvalue}) {
    // nombre de fois qu'on peut donner une notation
    const tab=[1,2,3]

    const objet={
        1: 'peu',
        2: 'moyen',
        3:'beaucoup'
    }
    const photo= cartype==='light' ? (
        <img src={sun} alt='sun-icon' />
    ) : (
        <img src={water} alt='water-icon' />
    )

   return(
         <div 
         onClick={()=>
                         alert(`Vous avez besoin de ${objet[carvalue]}  ${cartype==='light'? "de lumier" : "d'arrosage" }` )
                    }>

             {tab.map((item)=> { return carvalue >= item? 
             <span key={item} >{photo}</span>: null})}

         </div>
   )
}