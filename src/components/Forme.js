export function Forme({value,setvalue}) {
    function control() {

        if (!value.includes('@')) alert('votre email nest pas approprier')  }

    return (
        <div>

            <label>Entrez votre Email <br/>
            
             <input type="email" value={value} onChange={(e)=>setvalue(e.target.value)} onBlur={control}/>

            </label><br/>

            <button > Envoyer </button>

        </div>
    )
}