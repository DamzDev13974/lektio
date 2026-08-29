import { usePreferences } from "../../contexts/PreferencesContext"

export default function LanguageSettings(){
    //Composant permettant à l'user de selectionner la langue voulue pour utiliser l'application

    //Récup des traductions et des langues
    const {traductions,langues,langue, setLangue}= usePreferences();
    return(
        <div className="lang-wrapper">
            <p>{traductions.settings.appearance.language[langue]}</p>
            {/* Je parcours le tableau des langues pour en faire une option par langue dans le select */}
            {langues.map((l)=>{
                return(
                    <label key={l} htmlFor={"langue-" + l} >
                        <input type="radio" name="langue" id={"langue-" + l}  value={l} checked={langue === l} onChange={(e)=>setLangue(e.target.value)}/>
                        {l.toUpperCase()}
                    </label>
                )
            })}
        </div>
)
}