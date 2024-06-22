import { useState } from "react";

export function useIncrement(initiale=0) {
    
     const [init, setInt]=useState(initiale)

     const compt=init;
     const increment = ()=> setInt(v => v+1);
     const decrement = ()=> setInt(v => v-1);

    return [compt, increment, decrement]
}