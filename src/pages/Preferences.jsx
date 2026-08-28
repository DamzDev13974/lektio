import NavBottom from "../components/NavBottom";
import AppSettings from "../components/settings/AppSettings";
import TypoSettings from "../components/settings/TypoSettings";
import { usePreferences } from "../contexts/PreferencesContext";
import { DatabaseIcon } from "@phosphor-icons/react";


export default function Preference(){
    //Page permettant le changement de langue, thème, couleur d’accentuation, de typographie et un reset des préférences. Tout ces réglages seront persistés dans le LocalStorage

    const{theme,traductions,langue} = usePreferences();

    //Je fais un affichage temporaire, le temps que le json recup toutes les infos
    if(!traductions.nav){
        return (
            <div className={"settings-page theme-"+theme}> 
            <h1>Chargement en cours...</h1>
            <NavBottom/>
        </div>
        )
    }

    return (
        <div className={"settings-page theme-"+theme}> 
            <h1>{traductions.nav.library[langue]}</h1>
            <AppSettings/>
            <TypoSettings/>
            <div className="reset-local">
                <h2><DatabaseIcon size={24}/>{traductions.settings.data.label[langue]}</h2>
                <button onClick={()=>{localStorage.clear();window.location.reload();}}>{traductions.settings.data.resetPreferences[langue]}</button>
            </div>
            <NavBottom/>
        </div>
    )
}