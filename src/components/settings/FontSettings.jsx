import { usePreferences } from "../../contexts/PreferencesContext"

export default function FontSettings(){
    //Composant permettant de séléctionner la police voulue pour l'appli

    //Récup des traductions et des polices du hook Preferences
    const {traductions, langue, police, setPolice} = usePreferences();
    
    return(
        <div className="font-settings">
            <p>{traductions.settings.typography.label[langue]}</p>
            <label htmlFor="police-serif">
                <input type="radio" name="police" id="police-serif" value="serif" checked={police === "serif"} onChange={(e)=>setPolice(e.target.value)}/>
                {traductions.settings.typography.fontFamily.serif[langue]}
            </label>
            <label htmlFor="police-sans-serif">
                <input type="radio" name="police" id="police-sans-serif" value="sansSerif" checked={police === "sansSerif"} onChange={(e)=>setPolice(e.target.value)}/>
                {traductions.settings.typography.fontFamily.sansSerif[langue]}
            </label>
            <label htmlFor="police-opendys">
                <input type="radio" name="police" id="police-opendys" value="openDys" checked={police === "openDys"} onChange={(e)=>setPolice(e.target.value)}/>
                {traductions.settings.typography.fontFamily.openDys[langue]}
            </label>
        </div>
    )
}