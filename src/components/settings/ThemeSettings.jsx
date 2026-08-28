import { usePreferences } from "../../contexts/PreferencesContext";
import { LightbulbIcon } from "@phosphor-icons/react";

export default function ThemeSettings(){
    //Composant permettant de selectionner la couleur du theme voulue par l'user

    //Recup des traductions et du theme
    const{traductions,langue,theme, setTheme} = usePreferences();

    return(
        <div className="theme-wrapper">
            <p>{traductions.settings.appearance.theme.label[langue]}</p>
            <label htmlFor="theme-clear">
                <input type="radio" name="theme" id="theme-clear" checked={theme === "clear"} value={"clear"} onChange={(e)=>setTheme(e.target.value)}/> 
                <LightbulbIcon size={24}/>{traductions.settings.appearance.theme.light[langue]}
            </label>
            <label htmlFor="theme-sepia">
                <input type="radio" name="theme" id="theme-sepia" checked={theme === "sepia"} value={"sepia"} onChange={(e)=>setTheme(e.target.value)}/> 
                <LightbulbIcon size={24}/> {traductions.settings.appearance.theme.sepia[langue]}
            </label>
            <label htmlFor="theme-dark">
                <input type="radio" name="theme" id="theme-dark" checked={theme === "dark"} value={"dark"} onChange={(e)=>setTheme(e.target.value)}/>
                <LightbulbIcon size={24}/>{traductions.settings.appearance.theme.dark[langue]}
            </label>
        </div>
    )
}