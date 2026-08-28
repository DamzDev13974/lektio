import { LightbulbIcon, PaletteIcon } from "@phosphor-icons/react";
import { usePreferences } from "../../contexts/PreferencesContext";

export default function AppSettings(){
    //Composant du 1er volet des réglages possibles sur l’appli : couleur du theme , d’accentuation et langues

    const {theme, setTheme} = usePreferences();
    
    return(
        <section className="app-settings">
            <div className="application">
                <h2> <PaletteIcon size={24}/> Apparence </h2>
                <p>Theme:</p>
                <div className="theme-wrapper">
                    <label>
                        <input type="radio" name="theme" id="theme-clear" checked={theme === "clear"} value={"clear"} onChange={(e)=>setTheme(e.target.value)}/> 
                        <LightbulbIcon size={24}/> Clair
                    </label>
                    <label>
                        <input type="radio" name="theme" id="theme-sepia" checked={theme === "sepia"} value={"sepia"} onChange={(e)=>setTheme(e.target.value)}/> 
                        <LightbulbIcon size={24}/> Sépia
                    </label>
                    <label>
                        <input type="radio" name="theme" id="theme-dark" checked={theme === "dark"} value={"dark"} onChange={(e)=>setTheme(e.target.value)}/>
                        <LightbulbIcon size={24}/> Dark
                    </label>
                </div>
            </div>
        </section>
    )
}