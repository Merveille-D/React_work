 /**
  * 
  */

import { useState } from "react";

export function useToggle(initiale) {
    const [toggle, setToggle]=useState(initiale)
    const change= ()=> setToggle(v => v=!v)
    return [toggle, change]
    
}