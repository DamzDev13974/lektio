import NavBottom from "../components/NavBottom";
import AppSettings from "../components/settings/AppSettings";
import { usePreferences } from "../contexts/PreferencesContext";

export default function Preference(){
    //Page permettant le changement de langue, thème, couleur d’accentuation, de typographie et un reset des préférences. Tout ces réglages seront persistés dans le LocalStorage

    const{theme} = usePreferences();
    return (
        <div className={"settings-page theme-"+theme}> 
            <h1>Paramètres</h1>
            <p>Test routage vers page settings</p>
            <AppSettings/>
            <NavBottom/>
        </div>
    )
}