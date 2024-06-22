import { useEffect, useState } from "react";
import { Header } from "./Header";
import '../styles/Card.css'

export function Card({card,updatecard}) {

      const[open, updateopen]=useState(true)
      
      const solde=card.reduce(
        
            (acc,plant)=> acc + plant.price * plant.amount,
          
            0)

      useEffect(() => {
        document.title = `LMJ: ${solde}€ d'achats`
       },[solde])


      return open?<div className="lmj-cart"> 

                        <button 
                        className="lmj-cart-toggle-button" 
                        onClick={()=> updateopen(false)}>
                        Fermer
                        </button>

                      {card.length>0?<div>

                                        <Header props='Panier'/>

                                        {card.map(({name,price,amount},index)=>( <div key={`${name}-${index}`}> {name} {price }€ * {amount} </div>) )}

                                        <p> Solde : {solde}$ </p>

                                        <button 
                                          onClick={()=>updatecard([])}>
                                            vider le panier
                                        </button>
                                    </div>

                                  :  <p>Le panier est vide</p>
                                  
                                  }  
                    </div>                
              :
                        (
                            <div className="lmj-cart-closed ">

                              <button 
                              className="lmj-cart-toggle-button" 
                              onClick={()=> updateopen(true)}>Ouvrire</button>
                              
                            </div>
                          
                            
                        )
              
               
}