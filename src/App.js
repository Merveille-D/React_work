import './styles/app.css'
import { Card } from "./components/Card";
import { Banner } from "./components/Banner";
import { ShoppingList } from "./components/ShortplantList";
import { Footer } from "./components/Footer";
import { useState } from "react";
import { useEffect } from "react";
function App(){   
 const savecard= localStorage.getItem('card')
 const[card,updatecard]=useState(savecard? JSON.parse(savecard) : [])
  useEffect(() => {
  localStorage.setItem('card', JSON.stringify(card))
  }, [card])

  return (<div>
            <Banner props='Ici achetez toutes les plantes dont vous avez toujours rêvées' />
            <div className='lmj-layout-inner '>
            <Card card={card} updatecard={updatecard}/>
            <ShoppingList  card={card} updatecard={updatecard}/>
            </div>
            <Footer/>
          </div>)


}


export default App;
