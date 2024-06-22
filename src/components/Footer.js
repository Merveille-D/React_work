import { useState } from "react";
import { Forme } from "./Forme";
import '../styles/footer.css'
export function Footer() {
    
    const [input, setInput]= useState('')
    
    return(
      <div className="lmj-footer">

           <Forme value={input} setvalue={setInput} />
     </div>
    )
}