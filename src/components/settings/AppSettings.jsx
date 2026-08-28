import { usePreferences } from "../../contexts/PreferencesContext";
import ColorSettings from "./ColorSettings"
import LanguageSettings from "./LanguageSettings"
import ThemeSettings from "./ThemeSettings"
import { PaletteIcon } from "@phosphor-icons/react";


export default function AppSettings(){
    //Composant du 1er volet des réglages possibles sur l’appli : couleur du theme , d’accentuation et langues

    //Recup des traductions
    const {traductions,langue} = usePreferences();
    
    return(
        <section className="app-settings">
            <div className="application">
                <h2> <PaletteIcon size={24}/> {traductions.settings.appearance.label[langue]}</h2>
                <ThemeSettings/>
                <ColorSettings/>
                <LanguageSettings/>
            </div>
        </section>
    )
}