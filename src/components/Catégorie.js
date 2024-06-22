import '../styles/categorie.css'
export function Catégorie({categorie,updateCategorie,tabcategorie}) {
       
    return(
        <div className="lmj-categories">

           <select id="categorie"
                name="categorie"
                className="lmj-categories-select"
                onChange={(e)=> updateCategorie(e.target.value)}
            >

                <option value='Selectionner une categorie'></option>

               {tabcategorie.map((cat)=> 
               
               <option key={cat} value={cat}>{cat}</option>)}

               </select>
               
               <button onClick={()=>updateCategorie('')}>Reinitialiser</button>
           
        </div>
    )
}